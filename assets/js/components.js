/* ================================================================
   AQUAPOOL SPA — COMPONENTES
   Inyecta navbar, footer y burbujas del hero.
   ================================================================ */

const ICONS = {
  hammer:   '<path d="M14 6l4-4 4 4-4 4-4-4zM2 22l8-8m-3 1l4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  tools:    '<path d="M14 7l3 3-7 7-3-3 7-7zM2 22l6-6m4-9l5-5m0 0l3 3-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>',
  sparkles: '<path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5zM19 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2zM5 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  wrench:   '<path d="M21 7a4 4 0 01-5.5 5.5L4 21l-1-1L14.5 8.5A4 4 0 0119 3a4 4 0 012 4z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  thermometer:'<path d="M14 14V5a2 2 0 10-4 0v9a4 4 0 104 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  palette:  '<path d="M12 2a10 10 0 100 20c1 0 2-1 2-2v-1c0-.5.5-1 1-1h2a3 3 0 003-3 9 9 0 00-8-13zM7 8a1 1 0 110-2 1 1 0 010 2zm4-2a1 1 0 110-2 1 1 0 010 2zm4 2a1 1 0 110-2 1 1 0 010 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  bulb:     '<path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.7.6 1 1.4 1 2.3v1h6v-1c0-.9.3-1.7 1-2.3A7 7 0 0012 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  cog:      '<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.01a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.01a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  chat:     '<path d="M21 11.5a8.38 8.38 0 01-9 8.5 8.5 8.5 0 01-3.5-.7L3 21l1.7-5.5A8.38 8.38 0 0121 11.5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  shield:   '<path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  star:     '<path d="M12 2l3 7 7 .5-5.5 4.5 1.5 7.5L12 17l-6 4.5 1.5-7.5L2 9.5 9 9z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  heart:    '<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  phone:    '<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.73 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  mail:     '<path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zM22 6l-10 7L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  pin:      '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2" fill="none"/>',
  clock:    '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  check:    '<path d="M5 12l5 5L20 7" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  x:        '<path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>',
  arrow:    '<path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  chevron:  '<path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  instagram:'<rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>',
  facebook: '<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  youtube:  '<path d="M22 7s-.2-1.6-.9-2.3c-.8-.9-1.7-.9-2.1-1C16 3.5 12 3.5 12 3.5s-4 0-7 .2c-.4.1-1.3.1-2.1 1C2.2 5.4 2 7 2 7S1.7 8.8 1.7 10.6v1.8c0 1.8.3 3.6.3 3.6s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1 1.7.2 7 .2 7 .2s4 0 7-.2c.4-.1 1.3-.1 2.1-1 .7-.7.9-2.3.9-2.3s.3-1.8.3-3.6v-1.8c0-1.8-.3-3.6-.3-3.6zM10 14V8l5 3-5 3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  linkedin: '<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  whatsapp: '<path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.2-.2.2-.3.3-.5.1-.2 0-.4-.1-.5l-.7-1.7c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.5-.3zM12 2a10 10 0 00-8.6 15.1L2 22l5.1-1.3A10 10 0 1012 2z" fill="currentColor"/>',
  menu:     '<path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>',
  quote:    '<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 .5 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c.25 0 .25.25 .25.5v1.5c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor"/>',
  play:     '<path d="M5 3l14 9-14 9V3z" fill="currentColor"/>',
  close:    '<path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>',
  zap:      '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  award:    '<circle cx="12" cy="8" r="6" stroke="currentColor" stroke-width="2" fill="none"/><path d="M15.5 13L18 16M9 13L6 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>'
};

function icon(name, classes = 'w-6 h-6') {
  return `<svg class="${classes}" viewBox="0 0 24 24" fill="none">${ICONS[name] || ''}</svg>`;
}

/* ================================================================
   NAVBAR
   ================================================================ */
