<template>
  <ListTitle name="cause" :items="causes" />
  <div class="causes">
    <Cause v-for="cause in causes" :key="cause.id" :cause="cause" />
  </div>
</template>

<script>
import ListTitle from '@/components/ListTitle.vue';
import Cause from '@/components/Cause.vue';

export default {
  name: 'CauseList',
  props: {
    causes: Object
  },
  components: {
    ListTitle,
    Cause
  }
};
</script>

<style scoped>
.causes {
  display: flex;
  flex-direction: column;
  max-width: 600px;
}
</style>
