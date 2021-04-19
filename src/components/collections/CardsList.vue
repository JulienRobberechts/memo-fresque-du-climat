<template>
  <div class="cards">
    <CardItem v-for="card in cards" :key="card.cardNum" :card="card" />
  </div>
</template>

<script>
// @ is an alias to /src
import CardItem from '@/components/cards/CardItem.vue';
import CardsService from '@/services/CardsService';

export default {
  name: 'CardsList',
  components: {
    CardItem,
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
