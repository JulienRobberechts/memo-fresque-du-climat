<template>
  <div class="anchorInList" :id="'carte-' + card.cardNum"></div>
  <router-link
    :to="{ name: 'RouteCardDetails', params: { cardNum: card.cardNum } }"
  >
    <img class="card-image" :src="card.img.url" :title="card.title" />
  </router-link>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    card: Object,
  },
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
  box-shadow: 1px 1px 4px #706f71;
}
.card-image:hover {
  transform: scale(1.02);
  box-shadow: 3px 3px 7px #706f71;
}
</style>
