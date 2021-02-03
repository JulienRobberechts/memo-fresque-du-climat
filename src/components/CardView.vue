<template>
  <div class="card-details-panel">
    <img class="card-image" :src="card.img.url" :title="card.shortTitle" />
    <CauseList :causes="card.causes" />
    <ConsequenceList :consequences="card.consequences" />
  </div>
</template>

<script>
import CauseList from '@/components/CauseList.vue';
import ConsequenceList from '@/components/ConsequenceList.vue';

export default {
  name: 'CardView',
  props: {
    card: Object
  },
  components: {
    CauseList,
    ConsequenceList
  }
};
</script>

<style scoped>
.card-details-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card-image {
  width: 95vw;
  max-width: 600px;
  padding: 0;
  margin: 3px;
}
</style>
