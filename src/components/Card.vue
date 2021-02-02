<template>
  <div class="anchor" :id="'carte-' + card.cardNum"></div>
  <router-link
    :to="{ name: 'RouteCardDetails', params: { cardNum: card.cardNum } }"
  >
    <img class="card-image" :src="card.img.url" :title="card.shortTitle" />
  </router-link>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.anchor {
  position: relative;
  top: -8rem;
}

.card-image {
  width: 95vw;
  max-width: 450px;
  padding: 0;
  cursor: pointer;
}
.card-image:hover {
  transform: scale(1.03);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
