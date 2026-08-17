/* Language handling -------------------------------------------------------- */

const LANG_KEY = 'pas-lang';
const DEFAULT_LANG = 'nl';
const SUPPORTED = ['nl', 'en'];

function storedLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    return SUPPORTED.includes(saved) ? saved : DEFAULT_LANG;
  } catch {
    // Private mode or blocked storage — fall back to Dutch.
    return DEFAULT_LANG;
  }
}

let currentLang = storedLang();

// Resolve a dotted key such as "contact.errName" against the active dictionary.
function t(path) {
  return path.split('.').reduce((value, key) => (value == null ? undefined : value[key]), translations[currentLang]);
}

function applyLang(lang) {
  currentLang = SUPPORTED.includes(lang) ? lang : DEFAULT_LANG;
  document.documentElement.lang = currentLang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = t(el.dataset.i18n);
    if (value != null) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const value = t(el.dataset.i18nHtml);
    if (value != null) el.innerHTML = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const value = t(el.dataset.i18nPlaceholder);
    if (value != null) el.placeholder = value;
  });

  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const value = t(el.dataset.i18nAlt);
    if (value != null) el.alt = value;
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const value = t(el.dataset.i18nTitle);
    if (value != null) el.title = value;
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const value = t(el.dataset.i18nAriaLabel);
    if (value != null) el.setAttribute('aria-label', value);
  });

  // Page-specific metadata.
  const page = document.body.dataset.page || 'home';
  const metaKeys = {
    home: ['meta.title', 'meta.description'],
    privacy: ['meta.privacyTitle', 'meta.privacyDescription'],
    terms: ['meta.termsTitle', 'meta.termsDescription']
  }[page];

  if (metaKeys) {
    document.title = t(metaKeys[0]);
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = t(metaKeys[1]);
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === currentLang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  try {
    localStorage.setItem(LANG_KEY, currentLang);
  } catch {
    // Persisting is best-effort; the site still works without it.
  }

  // Refresh any validation text already on screen.
  if (typeof refreshFormMessages === 'function') refreshFormMessages();
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

/* Navigation --------------------------------------------------------------- */

const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* Contact form ------------------------------------------------------------- */

const WEB3FORMS_ACCESS_KEY = '8bf792c2-8c02-4d14-8855-d6087d4777d9';

const form = document.getElementById('contact-form');
let refreshFormMessages;

if (form) {
  const successMessage = document.getElementById('form-success');
  const submitButton = form.querySelector('button[type="submit"]');
  const consent = document.getElementById('consent');

  // Each field maps to an error key so messages follow the active language.
  const fields = {
    name: {
      input: document.getElementById('name'),
      error: document.getElementById('name-error'),
      errorKey: 'contact.errName',
      isValid: value => value.trim().length >= 2
    },
    phone: {
      input: document.getElementById('phone'),
      error: document.getElementById('phone-error'),
      errorKey: 'contact.errPhone',
      isValid: value => /^[+\d][\d\s()-]{6,}$/.test(value.trim())
    },
    email: {
      input: document.getElementById('email'),
      error: document.getElementById('email-error'),
      errorKey: 'contact.errEmail',
      isValid: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
    },
    message: {
      input: document.getElementById('message'),
      error: document.getElementById('message-error'),
      errorKey: 'contact.errMessage',
      isValid: value => value.trim().length >= 10
    }
  };

  function validateField(field) {
    const ok = field.isValid(field.input.value);
    const group = field.input.closest('.form-group');
    group.classList.toggle('invalid', !ok);
    field.error.textContent = ok ? '' : t(field.errorKey);
    return ok;
  }

  function validateConsent() {
    const ok = consent.checked;
    const group = consent.closest('.form-consent');
    const error = document.getElementById('consent-error');
    group.classList.toggle('invalid', !ok);
    error.textContent = ok ? '' : t('contact.errConsent');
    return ok;
  }

  // Re-render visible errors and the button label after a language switch.
  refreshFormMessages = () => {
    Object.values(fields).forEach(field => {
      if (field.input.closest('.form-group').classList.contains('invalid')) {
        field.error.textContent = t(field.errorKey);
      }
    });
    const consentGroup = consent.closest('.form-consent');
    if (consentGroup.classList.contains('invalid')) {
      document.getElementById('consent-error').textContent = t('contact.errConsent');
    }
    if (!submitButton.disabled) submitButton.textContent = t('contact.submit');
  };

  Object.values(fields).forEach(field => {
    field.input.addEventListener('blur', () => validateField(field));
    field.input.addEventListener('input', () => {
      if (field.input.closest('.form-group').classList.contains('invalid')) validateField(field);
    });
  });

  consent.addEventListener('change', () => {
    if (consent.closest('.form-consent').classList.contains('invalid')) validateConsent();
  });

  form.addEventListener('submit', async event => {
    event.preventDefault();
    successMessage.classList.remove('show', 'error');
    successMessage.textContent = '';

    // Run every check before bailing out so all errors appear at once.
    const fieldsValid = Object.values(fields).map(validateField).every(Boolean);
    const consentValid = validateConsent();
    if (!fieldsValid || !consentValid) return;

    submitButton.disabled = true;
    submitButton.textContent = t('contact.sending');

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

      if (!response.ok || !result.success) throw new Error(result.message || 'Request failed');

      successMessage.textContent = t('contact.success');
      successMessage.classList.add('show');
      form.reset();
    } catch {
      successMessage.textContent = t('contact.failed');
      successMessage.classList.add('show', 'error');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = t('contact.submit');
    }
  });
}

applyLang(currentLang);
