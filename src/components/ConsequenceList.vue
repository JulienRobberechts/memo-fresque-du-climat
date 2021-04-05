<template>
  <div class="consequences">
    <Consequence
      v-for="consequence in consequences"
      :key="consequence.cardNum"
      :consequence="consequence"
    />
  </div>
</template>

<script>
import Consequence from './Consequence.vue';

export default {
  name: 'CauseList',
  props: {
    title: {
      type: String,
      default: 'conséquence',
    },
    consequences: Object,
  },
  components: { Consequence },
};
</script>

<style scoped>
.consequences {
  display: flex;
  flex-direction: column;
  max-width: 600px;
}
</style>
