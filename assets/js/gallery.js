/* ================================================================
   AQUAPOOL SPA — GALERÍA
   Filtros por categoría + lightbox modal.
   ================================================================ */

function initGallery() {
  const filtersEl = document.getElementById('galleryFilters');
  const gridEl = document.getElementById('galleryGrid');
  const lightboxEl = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxClose = document.getElementById('lightboxClose');

  if (!filtersEl || !gridEl) return;
  const { GALLERY_FILTERS, GALLERY_ITEMS } = window.AQUAPOOL_DATA;

  // Render filters
  filtersEl.innerHTML = GALLERY_FILTERS.map((f, i) => `
    <button data-filter="${f.id}" class="filter-btn ${i === 0 ? 'active' : ''}">${f.label}</button>
  `).join('');

  // Render items
  function renderItems(filter = 'all') {
    const items = filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.category === filter);
    gridEl.innerHTML = items.map(item => `
      <article class="gallery-item" data-id="${item.id}" data-category="${item.category}">
        <img src="${item.src}" alt="${item.title}" loading="lazy">
        <div class="overlay">
          <div>
            <h3 class="font-display font-bold text-lg">${item.title}</h3>
            <p class="text-sm text-cyan-100">${item.desc}</p>
          </div>
        </div>
      </article>
    `).join('');

    gridEl.querySelectorAll('.gallery-item').forEach(el => {
      el.addEventListener('click', () => openLightbox(el));
      // Animar entrada
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      setTimeout(() => {
        el.style.transition = 'opacity .5s ease, transform .5s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 30);
    });
  }

  // Filter click
  filtersEl.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      filtersEl.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderItems(btn.dataset.filter);
    });
  });

  // Lightbox
  function openLightbox(el) {
    const id = parseInt(el.dataset.id, 10);
    const item = GALLERY_ITEMS.find(i => i.id === id);
    if (!item || !lightboxEl) return;
    lightboxImg.src = item.src;
    lightboxImg.alt = item.title;
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxDesc) lightboxDesc.textContent = item.desc;
    lightboxEl.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    if (!lightboxEl) return;
    lightboxEl.classList.remove('open');
    document.body.style.overflow = '';
  }
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxEl) lightboxEl.addEventListener('click', e => { if (e.target === lightboxEl) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  renderItems('all');
}

document.addEventListener('DOMContentLoaded', initGallery);