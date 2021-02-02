<template>
  <div class="card-details" v-if="card">
    <Card :card="card" />
  </div>
  <AnchorLink
    class="fdc-link"
    :to="{ name: 'RouteHome', hash: '#carte-' + card.cardNum }"
  >
    &larrhk; retour
  </AnchorLink>
</template>

<script>
import AnchorLink from '@/components/Anchor-link.vue';
import Card from '@/components/Card.vue';
import CardsService from '@/services/CardsService';

export default {
  name: 'CardDetails',
  props: ['cardNum'],
  components: {
    Card,
    AnchorLink
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
    this.card = CardsService.getCard(this.cardNum);
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
