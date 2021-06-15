<template>
  <div class="locale-changer">
    <router-link class="fdc-link" :to="{ params: { lang: otherLanguage.code } }"
      >{{ currentLanguage.flag }} {{ currentLanguage.text }}
    </router-link>
  </div>
</template>

<script>
import langs from '@/data/langs.json';

export default {
  name: 'LanguageSwitch',
  data() {
    return { langs };
  },
  computed: {
    otherLanguage: function () {
      if (this.$i18n.locale == this.langs[0].code) return this.langs[1];
      return this.langs[0];
    },
    currentLanguage: function () {
      if (this.$i18n.locale == this.langs[0].code) return this.langs[0];
      return this.langs[1];
    },
  },
};
</script>
<style scoped></style>
