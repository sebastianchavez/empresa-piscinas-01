/* ================================================================
   AQUAPOOL SPA — PRICING
   Toggle mensual/anual + FAQ accordion + tabla comparativa.
   ================================================================ */

function formatCLP(n) {
  return '$' + n.toLocaleString('es-CL');
}

function initPricing() {
  const plansEl = document.getElementById('pricingPlans');
  const toggleBtns = document.querySelectorAll('#pricingToggle button');
  const extrasEl = document.getElementById('pricingExtras');
  const faqEl = document.getElementById('faqContainer');

  if (plansEl) renderPlans('monthly');
  if (extrasEl) renderExtras();
  if (faqEl) renderFAQ();

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const period = btn.dataset.period;
      renderPlans(period);
      moveIndicator(period);
    });
  });

  function moveIndicator(period) {
    const indicator = document.querySelector('#pricingToggle .indicator');
    if (!indicator) return;
    indicator.style.left = period === 'annual' ? '50%' : '4px';
    indicator.style.right = period === 'annual' ? '4px' : '50%';
  }
  // Init indicator
  setTimeout(() => moveIndicator('monthly'), 50);

  function renderPlans(period) {
    if (!plansEl) return;
    const { PRICING_PLANS } = window.AQUAPOOL_DATA;
    plansEl.innerHTML = PRICING_PLANS.map(plan => `
      <article class="plan-card bg-white p-8 shadow-lg ${plan.popular ? 'popular' : ''}">
        ${plan.popular ? '<div class="plan-badge">MÁS POPULAR</div>' : ''}
        <div class="text-center mb-6">
          <h3 class="font-display text-2xl font-bold text-slate-800 mb-1">${plan.name}</h3>
          <p class="text-slate-500 text-sm">${plan.description}</p>
        </div>
        <div class="text-center mb-6">
          <div class="text-4xl font-display font-bold text-cyan-600 price-value" data-monthly="${plan.monthly}" data-annual="${plan.annual}">
            ${formatCLP(period === 'annual' ? plan.annual : plan.monthly)}
          </div>
          <div class="text-sm text-slate-500 mt-1">${period === 'annual' ? 'por año' : 'por mes'}</div>
        </div>
        <ul class="space-y-3 mb-8">
          ${plan.features.map(f => `
            <li class="flex items-start gap-2 text-sm">
              ${f.included
                ? `<span class="text-green-500 mt-0.5">${window.AQUAPOOL_COMPONENTS.icon('check', 'w-5 h-5')}</span><span class="text-slate-700">${f.text}</span>`
                : `<span class="text-slate-300 mt-0.5">${window.AQUAPOOL_COMPONENTS.icon('x', 'w-5 h-5')}</span><span class="text-slate-400 line-through">${f.text}</span>`}
            </li>
          `).join('')}
        </ul>
        <a href="contacto.html" class="block w-full text-center py-3 rounded-lg font-semibold transition-all ${plan.popular ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:shadow-lg hover:shadow-cyan-500/30' : 'bg-slate-100 text-slate-700 hover:bg-cyan-50 hover:text-cyan-700'}">
          Contratar
        </a>
      </article>
    `).join('');
    // Reveal animation
    plansEl.querySelectorAll('.plan-card').forEach((c, i) => {
      c.classList.add('reveal');
      setTimeout(() => c.classList.add('visible'), i * 100);
    });
  }

  function renderExtras() {
    const { PRICING_EXTRAS } = window.AQUAPOOL_DATA;
    extrasEl.innerHTML = PRICING_EXTRAS.map(e => `
      <div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100">
        <div class="flex items-center gap-3">
          ${window.AQUAPOOL_COMPONENTS.icon('check', 'w-5 h-5 text-cyan-500')}
          <span class="text-slate-700">${e.service}</span>
        </div>
        <div class="text-right">
          <div class="font-display font-bold text-cyan-700">Desde ${formatCLP(e.from)}</div>
          <div class="text-xs text-slate-500">por ${e.unit}</div>
        </div>
      </div>
    `).join('');
  }

  function renderFAQ() {
    const { FAQ } = window.AQUAPOOL_DATA;
    faqEl.innerHTML = FAQ.map((f, i) => `
      <div class="faq-item" data-index="${i}">
        <button class="faq-question w-full text-left" type="button">
          <span>${f.q}</span>
          <span class="faq-icon text-cyan-500">${window.AQUAPOOL_COMPONENTS.icon('chevron', 'w-5 h-5')}</span>
        </button>
        <div class="faq-answer">${f.a}</div>
      </div>
    `).join('');

    faqEl.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const wasOpen = item.classList.contains('open');
        // Cerrar todos
        faqEl.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', initPricing);