<template>
  <div class="cards">
    <CardMenuItem v-for="card in cards" :key="card.cardNum" :card="card" />
  </div>
</template>

<script>
import CardMenuItem from './CardMenuItem.vue';
import CardsService from '@/services/CardsService';

export default {
  name: 'CardsMenu',
  components: {
    CardMenuItem,
  },
  data() {
    return {
      cards: null,
    };
  },
  created() {
    this.cards = CardsService.getCardsForLang(this.$i18n.locale);
  },
};
</script>

<style scoped>
.cards {
  max-width: 1400px;
  width: 95vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
}
</style>
