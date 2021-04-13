<template>
  <div class="banner">
    <h2>{{ $t(layout.titleKey) }}</h2>
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
  color: #ffffff;
  text-shadow: #e90000 1px 1px;
  background-color: #04c2c0;
  padding: 0.1rem 0;
}
</style>
