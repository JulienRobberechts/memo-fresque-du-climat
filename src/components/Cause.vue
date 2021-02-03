<template>
  <div class="cause">
    <router-link
      @click="justForHash"
      :to="{
        name: 'RouteCardDetails',
        params: { cardNum: cause.from.cardNum }
      }"
    >
      <img
        class="cause-card-image"
        :class="getLinkStyle('cause-card-image-', cause.link.status)"
        :src="cause.from.img.url"
        :title="cause.from.shortTitle"
    /></router-link>
    <div class="arrow-anchor">
      <span class="arrow" :class="getLinkStyle('arrow-', cause.link.status)">
        &#10145;
      </span>
    </div>
    <p class="cause-explanation" v-if="!!cause.link.Explanation">
      {{ cause.link.Explanation }}
    </p>
    <p class="cause-explanation" v-else>
      <img
        class="cause-card-image-original"
        :src="cause.to.img.url"
        :title="cause.to.shortTitle"
      />
    </p>
  </div>
</template>

<script>
export default {
  name: 'Cause',
  props: {
    cause: Object
  },
  methods: {
    getLinkStyle(classPrefix, linkStatus) {
      return {
        [classPrefix + 'valid']: linkStatus === 'valid',
        [classPrefix + 'optional']: linkStatus === 'optional',
        [classPrefix + 'invalid']: linkStatus === 'invalid'
      };
    },
    justForHash() {
      console.log('justForHash');
    }
  }
};
</script>

<style scoped>
.cause {
  margin: 0.5rem 0.3rem;
}

.cause-card-image {
  float: left;
  width: 30vw;
  max-width: 240px;
  padding: 0;
  margin: 0 2.8rem 0.2rem 0;
  box-shadow: 5px 5px 0px #706f71;
  z-index: 3;
}
.cause-card-image-original {
  width: 20vw;
  max-width: 240px;
  padding: 0;
  margin: 0;
  box-shadow: 2px 2px 0px #706f71;
  z-index: 3;
  opacity: 0.5;
}
.cause-card-image-valid {
  box-shadow: 5px 5px 0px #04c2c0;
}
.cause-card-image-optional {
  box-shadow: 5px 5px 0px rgb(255, 221, 103);
}
.cause-card-image-invalid {
  box-shadow: 5px 5px 0px #e90000;
}
.cause-explanation {
  padding: 0.1rem;
  margin: 0;
  text-align: left;
}

.cause-explanation:first-letter {
  text-transform: capitalize;
  font-size: 130%;
}
.arrow-anchor {
  position: relative;
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
  transform: scaleX(0.7);
}
.arrow-valid {
  color: #04c2c0;
}
.arrow-optional {
  color: rgb(255, 221, 103);
}
.arrow-invalid {
  color: #e90000;
}
</style>
