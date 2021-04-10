<template>
  <div id="nav"><Menu /></div>
  <div id="content">
    <router-view />
  </div>
</template>
<script>
import Menu from '@/components/Menu';
import meta from '@/utils/meta-vue3';

export default {
  components: {
    Menu,
  },
  created() {
    meta.setOgLocale(document, this.$i18n.locale);
    meta.setOgUrl(document, document.URL);
  },
};
</script>
<style>
body {
  margin: 0;
}

#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  margin: 0;
  padding: 0.5rem 0;
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 3rem;
  z-index: 999;
  background-color: white;
}

#content {
  margin: 0 auto;
  margin-top: 5rem;
}
</style>
