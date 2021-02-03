<template>
  <div class="card-details" v-if="card">
    <CardView :card="card" />
  </div>
  <router-link
    @click="justForHash"
    class="fdc-link"
    :to="{ name: 'RouteHome', hash: '#carte-' + card.cardNum }"
  >
    &larrhk; retour
  </router-link>
</template>

<script>
import CardView from '@/components/CardView.vue';
import CardsService from '@/services/CardsService';

export default {
  name: 'CardDetails',
  props: ['cardNum'],
  components: {
    CardView
  },
  data() {
    return {
      card: null
    };
  },
  created() {
    if (!this.cardNum) {
      return;
    }
    this.card = CardsService.getCardDetails(this.cardNum);
  }
};
</script>

<style scoped>
.card-details {
  margin: 0.4rem 5rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
}
</style>
