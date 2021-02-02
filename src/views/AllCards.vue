<template>
  <h1>Cartes de la Fresque du climat</h1>
  <div class="cards">
    <CardInList v-for="card in cards" :key="card.cardNum" :card="card" />
  </div>
</template>

<script>
// @ is an alias to /src
import CardInList from '@/components/CardInList.vue';
import CardsService from '@/services/CardsService';

export default {
  name: 'AllCards',
  components: {
    CardInList
  },
  data() {
    return {
      cards: null
    };
  },
  created() {
    this.cards = CardsService.getCards();
  }
};
</script>
<style scoped>
.cards {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
}
h1 {
  font-size: 1.4rem;
}
</style>
