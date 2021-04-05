<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitch',
  data() {
    return { langs: ['en', 'fr'] };
  },
};
</script>
<style scoped>
.locale-changer {
  /* hide the component until we get 2 languages */
  display: none;
}
</style>
