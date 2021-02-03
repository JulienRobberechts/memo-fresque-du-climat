<template>
  <div class="consequence">
    <img
      class="consequence-card-image"
      :class="getLinkStyle('consequence-card-image-', consequence.link.status)"
      :src="consequence.to.img.url"
      :title="consequence.to.shortTitle"
    />
    <div class="arrow-anchor">
      <span
        class="arrow"
        :class="getLinkStyle('arrow-', consequence.link.status)"
      >
        &#10145;
      </span>
    </div>
    <p class="consequence-explanation" v-if="!!consequence.link.Explanation">
      {{ consequence.link.Explanation }}
    </p>
    <p class="consequence-explanation-none" v-else>
      sans explication
    </p>
  </div>
</template>

<script>
export default {
  name: 'Consequence',
  props: {
    consequence: Object
  },
  methods: {
    getLinkStyle(classPrefix, linkStatus) {
      return {
        [classPrefix + 'valid']: linkStatus === 'valid',
        [classPrefix + 'optional']: linkStatus === 'optional',
        [classPrefix + 'invalid']: linkStatus === 'invalid'
      };
    }
  }
};
</script>

<style scoped>
.consequence {
  margin: 0.5rem 0.3rem;
}
.consequence-card-image {
  float: right;
  width: 30vw;
  max-width: 240px;
  padding: 0;
  margin: 0 0 0.2rem 2.8rem;
  box-shadow: -5px 5px 0px #706f71;
}
.consequence-card-image-valid {
  box-shadow: -5px 5px 0px #04c2c0;
}
.consequence-card-image-optional {
  box-shadow: -5px 5px 0px rgb(255, 221, 103);
}
.consequence-card-image-invalid {
  box-shadow: -5px 5px 0px #e90000;
}
.consequence-explanation {
  padding: 0.1rem;
  margin: 0;
  text-align: left;
}
.consequence-explanation-none {
  padding: 0.1rem;
  margin: 3rem auto;
  color: #5555;
  font-weight: 600;
  font-size: 1rem;
}
.consequence-explanation:first-letter {
  text-transform: capitalize;
  font-size: 130%;
}

.arrow-anchor {
  position: relative;
  width: 5px;
  height: 5px;
  float: right;
}
.arrow {
  margin: 0;
  padding: 0;
  float: left;
  color: #706f71;

  font-size: calc(3.6rem + 0vw);
  position: absolute;
  top: -1rem;
  left: -0rem;
  z-index: 3;
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
