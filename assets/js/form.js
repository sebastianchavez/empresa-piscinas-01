/* ================================================================
   AQUAPOOL SPA — FORM
   Validación + simulación de envío.
   ================================================================ */

function initForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const fields = {
    name: form.querySelector('#name'),
    email: form.querySelector('#email'),
    phone: form.querySelector('#phone'),
    subject: form.querySelector('#subject'),
    message: form.querySelector('#message')
  };

  function showError(input, msg) {
    input.classList.add('error');
    const err = input.parentElement.querySelector('.form-error');
    if (err) err.textContent = msg;
  }
  function clearError(input) {
    input.classList.remove('error');
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  Object.values(fields).forEach(input => {
    if (!input) return;
    input.addEventListener('input', () => clearError(input));
    input.addEventListener('blur', () => {
      if (input.required && !input.value.trim()) showError(input, 'Este campo es obligatorio');
      if (input.type === 'email' && input.value && !validateEmail(input.value)) showError(input, 'Email inválido');
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    if (!fields.name.value.trim() || fields.name.value.trim().length < 2) {
      showError(fields.name, 'Ingresa tu nombre');
      valid = false;
    }
    if (!validateEmail(fields.email.value)) {
      showError(fields.email, 'Email inválido');
      valid = false;
    }
    if (fields.phone && fields.phone.value && !validatePhone(fields.phone.value)) {
      showError(fields.phone, 'Teléfono inválido');
      valid = false;
    }
    if (!fields.subject.value) {
      showError(fields.subject, 'Selecciona un asunto');
      valid = false;
    }
    if (!fields.message.value.trim() || fields.message.value.trim().length < 10) {
      showError(fields.message, 'Mínimo 10 caracteres');
      valid = false;
    }

    if (!valid) return;

    // Simular envío
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="flex items-center justify-center gap-2"><svg class="animate-spin w-5 h-5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" opacity=".3"/><path d="M4 12a8 8 0 018-8" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/></svg> Enviando...</span>';

    setTimeout(() => {
      showSuccess();
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }, 1500);
  });

  function validatePhone(phone) {
    return /^[\d\s\+\-\(\)]{8,}$/.test(phone);
  }

  function showSuccess() {
    const success = document.getElementById('formSuccess');
    if (success) {
      success.classList.remove('hidden');
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => success.classList.add('hidden'), 6000);
    }
  }
}

document.addEventListener('DOMContentLoaded', initForm);