/* ================================================================
   AQUAPOOL SPA — MAIN
   Inicialización, animaciones al scroll, contador, testimonials.
   ================================================================ */

/* ---------------- Reveal on scroll ---------------- */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -5% 0px' });
  els.forEach(el => io.observe(el));
  // Fallback: si por algún motivo IO no dispara (ej. screenshot tools),
  // aseguramos visibilidad después de 2s.
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => el.classList.add('visible'));
  }, 2000);
}

/* ---------------- Stats counters ---------------- */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;
  if (!('IntersectionObserver' in window)) {
    // Fallback: mostrar valores finales directamente
    counters.forEach(c => {
      const target = parseInt(c.dataset.counter, 10);
      const suffix = c.dataset.suffix || '';
      c.textContent = target.toLocaleString('es-CL') + suffix;
    });
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.counter, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1800;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * target).toLocaleString('es-CL') + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target.toLocaleString('es-CL') + suffix;
      }
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.3 });
  counters.forEach(c => io.observe(c));
}

/* ---------------- Testimonials carousel ---------------- */
function initTestimonials() {
  const track = document.getElementById('testimonialTrack');
  const dotsEl = document.getElementById('testimonialDots');
  if (!track || !dotsEl) return;

  const slides = track.children;
  const total = slides.length;
  let perPage = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  let pageCount = Math.ceil(total / perPage);
  let current = 0;
  let timer = null;

  // Generar dots
  dotsEl.innerHTML = '';
  for (let i = 0; i < pageCount; i++) {
    const dot = document.createElement('button');
    dot.className = 'testimonial-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Página ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(dot);
  }

  function goTo(idx) {
    current = (idx + pageCount) % pageCount;
    const slideWidth = 100 / perPage;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsEl.querySelectorAll('.testimonial-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(() => goTo(current + 1), 5000);
  }
  function stopAutoplay() { if (timer) clearInterval(timer); }

  startAutoplay();

  const container = track.parentElement;
  if (container) {
    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);
  }

  window.addEventListener('resize', () => {
    const newPerPage = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    if (newPerPage !== perPage) {
      perPage = newPerPage;
      pageCount = Math.ceil(total / perPage);
      current = 0;
      dotsEl.innerHTML = '';
      for (let i = 0; i < pageCount; i++) {
        const dot = document.createElement('button');
        dot.className = 'testimonial-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goTo(i));
        dotsEl.appendChild(dot);
      }
      track.style.transform = 'translateX(0)';
    }
  });
}

/* ---------------- Render projects ---------------- */
function renderProjects(containerId) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  const { PROJECTS } = window.AQUAPOOL_DATA;
  cont.innerHTML = PROJECTS.slice(0, 3).map(p => `
    <article class="card-hover bg-white rounded-2xl overflow-hidden shadow-lg reveal">
      <div class="img-zoom aspect-[4/3]">
        <img src="${p.image}" alt="${p.title}" loading="lazy" class="w-full h-full object-cover">
      </div>
      <div class="p-6">
        <h3 class="font-display text-xl font-bold text-slate-800 mb-2">${p.title}</h3>
        <p class="text-slate-600 text-sm">${p.description}</p>
      </div>
    </article>
  `).join('');
  initReveal();
}

/* ---------------- Render stats ---------------- */
function renderStats(containerId) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  const { STATS } = window.AQUAPOOL_DATA;
  cont.innerHTML = STATS.map(s => `
    <div class="stat-card text-center text-white">
      <div class="text-4xl md:text-5xl font-display font-bold mb-1" data-counter="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
      <div class="text-sm uppercase tracking-wider text-cyan-100">${s.label}</div>
    </div>
  `).join('');
  initCounters();
}

/* ---------------- Render servicios destacados ---------------- */
function renderFeaturedServices(containerId) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  const { SERVICES } = window.AQUAPOOL_DATA;
  const COMPONENTS = window.AQUAPOOL_COMPONENTS;
  const featured = SERVICES.slice(0, 4);
  cont.innerHTML = featured.map((s, i) => `
    <article class="card-hover bg-white rounded-2xl overflow-hidden shadow-lg reveal reveal-delay-${i + 1}">
      <div class="img-zoom h-48">
        <img src="${s.image}" alt="${s.title}" loading="lazy" class="w-full h-full object-cover">
      </div>
      <div class="p-6">
        <div class="service-icon mb-4">${COMPONENTS.icon(s.icon, 'w-7 h-7')}</div>
        <h3 class="font-display text-xl font-bold text-slate-800 mb-2">${s.title}</h3>
        <p class="text-slate-600 text-sm leading-relaxed">${s.description}</p>
      </div>
    </article>
  `).join('');
  initReveal();
}

