<template>
  <div class="consequence">
    <img
      class="consequence-card-image"
      :src="consequence.img.url"
      :title="consequence.shortTitle"
    />
    <p class="consequence-explanation" v-if="!!consequence.Explanation">
      {{ consequence.Explanation }}
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
  }
};
</script>

<style scoped>
.consequence {
  margin: 0.5rem 0.3rem;
}
.consequence-card-image {
  float: right;
  width: 40vw;
  max-width: 240px;
  padding: 0;
  margin: 0 0 0.2rem 0.6rem;
  box-shadow: -3px 3px 0px #04c2c0;
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
</style>
