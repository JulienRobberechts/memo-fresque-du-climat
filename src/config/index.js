export default {
  lang:
    process.env.VUE_APP_I18N_LOCALE ||
    process.env.VUE_APP_I18N_FALLBACK_LOCALE ||
    'en',
};
