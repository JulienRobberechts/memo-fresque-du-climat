<template>
  <div class="title">
    <span class="title1">{{
      $t('card.title', { cardNum: card.cardNum })
    }}</span>
    <span> - </span>
    <span class="title2">{{ card.title }}</span>
  </div>
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
.title {
  font-weight: 500;
  margin: 0 0.3rem;
}
.title1 {
  font-size: 1.2rem;
  line-height: 1.4em;
  margin: 0.6rem auto;
}
.title2 {
  font-size: 1.2rem;
  line-height: 1.4em;
  margin: 0.6rem auto;
}
.card-details {
  display: flex;
  justify-content: center;
}
.withSpace {
  margin: 2rem;
}
</style>
