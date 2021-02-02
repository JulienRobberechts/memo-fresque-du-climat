<template>
  <h1>Cartes de la Fresque du climat</h1>
  <div class="cards">
    <Card class="card" v-for="card in cards" :key="card.id" :card="card" />
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue';
import CardsService from '@/services/CardsService';

export default {
  name: 'AllCards',
  components: {
    Card
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
.card {
  margin: 3px 3px;
}
h1 {
  font-size: 1.4rem;
}
</style>
