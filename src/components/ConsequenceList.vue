<template>
  <h2 class="consequence-title">
    <div class="badge">
      {{ consequences.length }}
    </div>
    consequence<span v-if="consequences.length > 1">s</span>
  </h2>
  <div class="consequences">
    <Consequence
      v-for="consequence in consequences"
      :key="consequence.id"
      :consequence="consequence"
    />
  </div>
</template>

<script>
import Consequence from './Consequence.vue';

export default {
  name: 'CauseList',
  props: {
    consequences: Object
  },
  components: {
    Consequence
  }
};
</script>

<style scoped>
.consequences-title {
  display: flex;
  justify-content: flex-end;
  margin-right: 0.3rem;
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
.consequences {
  display: flex;
  flex-direction: column;
  max-width: 600px;
}
</style>
