<template>
  <div class="card-details" v-if="card">
    <CardView :card="card" />
  </div>
  <router-link class="fdc-link withSpace" :to="{ name: 'RouteHome' }">
    &larrhk; {{ $t('menu.back') }}
  </router-link>
</template>

<script>
import CardView from '@/components/cards/CardView.vue';
import CardsService from '@/services/CardsService';
import meta from '@/utils/meta-vue3';

export default {
  name: 'CardDetails',
  props: ['cardNum'],
  components: {
    CardView,
  },
  created() {
    meta.setTitle(document, this.title);
    meta.setDescription(document, this.description);
    meta.setOgTypeProduct(document, {
      image: this.card.img.url,
      url: document.URL,
    });
  },
  computed: {
    title() {
      return this.$t('title.card', { cardTitle: this.card.title });
    },
    description() {
      return this.$t('description.card', {
        cardTitle: this.card.title,
        cardDesc: this.card.backDescription,
      });
    },
    card: function () {
      return CardsService.getCardDetails(this.cardNum, this.$i18n.locale);
    },
  },
};
</script>

<style scoped>
.menu-container {
  display: flex;
  justify-content: center;
  /* copy of card-details-panel to refactor */
  width: 95vw;
  max-width: 600px;
  padding: 0;
  margin: 3px auto;
}
.menu {
  display: flex;
  justify-content: space-between;
}
.card-details {
  display: flex;
  justify-content: center;
}
.withSpace {
  margin: 2rem;
}
</style>
