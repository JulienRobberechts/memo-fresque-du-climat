<template>
  <h2 class="list-title">
    <div class="badge">
      {{ items.length }}
    </div>
    {{ name }}<span v-if="items.length > 1">s</span>
  </h2>
</template>

<script>
export default {
  name: 'ListTitle',
  props: {
    name: String,
    items: Object
  }
};
</script>

<style scoped>
.list-title {
  display: flex;
  justify-content: flex-start;
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

.causes {
  display: flex;
  flex-direction: column;
  max-width: 600px;
}
</style>
