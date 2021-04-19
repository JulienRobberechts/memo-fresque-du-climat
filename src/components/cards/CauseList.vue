<template>
  <div class="causes">
    <Cause v-for="cause in causes" :key="cause.cardNum" :cause="cause" />
  </div>
</template>

<script>
import Cause from './Cause.vue';

export default {
  name: 'CauseList',
  props: {
    title: { type: String, default: 'cause' },
    causes: Object,
  },
  components: {
    Cause,
  },
};
</script>

<style scoped>
.causes {
  display: flex;
  flex-direction: column;
  max-width: 600px;
}
</style>
