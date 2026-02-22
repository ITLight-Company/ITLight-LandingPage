/**
 * ITLight – Language Switcher
 * Uses ?lang= URL param (primary) or localStorage (fallback).
 * Default language: pl
 */

(function () {
  'use strict';

  /* ---------- helpers ----------------------------------------- */
  const SUPPORTED = ['pl', 'en', 'cs', 'sk', 'lt'];
  const DEFAULT_LANG = 'pl';

  const FLAGS = { pl: '🇵🇱', en: '🇬🇧', cs: '🇨🇿', sk: '🇸🇰', lt: '🇱🇹' };
  const LABELS = { pl: 'PL', en: 'EN', cs: 'CS', sk: 'SK', lt: 'LT' };

  function getLangFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const l = params.get('lang');
    return SUPPORTED.includes(l) ? l : null;
  }

  function getLangFromStorage() {
    const l = localStorage.getItem('itlight_lang');
    return SUPPORTED.includes(l) ? l : null;
  }

  /**
   * Auto-detect language from browser's navigator.language.
   * Only used on first visit (no localStorage preference saved yet).
   * Maps browser locale codes → supported languages:
   *   lt-* → lt (Lithuanian)
   *   sk-* → sk (Slovak)
   *   cs-* / cz-* → cs (Czech)
   *   pl-* → pl (Polish)
   *   en-* → en (English)
   */
  function getLangFromBrowser() {
    const bl = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (bl.startsWith('lt')) return 'lt';
    if (bl.startsWith('sk')) return 'sk';
    if (bl.startsWith('cs') || bl.startsWith('cz')) return 'cs';
    if (bl.startsWith('pl')) return 'pl';
    if (bl.startsWith('en')) return 'en';
    return null;
  }

  function getCurrentLang() {
    // Priority: ?lang= URL param > localStorage (user's explicit choice) > browser language > default
    return getLangFromUrl() || getLangFromStorage() || getLangFromBrowser() || DEFAULT_LANG;
  }

  /* ---------- apply translations ------------------------------ */
  function applyLang(lang) {
    if (!TRANSLATIONS || !TRANSLATIONS[lang]) return;
    const dict = TRANSLATIONS[lang];

    /* 1. <html lang> */
    document.documentElement.lang = lang;

    /* 2. <title> – uses data-i18n attr on <title> if present, falls back to 'page-title' */
    const titleEl = document.querySelector('title');
    const titleKey = (titleEl && titleEl.getAttribute('data-i18n')) || 'page-title';
    if (dict[titleKey]) document.title = dict[titleKey];

    /* 3. <meta name="description"> – uses data-i18n attr if present */
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      const descKey = metaDesc.getAttribute('data-i18n') || 'meta-description';
      if (dict[descKey]) metaDesc.content = dict[descKey];
    }

    /* 4. <meta name="keywords"> */
    const metaKw = document.querySelector('meta[name="keywords"]');
    if (metaKw && dict['meta-keywords']) metaKw.content = dict['meta-keywords'];

    /* 5. <meta name="language"> */
    const metaLang = document.querySelector('meta[name="language"]');
    if (metaLang) metaLang.content = lang;

    /* 6. Open Graph */
    setMeta('og:title', dict['og-title']);
    setMeta('og:description', dict['og-description']);
    setMeta('og:locale', langToLocale(lang));

    /* 7. Twitter Card */
    setMeta('twitter:title', dict['twitter-title']);
    setMeta('twitter:description', dict['twitter-description']);

    /* 8. canonical & hreflang already in HTML, update canonical query */
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const base = canonical.href.split('?')[0];
      canonical.href = lang === DEFAULT_LANG ? base : base + '?lang=' + lang;
    }

    /* 9. All data-i18n elements */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        /* Use innerHTML for keys that may contain <strong>/<br> etc. */
        if (el.getAttribute('data-i18n-html') === 'true') {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    /* 10. Placeholders */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    /* 11. Update language switcher indicator */
    const langIndicator = document.getElementById('langIndicator');
    if (langIndicator) {
      langIndicator.textContent = FLAGS[lang] + ' ' + LABELS[lang];
    }

    /* 12. Mark active lang in dropdown */
    document.querySelectorAll('.lang-option').forEach(function (item) {
      item.classList.toggle('active', item.getAttribute('data-lang') === lang);
    });

    /* 13. Expose current lang globally for legacy inline scripts */
    window.ITL_LANG = lang;
  }

  /* ---------- meta helper ------------------------------------- */
  function setMeta(property, value) {
    if (!value) return;
    // Try property first (OG), then name (Twitter)
    let el = document.querySelector('meta[property="' + property + '"]')
          || document.querySelector('meta[name="' + property + '"]');
    if (el) el.content = value;
  }

  function langToLocale(lang) {
    const map = { pl: 'pl_PL', en: 'en_US', cs: 'cs_CZ', sk: 'sk_SK', lt: 'lt_LT' };
    return map[lang] || 'pl_PL';
  }

  /* ---------- public API -------------------------------------- */
  window.switchLang = function (lang) {
    if (!SUPPORTED.includes(lang)) return;
    localStorage.setItem('itlight_lang', lang);

    // Update URL without reload
    const url = new URL(window.location.href);
    if (lang === DEFAULT_LANG) {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', lang);
    }
    history.replaceState(null, '', url.toString());

    applyLang(lang);
  };

  /* ---------- inline alert helpers overrides ------------------ */
  // Replace hard-coded English alert strings with translated ones
  window.ITL_t = function (key) {
    const lang = window.ITL_LANG || DEFAULT_LANG;
    const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
    return dict[key] || key;
  };

  /* ---------- init -------------------------------------------- */
  function init() {
    const lang = getCurrentLang();
    // Save to storage so next page load remembers choice
    localStorage.setItem('itlight_lang', lang);
    applyLang(lang);
  }

  // Run after TRANSLATIONS dict is guaranteed to exist
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
