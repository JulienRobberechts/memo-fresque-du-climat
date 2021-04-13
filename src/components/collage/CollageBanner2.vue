<template>
  <hr v-if="selectedCard" />
  <div v-if="selectedCard" class="banner">
    <h2>{{ selectedCard.title }}</h2>
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
hr {
  color: #04c2c0;
}

.banner {
  margin: 4px;
  color: #04c2c0;
  text-shadow: #e90000 1px 1px;
  padding: 0.1rem 0;
}
</style>
