<template>
  <div v-if="selectedCard" class="banner">
    <span>{{ selectedCard.title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    layout: Object,
    cards: Object,
    selectedCard: Object,
  },
};
</script>

<style scoped>
.banner {
  padding: 1rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: #04c2c0;
  text-shadow: #5a5a5a 1px 1px;

  background-color: #efeeee;
}
</style>
