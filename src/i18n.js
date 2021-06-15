'use strict';
import { nextTick } from 'vue';
import { createI18n } from 'vue-i18n';
import langs from '@/data/langs.json';

// load default locale
export const DEFAULT_LOCALE = 'fr';
let locale = window.location.pathname.replace(/^\/([^/]+).*/i, '$1');

const newLocale = langs.find((l) => l.code === locale)
  ? locale
  : DEFAULT_LOCALE;

const loadedLanguages = [newLocale];
const message = require(/* webpackChunkName: "i18n-[request]" */ `@/locales/${newLocale}.json`);
//=================================================================================================================

export const i18n = createI18n({
  locale: newLocale,
  fallbackLocale: DEFAULT_LOCALE,
  messages: { [newLocale]: message },
});

//=================================================================================================================

export const loadLanguage = async (lang) => {
  // requested lang is already the current locale
  if (i18n.locale === lang) {
    return;
  }

  // requested lang is not available
  const isLangAvailable = langs.find((l) => l.code === lang);
  if (!isLangAvailable) {
    return;
  }

  // load locale if needed
  if (!loadedLanguages.includes(lang)) {
    const message = await import(
      /* webpackChunkName: "i18n-[request]" */ `@/locales/${lang}.json`
    );
    i18n.global.setLocaleMessage(lang, message.default);
    loadedLanguages.push(lang);
  }

  // set locale globally
  i18n.global.locale = lang;
  return nextTick();
};
