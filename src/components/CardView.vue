<template>
  <div class="card-details-panel">
    <img class="card-image" :src="card.img.url" :title="card.shortTitle" />
    <h2 class="causes-title">
      <div class="badge">
        {{ card.causes.length }}
      </div>
      cause<span v-if="card.causes.length > 1">s</span>
    </h2>
    <div class="causes" v-for="cause in card.causes" :key="cause.id">
      <div class="cause">
        <img
          class="cause-card-image"
          :src="cause.img.url"
          :title="cause.shortTitle"
        />
        <p class="cause-explanation">
          Cette carte peut être considérée comme la cause des secteurs
          économiques (Industrie, Bâtiment, Transport, Agriculture), ou comme le
          titre d'un ensemble de cartes qui sont alors regroupées dans une
          grosse "patate".
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardView',
  props: {
    card: Object
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
  margin: 0 0.3rem;
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
}
.causes {
  display: flex;
}
.cause {
  margin: 0.5rem 0.3rem;
}
.cause-card-image {
  float: left;
  width: 40vw;
  max-width: 600px;
  padding: 0;
  margin: 0 0.6rem 0.2rem 0;
  box-shadow: 3px 3px 0px #04c2c0;
}
.cause-explanation {
  padding: 0.1rem;
  margin: 0;
  text-align: justify;
}
.cause-explanation:first-letter {
  text-transform: capitalize;
  font-size: 130%;
}
</style>
