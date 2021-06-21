<template>
  <CardViewSwiper :cardNum="Number(cardNum)" />
</template>

<script>
import CardViewSwiper from '@/components/cards/CardViewSwiper.vue';
import CardsService from '@/services/CardsService';
import meta from '@/utils/meta-vue3';

export default {
  name: 'CardDetails',
  props: ['cardNum'],
  components: {
    CardViewSwiper,
  },
  created() {
    meta.setTitle(document, this.title);
    meta.setDescription(document, this.description);
    meta.setOgTypeProduct(document, {
      image: `${process.env.BASE_URL}img/cards/${this.$i18n.locale}/default/${this.card.cardNum}.png`,
      url: window.location.pathname,
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
