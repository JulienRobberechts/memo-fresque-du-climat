<template>
  <div class="cause">
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
</template>

<script>
export default {
  name: 'Cause',
  props: {
    cause: Object
  }
};
</script>

<style scoped>
.cause {
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
.cause-explanation {
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
.cause-explanation:first-letter {
  text-transform: capitalize;
  font-size: 130%;
}
</style>
