<template>
  <ListTitle :name="title" :items="consequences" :right="true" />
  <div class="consequences">
    <Consequence
      v-for="consequence in consequences"
      :key="consequence.id"
      :consequence="consequence"
    />
  </div>
</template>

<script>
import ListTitle from '@/components/ListTitle.vue';
import Consequence from './Consequence.vue';

export default {
  name: 'CauseList',
  props: {
    title: {
      type: String,
      default: 'conséquence'
    },
    consequences: Object
  },
  components: { ListTitle, Consequence }
};
</script>

<style scoped>
.consequences {
  display: flex;
  flex-direction: column;
  max-width: 600px;
}
</style>
