// ===== CLOCK =====
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  const el = document.getElementById('hud-clock');
  if (el) el.textContent = h + ':' + m + ':' + s;
}
setInterval(updateClock, 1000);
updateClock();

// ===== TICKER =====
const headlines = [
  'BREAKING: CARRION PROTOCOL supera las 2M de descargas en su primera semana',
  'ALERTA: DEAD MERIDIAN recibe parche de平衡amiento para modo Ranked',
  'EXCLUSIVA: Monolith Games trabaja en un nuevo titulo de universo SPEC OPS',
  'REVIEW: PHANTOM DECAY obtiene calificacion perfecta en portales especializados',
  'DATOS: El genero survival horror crece un 340% en elmercado indie durante 2026',
  'EVENTO: ZOMBICON 2026 anunciada para noviembre — 50 estudios confirmados',
  'TRAILER: HOLLOW CONTAINMENT muestra 20 minutos de gameplay sin cortes',
  'PATCH: CARRION PROTOCOL v1.2 corrige bugs de progresion en Ciclo 8+',
];

function buildTicker() {
  const el = document.getElementById('ticker-content');
  if (!el) return;
  const text = headlines.map(function (h) {
    return '//  ' + h + '  ';
  }).join('');
  el.textContent = text;
}
buildTicker();

// ===== ARTICLE COUNTER =====
function animateCount(target, duration) {
  const el = document.getElementById('article-count');
  if (!el) return;
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      if (entry.target.id === 'about') {
        animateCount(247, 1500);
        observer.unobserve(entry.target);
      }
    }
  });
}, { threshold: 0.3 });

const aboutSection = document.getElementById('about');
if (aboutSection) observer.observe(aboutSection);

// ===== RANDOM GLITCH TEXT EFFECT =====
function randomGlitch() {
  const title = document.getElementById('hero-title');
  if (!title) return;
  const original = 'CARRION PROTOCOL';
  const chars = '!@#$%^&*_-+=[]{}|;:<>?/~`';
  let iterations = 0;
  const maxIterations = 6;

  const interval = setInterval(function () {
    title.textContent = original
      .split('')
      .map(function (char, i) {
        if (i < iterations) return original[i];
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');
    iterations += 1 / 2;
    if (iterations > maxIterations) {
      title.textContent = original;
      clearInterval(interval);
    }
  }, 50);
}

// Trigger glitch every 8-15 seconds
function scheduleGlitch() {
  const delay = 8000 + Math.random() * 7000;
  setTimeout(function () {
    randomGlitch();
    scheduleGlitch();
  }, delay);
}
scheduleGlitch();

// ===== CONSOLE EASTER EGG =====
console.log(
  '%c ZOMBIE_NEWS v3.7.1 ',
  'background: #39ff14; color: #000; font-size: 16px; font-weight: bold; padding: 4px 8px;'
);
console.log('%c // PROYECTO DEMO — NO SOMOS UN MEDIO REAL', 'color: #1a7a0a;');
