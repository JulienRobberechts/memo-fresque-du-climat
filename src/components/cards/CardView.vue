<template>
  <div class="card-details-panel">
    <CardMenu :card="card" />
    <CardFront :card="card" />
    <CardBack
      :description="card.backDescription"
      :cardNumber="card.cardNum"
      :setNumber="card.cardSet"
    />
    <CardExplanation :card="card" />
    <CardMenu :card="card" />
    <CardLinks :card="card" />
    <CardMenu :card="card" />
  </div>
</template>

<script>
import CardMenu from './CardMenu.vue';
import CardBack from './CardBack.vue';
import CardFront from './CardFront.vue';
import CardExplanation from './CardExplanation.vue';
import CardLinks from './CardLinks.vue';

export default {
  name: 'CardView',
  props: {
    card: Object,
  },
  components: { CardMenu, CardFront, CardBack, CardExplanation, CardLinks },
};
</script>

<style scoped>
.card-details-panel {
  width: 95vw;
  max-width: 600px;
  padding: 0;
  margin: 3px;
}
</style>
