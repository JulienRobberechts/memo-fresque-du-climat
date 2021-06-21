<template>
  <h1 class="title" v-if="card">
    <span class="title1">{{
      $t('card.title', { cardNum: card.cardNum })
    }}</span>
    <span> - </span>
    <span class="title2">{{ card.title }}</span>
  </h1>
</template>

<script>
export default {
  props: ['card'],
};
</script>

<style>
.title {
  font-weight: 500;
  font-size: 1.2rem;
  margin: 0.5rem;
  margin-top: 0;
}
</style>
