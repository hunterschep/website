(() => {
  const canvas = document.querySelector('.flow-field');
  const context = canvas?.getContext('2d');
  if (!context) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const printMedia = window.matchMedia('print');
  const connection = navigator.connection;
  const particles = [];
  const pointer = { x: 0, y: 0, targetX: 0, targetY: 0, active: false, strength: 0 };
  let width = 0;
  let height = 0;
  let phase = 0;
  let frame = 0;
  let resizeFrame = 0;
  let lastDraw = 0;
  let suspended = false;

  function resize() {
    const previousWidth = width;
    const previousHeight = height;
    width = window.innerWidth;
    height = window.innerHeight;
    if (!width || !height) return;

    // Limit the drawing buffer to two million pixels, including on large displays.
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5, Math.sqrt(2000000 / (width * height)));
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--link').trim();
    context.lineWidth = 1;
    context.lineCap = 'round';

    if (previousWidth && previousHeight) {
      for (const particle of particles) {
        particle.x *= width / previousWidth;
        particle.y *= height / previousHeight;
      }
    }
    const count = Math.min(400, Math.ceil(width * height / 5000));
    particles.length = Math.min(particles.length, count);
    while (particles.length < count) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0,
        vy: 0,
        speed: 6 + Math.random() * 4,
        length: 12 + Math.random() * 10,
      });
    }
    pointer.active = false;
  }

  function draw(now) {
    frame = requestAnimationFrame(draw);
    const elapsed = now - lastDraw;
    // Paint at 30 fps; elapsed time keeps motion consistent across refresh rates.
    if (elapsed < 1000 / 30 - 1) return;
    const delta = Math.min(elapsed / 1000, 0.05);
    lastDraw = now;
    phase += delta * 0.12;

    const ease = 1 - Math.exp(-delta * 10);
    pointer.x += (pointer.targetX - pointer.x) * ease;
    pointer.y += (pointer.targetY - pointer.y) * ease;
    pointer.strength += ((pointer.active ? 1 : 0) - pointer.strength) * ease;
    const velocityEase = 1 - Math.exp(-delta * 6);

    context.clearRect(0, 0, width, height);
    context.beginPath();
    for (const particle of particles) {
      const angle = Math.sin(particle.x * 0.004 + phase) * 1.2
        + Math.cos(particle.y * 0.003 - phase * 0.7) * 1.1;
      let vx = Math.cos(angle);
      let vy = Math.sin(angle);
      const dx = particle.x - pointer.x;
      const dy = particle.y - pointer.y;
      const distance = Math.hypot(dx, dy);
      let influence = 0;
      if (distance > 1 && distance < 180) {
        influence = (1 - distance / 180) ** 2 * pointer.strength;
        vx -= dy / distance * influence * 1.8;
        vy += dx / distance * influence * 1.8;
      }
      particle.vx += (vx - particle.vx) * velocityEase;
      particle.vy += (vy - particle.vy) * velocityEase;
      particle.x += particle.vx * particle.speed * delta;
      particle.y += particle.vy * particle.speed * delta;
      if (particle.x < -24) particle.x = width + 24;
      if (particle.x > width + 24) particle.x = -24;
      if (particle.y < -24) particle.y = height + 24;
      if (particle.y > height + 24) particle.y = -24;

      const magnitude = Math.hypot(particle.vx, particle.vy) || 1;
      const nx = particle.vx / magnitude;
      const ny = particle.vy / magnitude;
      const bend = Math.sin(phase + particle.y * 0.004) * 1.5 + influence * 3;
      context.moveTo(particle.x - nx * particle.length, particle.y - ny * particle.length);
      context.quadraticCurveTo(
        particle.x - nx * particle.length / 2 - ny * bend,
        particle.y - ny * particle.length / 2 + nx * bend,
        particle.x, particle.y,
      );
    }
    context.stroke();
  }

  function syncMotion() {
    if (reducedMotion.matches || printMedia.matches || connection?.saveData || document.hidden || suspended) {
      cancelAnimationFrame(frame);
      frame = 0;
      pointer.active = false;
      pointer.strength = 0;
      context.clearRect(0, 0, width, height);
    } else if (!frame && width && height) {
      lastDraw = performance.now();
      frame = requestAnimationFrame(draw);
    }
  }

  window.addEventListener('resize', () => {
    if (resizeFrame) return;
    resizeFrame = requestAnimationFrame(() => {
      resizeFrame = 0;
      resize();
      syncMotion();
    });
  });
  document.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') {
      pointer.active = false;
      return;
    }
    if (!pointer.active) {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    }
    pointer.active = true;
    pointer.targetX = event.clientX;
    pointer.targetY = event.clientY;
  }, { passive: true });
  document.addEventListener('pointerleave', () => { pointer.active = false; });
  window.addEventListener('blur', () => { pointer.active = false; });
  document.addEventListener('visibilitychange', syncMotion);
  reducedMotion.addEventListener('change', syncMotion);
  printMedia.addEventListener('change', syncMotion);
  connection?.addEventListener('change', syncMotion);
  window.addEventListener('pagehide', () => { suspended = true; syncMotion(); });
  window.addEventListener('pageshow', () => { suspended = false; syncMotion(); });

  resize();
  syncMotion();
})();
