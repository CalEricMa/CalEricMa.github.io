// Theme: follows the system setting until the visitor picks one with the nav button; the pick is remembered.
// Loaded in <head> so the right theme is set before the page paints.
(() => {
  const root = document.documentElement;
  const system = matchMedia('(prefers-color-scheme: dark)');
  const stored = () => {
    try {
      return localStorage.getItem('theme');
    } catch (e) {
      return null;
    }
  };
  const apply = () => {
    root.dataset.theme = stored() || (system.matches ? 'dark' : 'light');
    const button = document.querySelector('.theme-toggle');
    if (button) button.setAttribute('aria-label', root.dataset.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  };
  root.classList.add('has-theme');
  apply();
  system.addEventListener('change', apply);
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    apply();
    button.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('theme', next);
      } catch (e) {
        // Private mode: the choice lasts until the page closes.
      }
      root.dataset.theme = next;
      apply();
    });
  });
})();
