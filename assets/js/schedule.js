/* ================================================================
   AQUAPOOL SPA — SCHEDULE
   Render del horario semanal.
   ================================================================ */

function initSchedule() {
  const cont = document.getElementById('scheduleContainer');
  if (!cont) return;
  const { WEEKLY_SCHEDULE } = window.AQUAPOOL_DATA;

  cont.innerHTML = WEEKLY_SCHEDULE.map(day => `
    <div class="bg-white rounded-2xl shadow-md overflow-hidden reveal">
      <div class="bg-gradient-to-r from-cyan-500 to-cyan-600 px-6 py-3 text-white">
        <h3 class="font-display font-bold text-lg">${day.day}</h3>
      </div>
      <div class="divide-y divide-slate-100">
        ${day.slots.map(s => `
          <div class="schedule-row flex items-center justify-between px-6 py-4 hover:bg-cyan-50/50 transition-colors">
            <div class="flex items-center gap-3">
              ${window.AQUAPOOL_COMPONENTS.icon('clock', 'w-4 h-4 text-cyan-500')}
              <span class="font-semibold text-slate-700 text-sm">${s.time}</span>
            </div>
            <div class="text-right">
              <div class="font-bold text-slate-800">${s.class}</div>
              <div class="text-xs text-slate-500">${s.instructor}</div>
            </div>
          </div>
        `).join('')}
        ${day.slots.length === 0 ? '<div class="px-6 py-8 text-center text-slate-400 text-sm">Sin clases</div>' : ''}
      </div>
    </div>
  `).join('');

  // Trigger reveal animation
  if (typeof initReveal === 'function') initReveal();
  else {
    cont.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }
}

document.addEventListener('DOMContentLoaded', initSchedule);