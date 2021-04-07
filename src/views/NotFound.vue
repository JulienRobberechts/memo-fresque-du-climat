<template>
  <div class="notFound">
    <h3>Oups, la page n'existe pas</h3>
    <router-link class="back-link" :to="{ name: 'RouteHome' }">
      {{ $t('menu.back') }}
    </router-link>
  </div>
</template>
<script>
import meta from '@/utils/meta-vue3';

export default {
  created() {
    meta.setTitle(document, this.title);
    meta.setDescription(document, this.description);
  },
  computed: {
    title() {
      return this.$t('title.site');
    },
    description() {
      return this.$t('description.site', {
        cardTitle: this.card.title,
        cardDesc: this.card.backDescription,
      });
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
