// ===== ZOMBIE_NEWS :: COMPONENTES COMPARTIDOS =====
// Inyecta el chrome (HUD, ticker, footer, menu movil) en todas las paginas.
// La pagina activa se marca leyendo data-page del <body>.

(function () {
  var PAGE = document.body.getAttribute('data-page') || 'inicio';

  var NAV = [
    { id: 'inicio',      label: 'INICIO',      href: 'index.html' },
    { id: 'noticias',    label: 'NOTICIAS',    href: 'noticias.html' },
    { id: 'resenas',     label: 'RESENAS',     href: 'resenas.html' },
    { id: 'fanart',      label: 'FANART',      href: 'fanart.html' },
    { id: 'comentarios', label: 'COMENTARIOS', href: 'comentarios.html' }
  ];

  function navLinks(mobile) {
    return NAV.map(function (l) {
      var num = ['01', '02', '03', '04', '05'][NAV.indexOf(l)] || '00';
      var cls = l.id === PAGE ? ' class="active"' : '';
      var label = mobile ? '[' + num + '] ' + l.label : l.label;
      return '<a href="' + l.href + '"' + cls + '>' + label + '</a>';
    }).join('');
  }

  var chrome = '' +
    '<div id="crt-overlay"></div>' +
    '<div id="scanlines"></div>' +
    '<header id="hud">' +
      '<div class="hud-left">' +
        '<a class="hud-logo" href="index.html">[ZN]</a>' +
        '<img class="hud-logo-img" src="logo.png" alt="ZOMBIE_NEWS logo">' +
        '<span class="hud-title">ZOMBIE_NEWS v3.7.1</span>' +
      '</div>' +
      '<nav class="hud-center">' + navLinks(false) + '</nav>' +
      '<div class="hud-right">' +
        '<span id="hud-clock"></span>' +
        '<span class="hud-status">SYS:ONLINE</span>' +
        '<button id="hud-toggle" aria-label="ABRIR_MENU" aria-expanded="false">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
      '</div>' +
    '</header>' +
    '<nav id="mobile-nav" aria-hidden="true">' + navLinks(true) + '</nav>' +
    '<div id="ticker-bar">' +
      '<div id="ticker-label">&gt; URGENTE_</div>' +
      '<div id="ticker-track"><div id="ticker-content"></div></div>' +
    '</div>';

  var footer =
    '<footer>' +
      '<div class="footer-line"></div>' +
      '<div class="footer-content">' +
        '<span>&copy; 2026 ZOMBIE_NEWS — PROYECTO DEMO</span>' +
        '<span>USO EXCLUSIVO CON FINES ACADEMICOS / PORTAFOLIO</span>' +
        '<span>NO SOMOS UN MEDIO DE NOTICIAS REAL</span>' +
      '</div>' +
      '<div class="footer-ascii"><pre>://FINALIZAND_SISTEMA... [/] DESconectado.</pre></div>' +
    '</footer>';

  // Montar chrome
  document.body.insertAdjacentHTML('afterbegin', chrome);
  document.body.insertAdjacentHTML('beforeend', footer);

  // ===== RELOJ =====
  function updateClock() {
    var now = new Date();
    var h = ('0' + now.getHours()).slice(-2);
    var m = ('0' + now.getMinutes()).slice(-2);
    var s = ('0' + now.getSeconds()).slice(-2);
    var el = document.getElementById('hud-clock');
    if (el) el.textContent = h + ':' + m + ':' + s;
  }
  setInterval(updateClock, 1000);
  updateClock();

  // ===== TICKER =====
  var headlines = [
    'BREAKING: CARRION PROTOCOL supera las 2M de descargas en su primera semana',
    'ALERTA: DEAD MERIDIAN recibe parche de balance para su modo Ranked',
    'EXCLUSIVA: Monolith Games trabaja en un nuevo titulo del universo SPEC OPS',
    'REVIEW: PHANTOM DECAY obtiene calificacion perfecta en portales especializados',
    'DATOS: El genero survival horror crece un 340% en el mercado indie durante 2026',
    'EVENTO: ZOMBICON 2026 anunciada para noviembre — 50 estudios confirmados',
    'TRAILER: HOLLOW CONTAINMENT muestra 20 minutos de gameplay sin cortes',
    'PATCH: CARRION PROTOCOL v1.2 corrige bugs de progresion en Ciclo 8+'
  ];

  var tickerEl = document.getElementById('ticker-content');
  if (tickerEl) {
    tickerEl.textContent = headlines.map(function (h) {
      return '//  ' + h + '  ';
    }).join('');
  }

  // ===== MENU MOVIL =====
  var toggle = document.getElementById('hud-toggle');
  var mobileNav = document.getElementById('mobile-nav');

  function setMenu(open) {
    if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (mobileNav) mobileNav.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (mobileNav) mobileNav.classList.toggle('open', open);
  }

  if (toggle) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = toggle.getAttribute('aria-expanded') !== 'true';
      setMenu(open);
    });
  }

  if (mobileNav) {
    mobileNav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setMenu(false);
    });
  }

  document.addEventListener('click', function () {
    if (toggle && toggle.getAttribute('aria-expanded') === 'true') setMenu(false);
  });
})();