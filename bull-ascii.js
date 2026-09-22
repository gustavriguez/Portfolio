(() => {
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-bull-ascii]').forEach((bull) => {
    const source = bull.querySelector('.bull-ascii-source');
    if (!source) return;

    // One source of truth for the ASCII. The 3D extrusion layers are cloned automatically.
    ['depth','gold'].forEach((kind) => {
      const layer = document.createElement('pre');
      layer.className = `bull-ascii-layer ${kind}`;
      layer.setAttribute('aria-hidden','true');
      layer.textContent = source.textContent;
      bull.insertBefore(layer, source);
    });

    if (!reduced) {
      bull.addEventListener('pointermove', (e) => {
        const r = bull.getBoundingClientRect();
        const nx = ((e.clientX - r.left) / r.width) - 0.5;
        const ny = ((e.clientY - r.top) / r.height) - 0.5;
        bull.style.setProperty('--ry', `${(nx * 8).toFixed(2)}deg`);
        bull.style.setProperty('--rx', `${(-ny * 6).toFixed(2)}deg`);
      });
      bull.addEventListener('pointerleave', () => {
        bull.style.setProperty('--ry','0deg');
        bull.style.setProperty('--rx','0deg');
      });
    }

    const charge = () => {
      bull.classList.remove('charging');
      void bull.offsetWidth;
      bull.classList.add('charging');
      window.setTimeout(() => bull.classList.remove('charging'), 560);
    };
    bull.addEventListener('click', charge);
    bull.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        charge();
      }
    });
  });
})();
