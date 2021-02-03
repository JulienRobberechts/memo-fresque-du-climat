<template>
  <div class="cause">
    <img
      class="cause-card-image"
      :src="cause.img.url"
      :title="cause.shortTitle"
    />
    <div class="arrow-anchor">
      <span class="arrow">
        &#10145;
      </span>
    </div>
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
  margin: 0 2rem 0.2rem 0;
  box-shadow: 3px 3px 0px #706f71;
  z-index: 3;
}
.cause-card-image-valid {
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
.arrow-anchor {
  position: relative;
  width: 5px;
  height: 5px;
  float: left;
}
.arrow {
  margin: 0;
  padding: 0;
  float: left;
  color: #706f71;

  font-size: calc(3.6rem + 0vw);
  position: absolute;
  top: -1rem;
  left: -2.9rem;
  z-index: -1;
}
.arrow-valid {
  color: #04c2c0;
}
</style>