/* ---------------- Render servicios (grid completo) ---------------- */
function renderServicesGrid(containerId) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  const { SERVICES } = window.AQUAPOOL_DATA;
  const COMPONENTS = window.AQUAPOOL_COMPONENTS;
  cont.innerHTML = SERVICES.map((s, i) => `
    <article class="card-hover bg-white p-6 rounded-2xl border border-slate-100 reveal reveal-delay-${(i % 4) + 1}">
      <div class="service-icon mb-4">${COMPONENTS.icon(s.icon, 'w-7 h-7')}</div>
      <h3 class="font-display text-lg font-bold text-slate-800 mb-2">${s.title}</h3>
      <p class="text-slate-600 text-sm leading-relaxed">${s.description}</p>
    </article>
  `).join('');
  initReveal();
}

/* ---------------- Render valores / why-us ---------------- */
function renderWhyUs(containerId) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  const items = [
    { icon: 'award', title: 'Calidad certificada', desc: 'Materiales premium y mano de obra especializada.' },
    { icon: 'clock', title: 'Cumplimiento de plazos', desc: 'Cronograma detallado y entrega a tiempo.' },
    { icon: 'shield', title: 'Garantía real', desc: '5 años en estructura, 2 años en equipos.' },
    { icon: 'zap', title: 'Tecnología de punta', desc: 'Sistemas modernos y eficientes.' },
    { icon: 'heart', title: 'Servicio personalizado', desc: 'Acompañamos cada etapa del proyecto.' },
    { icon: 'star', title: '15+ años de experiencia', desc: 'Más de 480 piscinas construidas.' }
  ];
  cont.innerHTML = items.map((it, i) => `
    <div class="text-center reveal reveal-delay-${(i % 3) + 1}">
      <div class="service-icon mx-auto">${window.AQUAPOOL_COMPONENTS.icon(it.icon, 'w-7 h-7')}</div>
      <h4 class="font-display font-bold text-slate-800 mt-4 mb-2">${it.title}</h4>
      <p class="text-slate-600 text-sm">${it.desc}</p>
    </div>
  `).join('');
  initReveal();
}

