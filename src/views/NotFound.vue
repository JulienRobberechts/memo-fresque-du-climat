<template>
  <div class="notFound">
    <h3>Oups, la page n'existe pas</h3>
    <router-link class="back-link" :to="{ name: 'RouteHome' }">
      {{ $t('menu.back') }}
    </router-link>
  </div>
</template>
<script>
export default {
  created() {
    document.title = this.title;
  },
  computed: {
    title() {
      return this.$t('title.site');
    },
  },
};
</script>
<style scoped>
.notFound {
  color: red;
}
.back-link {
  color: black;
}
</style>
