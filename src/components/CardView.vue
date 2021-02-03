<template>
  <div class="card-details">
    <img class="card-image" :src="card.img.url" :title="card.shortTitle" />
    <h2>
      <div class="badge">
        {{ card.causes.length }}
      </div>
      cause<span v-if="card.causes.length > 1">s</span>
    </h2>
    <CardInList v-for="cause in card.causes" :key="cause.id" :card="cause" />
  </div>
</template>

<script>
import CardInList from '@/components/CardInList.vue';

export default {
  name: 'CardView',
  components: {
    CardInList
  },
  props: {
    card: Object
  }
};
</script>

<style scoped>
.card-details {
  margin: 0.4rem 5rem;
  padding: 1rem;
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
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  display: inline-block;
  font-size: 1.6rem;
  text-shadow: #e90000 1px 1px;
  box-shadow: 1px 1px 0px #706f71;
}
</style>
