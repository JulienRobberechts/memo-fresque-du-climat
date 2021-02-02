<template>
  <img class="card-image" :src="card.img.url" :title="card.shortTitle" />
</template>

<script>
export default {
  name: 'CardView',
  props: {
    card: Object
  }
};
</script>

<style scoped>
.card-image {
  width: 95vw;
  max-width: 600px;
  padding: 0;
  margin: 3px;
}
</style>