/* ---------------- Render testimonials ---------------- */
function renderTestimonials(containerId) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  const { TESTIMONIALS } = window.AQUAPOOL_DATA;
  const COMPONENTS = window.AQUAPOOL_COMPONENTS;
  cont.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-slide">
      <div class="bg-white rounded-2xl p-8 shadow-lg h-full mx-2 flex flex-col">
        <div class="text-cyan-500 mb-4">${COMPONENTS.icon('quote', 'w-10 h-10')}</div>
        <p class="text-slate-700 leading-relaxed flex-1 mb-6">"${t.text}"</p>
        <div class="flex items-center gap-4">
          <img src="${t.avatar}" alt="${t.name}" class="w-12 h-12 rounded-full object-cover">
          <div>
            <div class="font-bold text-slate-800">${t.name}</div>
            <div class="text-sm text-slate-500">${t.role}</div>
          </div>
          <div class="ml-auto text-yellow-400">${'★'.repeat(t.rating)}</div>
        </div>
      </div>
    </div>
  `).join('');
  initTestimonials();
}

/* ---------------- Render team ---------------- */
function renderTeam(containerId) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  const { TEAM } = window.AQUAPOOL_DATA;
  cont.innerHTML = TEAM.map((m, i) => `
    <article class="card-hover bg-white rounded-2xl overflow-hidden shadow-lg reveal reveal-delay-${(i % 4) + 1}">
      <div class="img-zoom aspect-square">
        <img src="${m.image}" alt="${m.name}" loading="lazy" class="w-full h-full object-cover">
      </div>
      <div class="p-5 text-center">
        <h3 class="font-display font-bold text-slate-800">${m.name}</h3>
        <p class="text-cyan-600 text-sm font-semibold">${m.role}</p>
        <p class="text-slate-500 text-sm mt-2">${m.bio}</p>
      </div>
    </article>
  `).join('');
  initReveal();
}

/* ---------------- Render values ---------------- */
function renderValues(containerId) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  const { VALUES } = window.AQUAPOOL_DATA;
  const COMPONENTS = window.AQUAPOOL_COMPONENTS;
  cont.innerHTML = VALUES.map((v, i) => `
    <article class="card-hover bg-white p-6 rounded-2xl shadow-md reveal reveal-delay-${i + 1}">
      <div class="service-icon mb-4">${COMPONENTS.icon(v.icon, 'w-7 h-7')}</div>
      <h3 class="font-display text-xl font-bold text-slate-800 mb-2">${v.title}</h3>
      <p class="text-slate-600 text-sm leading-relaxed">${v.description}</p>
    </article>
  `).join('');
  initReveal();
}

/* ---------------- Render certifications ---------------- */
function renderCertifications(containerId) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  const { CERTIFICATIONS } = window.AQUAPOOL_DATA;
  cont.innerHTML = CERTIFICATIONS.map((c, i) => `
    <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl py-6 px-4 text-center text-white font-semibold text-sm tracking-wider reveal reveal-delay-${(i % 5) + 1}">
      ${c}
    </div>
  `).join('');
  initReveal();
}

/* ---------------- Render process steps ---------------- */
function renderProcess(containerId) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  const { PROCESS_STEPS } = window.AQUAPOOL_DATA;
  cont.innerHTML = PROCESS_STEPS.map((s, i) => `
    <div class="relative reveal reveal-delay-${i + 1}">
      <div class="bg-white rounded-2xl p-6 shadow-lg h-full">
        <div class="text-5xl font-display font-bold bg-gradient-to-br from-cyan-500 to-cyan-700 bg-clip-text text-transparent mb-3">${s.num}</div>
        <h4 class="font-display font-bold text-lg text-slate-800 mb-2">${s.title}</h4>
        <p class="text-slate-600 text-sm">${s.desc}</p>
      </div>
      ${i < PROCESS_STEPS.length - 1 ? `
        <div class="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-cyan-400 text-3xl z-10">→</div>
      ` : ''}
    </div>
  `).join('');
  initReveal();
}

/* ---------------- Render classes types ---------------- */
function renderClassTypes(containerId) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  const { CLASS_TYPES } = window.AQUAPOOL_DATA;
  const COMPONENTS = window.AQUAPOOL_COMPONENTS;
  const palette = {
    cyan: 'from-cyan-500 to-cyan-600',
    sky: 'from-sky-500 to-sky-600',
    teal: 'from-teal-500 to-teal-600',
    blue: 'from-blue-500 to-blue-600',
    indigo: 'from-indigo-500 to-indigo-600'
  };
  cont.innerHTML = CLASS_TYPES.map((c, i) => `
    <article class="card-hover bg-white rounded-2xl p-6 shadow-md reveal reveal-delay-${(i % 4) + 1}">
      <div class="w-14 h-14 rounded-xl bg-gradient-to-br ${palette[c.color] || palette.cyan} flex items-center justify-center text-white mb-4">
        ${COMPONENTS.icon('play', 'w-6 h-6')}
      </div>
      <h3 class="font-display text-xl font-bold text-slate-800 mb-2">${c.name}</h3>
      <p class="text-slate-600 text-sm leading-relaxed">${c.description}</p>
    </article>
  `).join('');
  initReveal();
}

/* ---------------- Render instructors ---------------- */
function renderInstructors(containerId) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  const { INSTRUCTORS } = window.AQUAPOOL_DATA;
  cont.innerHTML = INSTRUCTORS.map((p, i) => `
    <div class="text-center reveal reveal-delay-${i + 1}">
      <div class="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-cyan-100 mb-4 img-zoom">
        <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover">
      </div>
      <h4 class="font-display font-bold text-slate-800">${p.name}</h4>
      <p class="text-cyan-600 text-sm">${p.specialty}</p>
    </div>
  `).join('');
  initReveal();
}

/* ---------------- Init principal ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  window.AQUAPOOL_COMPONENTS.mountComponents();
  window.AQUAPOOL_COMPONENTS.mountLoader();
  initReveal();

  // Render según contenedores presentes (con try-catch por si uno falla)
  const renders = [
    ['featuredServices', renderFeaturedServices],
    ['servicesGrid', renderServicesGrid],
    ['statsContainer', renderStats],
    ['projectsGrid', renderProjects],
    ['whyUsContainer', renderWhyUs],
    ['testimonialTrack', renderTestimonials],
    ['teamContainer', renderTeam],
    ['valuesContainer', renderValues],
    ['certificationsContainer', renderCertifications],
    ['processContainer', renderProcess],
    ['classTypesContainer', renderClassTypes],
    ['instructorsContainer', renderInstructors]
  ];
  renders.forEach(([id, fn]) => {
    if (document.getElementById(id)) {
      try { fn(id); } catch (e) { console.error('Render falló:', id, e); }
    }
  });
});