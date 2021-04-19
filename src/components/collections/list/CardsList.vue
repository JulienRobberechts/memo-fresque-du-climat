<template>
  <div class="cards">
    <CardListItem v-for="card in cards" :key="card.cardNum" :card="card" />
  </div>
</template>

<script>
import CardListItem from './CardListItem.vue';
import CardsService from '@/services/CardsService';

export default {
  name: 'CardsList',
  components: {
    CardListItem,
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
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
}
</style>
