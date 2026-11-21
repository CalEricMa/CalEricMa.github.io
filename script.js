// The portrait is a rubber sheet: pull it anywhere and it stretches, then wobbles back.
// A WebGL mesh draws the photo; a spring simulation moves the mesh. Without WebGL, or with
// prefers-reduced-motion, the plain <img> stays.
(() => {
  const frame = document.querySelector('.portrait');
  const img = frame && frame.querySelector('img');
  if (!frame || !img) return;

  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const NX = 14; // mesh cells across
  const NY = 21; // mesh cells down
  const STIFFNESS = 150; // pull back to rest
  const DAMPING = 5; // lower = more wobble
  const COUPLING = 40; // neighbours drag each other, which makes ripples
  const GRIP = 380; // how hard the pointer holds the vertices it grabbed
  const SIGMA = 0.2; // grab radius, as a fraction of the frame width
  const MAX_PULL = 0.4; // furthest the pointer can pull, as a fraction of the frame
  const POKE = 5; // speed of a click or key press wobble

  const cols = NX + 1;
  const count = cols * (NY + 1);
  const restX = new Float32Array(count);
  const restY = new Float32Array(count);
  const pin = new Float32Array(count); // 0 at the frame edge so the photo never leaves its frame
  const offX = new Float32Array(count);
  const offY = new Float32Array(count);
  const velX = new Float32Array(count);
  const velY = new Float32Array(count);
  const grip = new Float32Array(count);
  const accX = new Float32Array(count);
  const accY = new Float32Array(count);
  const positions = new Float32Array(count * 2);

  const smoothstep = (a, b, x) => {
    const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
    return t * t * (3 - 2 * t);
  };
  for (let j = 0; j <= NY; j++) {
    for (let i = 0; i <= NX; i++) {
      const k = j * cols + i;
      restX[k] = i / NX;
      restY[k] = j / NY;
      pin[k] = smoothstep(0, 0.1, Math.min(restX[k], 1 - restX[k], restY[k], 1 - restY[k]));
    }
  }

  let gl = null;
  let canvas = null;
  let positionBuffer = null;
  let live = false;
  let frameId = 0;
  let last = 0;
  let pull = null; // { w, h, startX, startY, dx, dy, moved, id }

  const failSetup = () => {
    gl = null;
    canvas = null;
    return false;
  };

  const setupGL = () => {
    canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    gl = canvas.getContext('webgl', { alpha: false, antialias: true });
    if (!gl) {
      canvas = null;
      return false;
    }

    const compile = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };
    const program = gl.createProgram();
    gl.attachShader(program, compile(gl.VERTEX_SHADER, 'attribute vec2 p;attribute vec2 u;varying vec2 v;void main(){v=u;gl_Position=vec4(p.x*2.-1.,1.-p.y*2.,0.,1.);}'));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, 'precision mediump float;uniform sampler2D t;varying vec2 v;void main(){gl_FragColor=texture2D(t,v);}'));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return failSetup();
    gl.useProgram(program);

    positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions.byteLength, gl.DYNAMIC_DRAW);
    const pLoc = gl.getAttribLocation(program, 'p');
    gl.enableVertexAttribArray(pLoc);
    gl.vertexAttribPointer(pLoc, 2, gl.FLOAT, false, 0, 0);

    const uv = new Float32Array(count * 2);
    for (let k = 0; k < count; k++) {
      uv[k * 2] = restX[k];
      uv[k * 2 + 1] = restY[k];
    }
    const uvBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, uv, gl.STATIC_DRAW);
    const uLoc = gl.getAttribLocation(program, 'u');
    gl.enableVertexAttribArray(uLoc);
    gl.vertexAttribPointer(uLoc, 2, gl.FLOAT, false, 0, 0);

    const indices = new Uint16Array(NX * NY * 6);
    let n = 0;
    for (let j = 0; j < NY; j++) {
      for (let i = 0; i < NX; i++) {
        const a = j * cols + i;
        indices.set([a, a + 1, a + cols, a + 1, a + cols + 1, a + cols], n);
        n += 6;
      }
    }
    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    try {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
    } catch (e) {
      return failSetup();
    }
    // Mobile browsers can drop the GL context (tab in the background, Back button, low memory): fall back to the plain photo, then rebuild.
    canvas.addEventListener('webglcontextlost', (e) => {
      e.preventDefault();
      disable();
    });
    canvas.addEventListener('webglcontextrestored', () => {
      canvas.remove();
      canvas = null;
      gl = null;
      apply();
    });
    return true;
  };

  const resize = () => {
    if (!canvas) return;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(frame.clientWidth * ratio);
    canvas.height = Math.round(frame.clientHeight * ratio);
    gl.viewport(0, 0, canvas.width, canvas.height);
  };

  const draw = () => {
    for (let k = 0; k < count; k++) {
      positions[k * 2] = restX[k] + offX[k] * pin[k];
      positions[k * 2 + 1] = restY[k] + offY[k] * pin[k];
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, positions);
    gl.drawElements(gl.TRIANGLES, NX * NY * 6, gl.UNSIGNED_SHORT, 0);
  };

  const step = (h) => {
    for (let j = 0; j <= NY; j++) {
      for (let i = 0; i <= NX; i++) {
        const k = j * cols + i;
        const l = i > 0 ? k - 1 : k;
        const r = i < NX ? k + 1 : k;
        const u = j > 0 ? k - cols : k;
        const d = j < NY ? k + cols : k;
        const avgX = (offX[l] + offX[r] + offX[u] + offX[d]) / 4;
        const avgY = (offY[l] + offY[r] + offY[u] + offY[d]) / 4;
        let ax = -STIFFNESS * offX[k] - DAMPING * velX[k] + COUPLING * (avgX - offX[k]);
        let ay = -STIFFNESS * offY[k] - DAMPING * velY[k] + COUPLING * (avgY - offY[k]);
        if (pull && grip[k] > 0.001) {
          ax += GRIP * grip[k] * (pull.dx - offX[k]);
          ay += GRIP * grip[k] * (pull.dy - offY[k]);
        }
        accX[k] = ax;
        accY[k] = ay;
      }
    }
    for (let k = 0; k < count; k++) {
      velX[k] += accX[k] * h;
      velY[k] += accY[k] * h;
      offX[k] += velX[k] * h;
      offY[k] += velY[k] * h;
    }
  };

  const resting = () => {
    for (let k = 0; k < count; k++) {
      if (Math.abs(offX[k]) > 0.0004 || Math.abs(offY[k]) > 0.0004 || Math.abs(velX[k]) > 0.01 || Math.abs(velY[k]) > 0.01) return false;
    }
    return true;
  };

  const tick = (now) => {
    const dt = Math.min((now - last) / 1000, 1 / 30);
    last = now;
    const substeps = Math.max(1, Math.ceil(dt * 240));
    for (let s = 0; s < substeps; s++) step(dt / substeps);
    if (!pull && resting()) {
      offX.fill(0);
      offY.fill(0);
      velX.fill(0);
      velY.fill(0);
      draw();
      frameId = 0;
      return;
    }
    draw();
    frameId = requestAnimationFrame(tick);
  };

  const wake = () => {
    if (frameId) return;
    last = performance.now();
    frameId = requestAnimationFrame(tick);
  };

  // Vertices near the grab point follow the pointer most; the weight falls off with distance.
  const setGrip = (u, v, w, h) => {
    for (let k = 0; k < count; k++) {
      const dx = (restX[k] - u) * w;
      const dy = (restY[k] - v) * h;
      grip[k] = Math.exp(-(dx * dx + dy * dy) / (2 * SIGMA * SIGMA * w * w)) * pin[k];
    }
  };

  const poke = (u, v, w, h) => {
    setGrip(u, v, w, h);
    let dirX = 0.5 - u;
    let dirY = 0.5 - v;
    const len = Math.hypot(dirX, dirY) || 1;
    dirX /= len;
    dirY /= len;
    for (let k = 0; k < count; k++) {
      velX[k] += grip[k] * dirX * POKE;
      velY[k] += grip[k] * dirY * POKE;
    }
    wake();
  };

  frame.addEventListener('pointerdown', (e) => {
    if (!live || e.button !== 0) return;
    const rect = frame.getBoundingClientRect();
    setGrip((e.clientX - rect.left) / rect.width, (e.clientY - rect.top) / rect.height, rect.width, rect.height);
    pull = { w: rect.width, h: rect.height, startX: e.clientX, startY: e.clientY, dx: 0, dy: 0, moved: false, id: e.pointerId, u: (e.clientX - rect.left) / rect.width, v: (e.clientY - rect.top) / rect.height };
    frame.setPointerCapture(e.pointerId);
  });

  frame.addEventListener('pointermove', (e) => {
    if (!pull || e.pointerId !== pull.id) return;
    const moveX = e.clientX - pull.startX;
    const moveY = e.clientY - pull.startY;
    if (!pull.moved && Math.hypot(moveX, moveY) < 6) return;
    if (!pull.moved) {
      pull.moved = true;
      frame.classList.add('is-pulling');
    }
    pull.dx = Math.max(-MAX_PULL, Math.min(MAX_PULL, moveX / pull.w));
    pull.dy = Math.max(-MAX_PULL, Math.min(MAX_PULL, moveY / pull.h));
    wake();
  });

  const letGo = (e, wasClick) => {
    if (!pull || e.pointerId !== pull.id) return;
    const { u, v, w, h, moved } = pull;
    pull = null;
    frame.classList.remove('is-pulling');
    if (wasClick && !moved) poke(u, v, w, h);
    else wake();
  };
  frame.addEventListener('pointerup', (e) => letGo(e, true));
  frame.addEventListener('pointercancel', (e) => letGo(e, false));

  frame.addEventListener('keydown', (e) => {
    if (!live || (e.key !== 'Enter' && e.key !== ' ')) return;
    e.preventDefault();
    poke(0.5, 0.35, frame.clientWidth, frame.clientHeight);
  });

  const enable = () => {
    if (!img.complete || !img.naturalWidth) {
      img.addEventListener('load', apply, { once: true });
      return;
    }
    if (!gl && !setupGL()) return;
    if (!canvas.parentNode) frame.appendChild(canvas);
    resize();
    draw();
    live = true;
    frame.classList.add('is-live');
    frame.setAttribute('role', 'button');
    frame.setAttribute('tabindex', '0');
    frame.setAttribute('aria-label', "Eric Ma's photo. Pull it with a mouse or finger, or press Enter or Space to make it wobble.");
  };

  const disable = () => {
    live = false;
    pull = null;
    cancelAnimationFrame(frameId);
    frameId = 0;
    offX.fill(0);
    offY.fill(0);
    velX.fill(0);
    velY.fill(0);
    frame.classList.remove('is-live', 'is-pulling');
    frame.removeAttribute('role');
    frame.removeAttribute('tabindex');
    frame.removeAttribute('aria-label');
  };

  function apply() {
    if (reduced.matches) disable();
    else enable();
  }

  reduced.addEventListener('change', apply);
  window.addEventListener('pageshow', (e) => {
    if (e.persisted && live) {
      resize();
      draw();
    }
  });
  window.addEventListener('resize', () => {
    if (live) {
      resize();
      draw();
    }
  });
  apply();
})();

