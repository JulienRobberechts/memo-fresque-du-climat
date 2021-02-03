<template>
  <div class="card-details-panel">
    <img class="card-image" :src="card.img.url" :title="card.shortTitle" />
    <h2 class="causes-title">
      <div class="badge">
        {{ card.causes.length }}
      </div>
      cause<span v-if="card.causes.length > 1">s</span>
    </h2>
    <div class="causes">
      <Cause v-for="cause in card.causes" :key="cause.id" :cause="cause" />
    </div>
    <h2 class="consequences-title">
      <div class="badge">
        {{ card.consequences.length }}
      </div>
      consequence<span v-if="card.consequences.length > 1">s</span>
    </h2>
    <div class="consequences">
      <Consequence
        v-for="consequence in card.consequences"
        :key="consequence.id"
        :consequence="consequence"
      />
    </div>
  </div>
</template>

<script>
import Cause from '@/components/Cause.vue';
import Consequence from '@/components/Consequence.vue';

export default {
  name: 'CardView',
  props: {
    card: Object
  },
  components: {
    Cause,
    Consequence
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
.causes-title {
  display: flex;
  justify-content: flex-start;
}
.consequences-title {
  display: flex;
  justify-content: flex-end;
  margin-right: 0.3rem;
}
.causes {
  display: flex;
  flex-direction: column;
  max-width: 600px;
}
.consequences {
  display: flex;
  flex-direction: column;
  max-width: 600px;
}
</style>
