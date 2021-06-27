<template>
  <div class="explanation" v-if="card.explanation">
    <span class="explanation-logo">
      <img src="@/assets/fresque-hand.png" :alt="Logo" />
    </span>
    {{ card.explanation }}
  </div>
</template>

<script>
export default {
  name: 'CardExplanation',
  props: {
    card: Object,
  },
};
</script>

<style scoped>
.explanation-logo img {
  position: relative;
  width: 1.5rem;
}
.explanation {
  margin: 1rem 1rem;
  max-width: 600px;
  font-size: 1.2rem;
  text-align: justify;
}
</style>
