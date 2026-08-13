// Mobile navigation toggle
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form validation + submission (via Web3Forms, https://web3forms.com)
const WEB3FORMS_ACCESS_KEY = '8bf792c2-8c02-4d14-8855-d6087d4777d9';

const form = document.getElementById('contact-form');
const successMessage = document.getElementById('form-success');
const submitButton = form.querySelector('button[type="submit"]');

const fields = {
  name: {
    input: document.getElementById('name'),
    error: document.getElementById('name-error'),
    validate: value => value.trim().length >= 2 || 'Please enter your name.'
  },
  phone: {
    input: document.getElementById('phone'),
    error: document.getElementById('phone-error'),
    validate: value => /^[+\d][\d\s()-]{6,}$/.test(value.trim()) || 'Please enter a valid phone number.'
  },
  email: {
    input: document.getElementById('email'),
    error: document.getElementById('email-error'),
    validate: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) || 'Please enter a valid email address.'
  },
  message: {
    input: document.getElementById('message'),
    error: document.getElementById('message-error'),
    validate: value => value.trim().length >= 10 || 'Message should be at least 10 characters long.'
  }
};

function validateField(field) {
  const result = field.validate(field.input.value);
  const group = field.input.closest('.form-group');

  if (result === true) {
    group.classList.remove('invalid');
    field.error.textContent = '';
    return true;
  }

  group.classList.add('invalid');
  field.error.textContent = result;
  return false;
}

Object.values(fields).forEach(field => {
  field.input.addEventListener('blur', () => validateField(field));
  field.input.addEventListener('input', () => {
    if (field.input.closest('.form-group').classList.contains('invalid')) {
      validateField(field);
    }
  });
});

form.addEventListener('submit', async event => {
  event.preventDefault();
  successMessage.classList.remove('show');
  successMessage.textContent = '';

  const isValid = Object.values(fields)
    .map(validateField)
    .every(Boolean);

  if (!isValid) return;

  const originalButtonText = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';

  try {
    const payload = new FormData(form);
    payload.append('access_key', WEB3FORMS_ACCESS_KEY);
    payload.append('subject', `New website inquiry from ${fields.name.input.value.trim()}`);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: payload
    });
    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Request failed');
    }

    successMessage.textContent = "Thanks! We received your request and will call you back shortly.";
    successMessage.style.background = '';
    successMessage.style.color = '';
    successMessage.classList.add('show');
    form.reset();
  } catch (err) {
    successMessage.textContent = 'Sending failed. Please try again or call us directly.';
    successMessage.style.background = 'rgba(220, 53, 69, 0.12)';
    successMessage.style.color = '#c0392b';
    successMessage.classList.add('show');
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalButtonText;
  }
});
