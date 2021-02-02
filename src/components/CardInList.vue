<template>
  <div class="anchorInList" :id="'carte-' + card.cardNum"></div>
  <router-link
    :to="{ name: 'RouteCardDetails', params: { cardNum: card.cardNum } }"
  >
    <img class="card-image" :src="card.img.url" :title="card.shortTitle" />
  </router-link>
</template>

<script>
export default {
  name: 'CardInList',
  props: {
    card: Object
  }
};
</script>

<style scoped>
.anchorInList {
  position: relative;
  top: -8rem;
}

.card-image {
  width: 95vw;
  max-width: 450px;
  padding: 0;
  cursor: pointer;
  margin: 3px;
}
.card-image:hover {
  transform: scale(1.02);
  box-shadow: 5px 5px 2px #04c2c0aa;
}
</style>
