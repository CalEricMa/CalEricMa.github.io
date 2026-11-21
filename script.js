// The photo tag: a damped pendulum. Drag, click/tap, or Enter/Space swing it.
(() => {
  const hang = document.querySelector('.hang');
  const pivot = document.querySelector('.pivot');
  if (!hang || !pivot) return;

  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const GRAVITY_OVER_LENGTH = 10.5; // (rad/s)^2, about a 2 s period
  const DAMPING = 3.4; // 1/s, settles in about 3 s
  const NUDGE = 2.2; // rad/s from a click or key press

  let theta = 0;
  let omega = 0;
  let frame = 0;
  let last = 0;
  let live = false;
  let drag = null;
  let nudgeDirection = 1;

  const clamp = (value, limit) => Math.max(-limit, Math.min(limit, value));
  // Narrower swing on wide screens so the tag does not sweep across the contact controls.
  const maxAngle = () => (innerWidth >= 760 ? 0.45 : 0.65);
  const limitSwing = () => {
    const max = maxAngle();
    const energy = theta * theta + (omega * omega) / GRAVITY_OVER_LENGTH;
    if (energy > max * max) omega = Math.sign(omega) * Math.sqrt(Math.max(0, (max * max - theta * theta) * GRAVITY_OVER_LENGTH));
  };
  const render = () => {
    hang.style.transform = theta ? `rotate(${theta}rad)` : '';
  };

  const step = (now) => {
    const dt = Math.min((now - last) / 1000, 1 / 30);
    last = now;
    if (!drag) {
      const substeps = Math.max(1, Math.ceil(dt * 240));
      const h = dt / substeps;
      for (let i = 0; i < substeps; i++) {
        omega += (-GRAVITY_OVER_LENGTH * Math.sin(theta) - DAMPING * omega) * h;
        theta += omega * h;
      }
      if (Math.abs(theta) < 0.004 && Math.abs(omega) < 0.04) {
        theta = 0;
        omega = 0;
        render();
        frame = 0;
        return;
      }
    }
    render();
    frame = requestAnimationFrame(step);
  };

  const wake = () => {
    if (frame) return;
    last = performance.now();
    frame = requestAnimationFrame(step);
  };

  const pivotPoint = () => pivot.getBoundingClientRect();

  // Positive rotation swings the tag to the left, so the angle is measured from the pivot with x negated.
  const angleTo = (x, y) => {
    const p = pivotPoint();
    return clamp(Math.atan2(-(x - p.left), Math.max(y - p.top, 24)), maxAngle());
  };

  const release = () => {
    hang.classList.remove('is-dragging');
    drag = null;
    wake();
  };

  hang.addEventListener('pointerdown', (e) => {
    if (!live || e.button !== 0) return;
    drag = { id: e.pointerId, x: e.clientX, y: e.clientY, moved: false, t: e.timeStamp };
    omega = 0;
    hang.setPointerCapture(e.pointerId);
  });

  hang.addEventListener('pointermove', (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    if (!drag.moved && Math.hypot(e.clientX - drag.x, e.clientY - drag.y) < 6) return;
    if (!drag.moved) {
      drag.moved = true;
      hang.classList.add('is-dragging');
    }
    const next = angleTo(e.clientX, e.clientY);
    const dt = (e.timeStamp - drag.t) / 1000;
    if (dt > 0) omega = 0.6 * omega + 0.4 * clamp((next - theta) / dt, 8);
    drag.t = e.timeStamp;
    theta = next;
    render();
  });

  hang.addEventListener('pointerup', (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    if (!drag.moved) {
      // A click pushes the tag away from the side that was clicked.
      omega = e.clientX < pivotPoint().left ? -NUDGE : NUDGE;
    } else {
      omega = clamp(omega, 4);
    }
    limitSwing();
    release();
  });

  hang.addEventListener('pointercancel', () => {
    if (drag) release();
  });

  hang.addEventListener('keydown', (e) => {
    if (!live || (e.key !== 'Enter' && e.key !== ' ')) return;
    e.preventDefault();
    nudgeDirection = -nudgeDirection;
    omega = clamp(omega + nudgeDirection * NUDGE, 5);
    limitSwing();
    wake();
  });

  const apply = () => {
    live = !reduced.matches;
    hang.classList.toggle('is-live', live);
    if (live) {
      hang.setAttribute('role', 'button');
      hang.setAttribute('tabindex', '0');
      hang.setAttribute('aria-label', "Eric Ma's photo on a hanging tag. Press Enter or Space to swing it.");
    } else {
      cancelAnimationFrame(frame);
      frame = 0;
      drag = null;
      theta = 0;
      omega = 0;
      render();
      hang.classList.remove('is-dragging');
      hang.removeAttribute('role');
      hang.removeAttribute('tabindex');
      hang.removeAttribute('aria-label');
    }
  };

  reduced.addEventListener('change', apply);
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
