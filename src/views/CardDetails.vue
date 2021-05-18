<template>
  <CardView :card="card" />
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
