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
      <div class="cause" v-for="cause in card.causes" :key="cause.id">
        <img
          class="cause-card-image"
          :src="cause.img.url"
          :title="cause.shortTitle"
        />
        <p class="cause-explanation" v-if="!!cause.Explanation">
          {{ cause.Explanation }}
        </p>
        <p class="cause-explanation-none" v-else>
          sans explication
        </p>
      </div>
    </div>
    <h2 class="consequences-title">
      <div class="badge">
        {{ card.consequences.length }}
      </div>
      consequence<span v-if="card.consequences.length > 1">s</span>
    </h2>
    <div class="consequences">
      <div
        class="consequence"
        v-for="consequence in card.consequences"
        :key="consequence.id"
      >
        <img
          class="consequence-card-image"
          :src="consequence.img.url"
          :title="consequence.shortTitle"
        />
        <p class="consequence-explanation" v-if="!!consequence.Explanation">
          {{ consequence.Explanation }}
        </p>
        <div class="consequence-explanation-none" v-else>
          sans explication
        </div>
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
.cause {
  margin: 0.5rem 0.3rem;
}
.consequence {
  margin: 0.5rem 0.3rem;
}
.cause-card-image {
  float: left;
  width: 40vw;
  max-width: 240px;
  padding: 0;
  margin: 0 0.6rem 0.2rem 0;
  box-shadow: 3px 3px 0px #04c2c0;
}
.consequence-card-image {
  float: right;
  width: 40vw;
  max-width: 240px;
  padding: 0;
  margin: 0 0 0.2rem 0.6rem;
  box-shadow: -3px 3px 0px #04c2c0;
}
.cause-explanation {
  padding: 0.1rem;
  margin: 0;
  text-align: left;
}
.consequence-explanation {
  padding: 0.1rem;
  margin: 0;
  text-align: left;
}
.cause-explanation-none {
  padding: 0.1rem;
  margin: 3rem auto;
  color: #5555;
  font-weight: 600;
  font-size: 1rem;
}
.consequence-explanation-none {
  padding: 0.1rem;
  margin: 3rem auto;
  color: #5555;
  font-weight: 600;
  font-size: 1rem;
}
.cause-explanation:first-letter {
  text-transform: capitalize;
  font-size: 130%;
}
.consequence-explanation:first-letter {
  text-transform: capitalize;
  font-size: 130%;
}
</style>