// Mark the Experience or Projects link as current while that section is in view.
(() => {
  const links = [...document.querySelectorAll('.top nav a[href^="#"]')];
  if (!links.length || !('IntersectionObserver' in window)) return;
  const byId = new Map(links.map((a) => [a.hash.slice(1), a]));
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const link = byId.get(entry.target.id);
        if (!link) continue;
        if (entry.isIntersecting) {
          links.forEach((a) => a.removeAttribute('aria-current'));
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      }
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );
  byId.forEach((_, id) => observer.observe(document.getElementById(id)));
})();

// Eased scroll for in-page links, scaled to distance. Instant under prefers-reduced-motion;
// without script the CSS scroll-behavior still applies.
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;
  const cancel = () => {
    cancelAnimationFrame(frame);
    frame = 0;
  };
  ['wheel', 'touchstart', 'keydown'].forEach((type) => window.addEventListener(type, cancel, { passive: true }));

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
    if (!target || reduced.matches) return;
    e.preventDefault();
    cancel();

    const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
    const from = window.scrollY;
    const to = Math.max(0, Math.min(target.getBoundingClientRect().top + from - offset, document.documentElement.scrollHeight - innerHeight));
    const distance = to - from;
    const duration = Math.min(900, Math.max(450, 350 + Math.abs(distance) * 0.25));
    const start = performance.now();
    const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      window.scrollTo({ top: from + distance * ease(t), behavior: 'instant' });
      frame = t < 1 ? requestAnimationFrame(tick) : 0;
    };
    frame = requestAnimationFrame(tick);

    history.pushState(null, '', link.hash);
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
})();