function renderNavbar() {
  const { NAV_LINKS, COMPANY_INFO } = window.AQUAPOOL_DATA;
  const currentPage = document.body.dataset.page || 'home';

  const links = NAV_LINKS.map(l => `
    <a href="${l.href}" data-page="${l.page}"
       class="nav-link text-slate-700 hover:text-cyan-600 font-medium text-sm uppercase tracking-wide ${l.page === currentPage ? 'active' : ''}">
      ${l.label}
    </a>
  `).join('');

  return `
    <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <a href="index.html" class="flex items-center gap-3">
            <img src="assets/img/logo.svg" alt="${COMPANY_INFO.name}" class="h-12">
          </a>
          <div class="hidden lg:flex items-center gap-8">
            ${links}
          </div>
          <div class="hidden lg:flex items-center gap-4">
            <a href="${COMPANY_INFO.whatsappLink}" target="_blank" class="text-cyan-600 hover:text-cyan-700 flex items-center gap-2">
              ${icon('phone', 'w-4 h-4')}
              <span class="font-semibold text-sm">${COMPANY_INFO.phone}</span>
            </a>
            <a href="contacto.html" class="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
              Cotiza ahora
            </a>
          </div>
          <button id="menuBtn" class="lg:hidden p-2 text-slate-700" aria-label="Menú">
            ${icon('menu', 'w-7 h-7')}
          </button>
        </div>
      </div>
    </nav>

    <div id="mobileOverlay" class="mobile-overlay"></div>
    <aside id="mobileMenu" class="mobile-menu">
      <button id="menuClose" class="absolute top-6 right-6 p-2" aria-label="Cerrar">${icon('x', 'w-6 h-6')}</button>
      <div class="flex flex-col gap-4">
        <a href="index.html" class="flex items-center gap-3 mb-4">
          <img src="assets/img/logo.svg" alt="Logo" class="h-10">
        </a>
        ${NAV_LINKS.map(l => `
          <a href="${l.href}" data-page="${l.page}"
             class="block py-2 px-3 rounded-lg font-medium ${l.page === currentPage ? 'bg-cyan-50 text-cyan-700' : 'text-slate-700 hover:bg-slate-50'}">
            ${l.label}
          </a>
        `).join('')}
        <a href="contacto.html" class="mt-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-center py-3 rounded-lg font-semibold">
          Cotiza ahora
        </a>
        <a href="${COMPANY_INFO.whatsappLink}" target="_blank" class="flex items-center justify-center gap-2 text-green-600 font-semibold py-2">
          ${icon('whatsapp', 'w-5 h-5')}
          WhatsApp
        </a>
      </div>
    </aside>
  `;
}

/* ================================================================
   FOOTER
   ================================================================ */
function renderFooter() {
  const { COMPANY_INFO, FOOTER_LINKS } = window.AQUAPOOL_DATA;
  const year = new Date().getFullYear();
  return `
    <footer class="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <img src="assets/img/logo.svg" alt="${COMPANY_INFO.name}" class="h-12 brightness-0 invert opacity-90 mb-4">
            <p class="text-sm text-slate-400 leading-relaxed mb-6">${COMPANY_INFO.description}</p>
            <div class="flex gap-3">
              <a href="${COMPANY_INFO.social.instagram}" class="w-10 h-10 rounded-full bg-slate-800 hover:bg-cyan-600 flex items-center justify-center transition-colors" aria-label="Instagram">${icon('instagram', 'w-5 h-5')}</a>
              <a href="${COMPANY_INFO.social.facebook}" class="w-10 h-10 rounded-full bg-slate-800 hover:bg-cyan-600 flex items-center justify-center transition-colors" aria-label="Facebook">${icon('facebook', 'w-5 h-5')}</a>
              <a href="${COMPANY_INFO.social.youtube}" class="w-10 h-10 rounded-full bg-slate-800 hover:bg-cyan-600 flex items-center justify-center transition-colors" aria-label="YouTube">${icon('youtube', 'w-5 h-5')}</a>
              <a href="${COMPANY_INFO.social.linkedin}" class="w-10 h-10 rounded-full bg-slate-800 hover:bg-cyan-600 flex items-center justify-center transition-colors" aria-label="LinkedIn">${icon('linkedin', 'w-5 h-5')}</a>
            </div>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Servicios</h4>
            <ul class="space-y-2 text-sm">
              ${FOOTER_LINKS.services.map(l => `<li><a href="${l.href}" class="hover:text-cyan-400 transition-colors">${l.label}</a></li>`).join('')}
            </ul>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Empresa</h4>
            <ul class="space-y-2 text-sm">
              ${FOOTER_LINKS.company.map(l => `<li><a href="${l.href}" class="hover:text-cyan-400 transition-colors">${l.label}</a></li>`).join('')}
            </ul>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Contacto</h4>
            <ul class="space-y-3 text-sm">
              <li class="flex gap-2 items-start">${icon('pin', 'w-4 h-4 mt-0.5 text-cyan-400')}<span>${COMPANY_INFO.address}<br>${COMPANY_INFO.city}</span></li>
              <li class="flex gap-2 items-center">${icon('phone', 'w-4 h-4 text-cyan-400')}<a href="tel:${COMPANY_INFO.phone}" class="hover:text-cyan-400">${COMPANY_INFO.phone}</a></li>
              <li class="flex gap-2 items-center">${icon('mail', 'w-4 h-4 text-cyan-400')}<a href="mailto:${COMPANY_INFO.email}" class="hover:text-cyan-400">${COMPANY_INFO.email}</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© ${year} ${COMPANY_INFO.name}. Todos los derechos reservados.</p>
          <div class="flex gap-6">
            ${FOOTER_LINKS.legal.map(l => `<a href="${l.href}" class="hover:text-cyan-400">${l.label}</a>`).join('')}
          </div>
        </div>
      </div>
    </footer>

    <a href="${COMPANY_INFO.whatsappLink}" target="_blank" class="wa-float" aria-label="WhatsApp">
      ${icon('whatsapp', 'w-7 h-7 text-white')}
    </a>
  `;
}

