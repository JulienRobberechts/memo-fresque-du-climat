<template>
  <h2 class="causes-title">
    <div class="badge">
      {{ causes.length }}
    </div>
    cause<span v-if="causes.length > 1">s</span>
  </h2>
  <div class="causes">
    <Cause v-for="cause in causes" :key="cause.id" :cause="cause" />
  </div>
</template>

<script>
import Cause from '@/components/Cause.vue';
export default {
  name: 'CauseList',
  props: {
    causes: Object
  },
  components: {
    Cause
  }
};
</script>

<style scoped>
.causes-title {
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
