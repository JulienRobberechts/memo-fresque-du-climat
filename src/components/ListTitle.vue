<template>
  <h2 class="list-title">
    <div class="badge">
      {{ items.length }}
    </div>
    <span v-if="items.length <= 1">{{ nameSingular }}</span>
    <span v-if="items.length > 1">{{ namePlural }}</span>
  </h2>
</template>

<script>
export default {
  name: 'ListTitle',
  props: {
    nameSingular: String,
    namePlural: String,
    items: Object
  }
};
</script>

<style scoped>
.list-title {
  display: flex;
  justify-content: center;
}

.badge {
  color: #ffffff;
  background-color: #04c2c0;
  margin: 0 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  display: inline-block;
  font-size: 1.6rem;
  text-shadow: #e90000 1px 1px;
  box-shadow: 1px 1px 0px #706f71;
}
</style>