/* ================================================================
   HERO BUBBLES
   ================================================================ */
function renderBubbles(count = 18) {
  let html = '';
  for (let i = 0; i < count; i++) {
    const size = 8 + Math.random() * 50;
    const left = Math.random() * 100;
    const duration = 8 + Math.random() * 8;
    const delay = Math.random() * 8;
    html += `<div class="bubble" style="width:${size}px;height:${size}px;left:${left}%;bottom:-100px;animation-duration:${duration}s;animation-delay:${delay}s;"></div>`;
  }
  return html;
}

/* ================================================================
   WAVE DIVIDER
   ================================================================ */
function waveDivider(color = '#ffffff', top = false) {
  return `
    <div class="wave-divider ${top ? 'wave-divider-top' : ''}" style="background:${top ? 'transparent' : color}">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,40 1440,30 L1440,60 L0,60 Z" fill="${color}"/>
      </svg>
    </div>
  `;
}

/* ================================================================
   MOUNT
   ================================================================ */
function mountComponents() {
  const navMount = document.getElementById('navbarMount');
  const footMount = document.getElementById('footerMount');
  if (navMount) navMount.innerHTML = renderNavbar();
  if (footMount) footMount.innerHTML = renderFooter();
  if (navMount) {
    setupMobileMenu();
    setupNavbarScroll();
  }
}

function setupMobileMenu() {
  const btn = document.getElementById('menuBtn');
  const close = document.getElementById('menuClose');
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileOverlay');

  function open() { menu.classList.add('open'); overlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function closeFn() { menu.classList.remove('open'); overlay.classList.remove('open'); document.body.style.overflow = ''; }

  if (btn) btn.addEventListener('click', open);
  if (close) close.addEventListener('click', closeFn);
  if (overlay) overlay.addEventListener('click', closeFn);
  document.querySelectorAll('#mobileMenu a').forEach(a => a.addEventListener('click', closeFn));
}

function setupNavbarScroll() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const update = () => {
    if (window.scrollY > 30) {
      nav.classList.add('shadow-md');
    } else {
      nav.classList.remove('shadow-md');
    }
  };
  window.addEventListener('scroll', update);
  update();
}

/* Loader inicial */
function mountLoader() {
  const loader = document.createElement('div');
  loader.className = 'app-loader';
  loader.innerHTML = `<div class="flex"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>`;
  document.body.prepend(loader);
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('fade-out'), 300);
    setTimeout(() => loader.remove(), 800);
  });
}

window.AQUAPOOL_COMPONENTS = {
  renderNavbar,
  renderFooter,
  renderBubbles,
  waveDivider,
  icon,
  mountComponents,
  mountLoader
};