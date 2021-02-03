<template>
  <div class="card-details">
    <img class="card-image" :src="card.img.url" :title="card.shortTitle" />
    <div>causes : {{ card.causes.length }}</div>
  </div>
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
.card-details {
  margin: 0.4rem 5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card-image {
  width: 95vw;
  max-width: 600px;
  padding: 0;
  margin: 3px;
}
</style>
