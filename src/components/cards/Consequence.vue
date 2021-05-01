<template>
  <div class="consequenceParent">
    <div class="consequence">
      <router-link
        :to="{
          name: 'RouteCardDetails',
          params: { cardNum: consequence.to.cardNum },
        }"
      >
        <picture>
          <source
            :srcset="imgPathWebpTo"
            sizes="(max-width:800px) 30vw, 240px"
            type="image/webp"
          />
          <img
            class="consequence-card-image"
            :class="
              getLinkStyle('consequence-card-image-', consequence.link.status)
            "
            :src="imgPathDefaultTo"
            :alt="consequence.to.title"
            :title="consequence.to.title"
          />
        </picture>
      </router-link>
      <div class="arrow-anchor">
        <span
          class="arrow"
          :class="getLinkStyle('arrow-', consequence.link.status)"
        >
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="44.4815px"
            height="44.4815px"
            viewBox="0 0 444.815 444.815"
            xml:space="preserve"
          >
            <g>
              <path
                d="M421.976,196.712L236.111,10.848C228.884,3.615,220.219,0,210.131,0c-9.9,0-18.464,3.615-25.697,10.848L163.023,32.26
			c-7.234,6.853-10.85,15.418-10.85,25.697c0,10.277,3.616,18.842,10.85,25.697l83.653,83.937H45.677
			c-9.895,0-17.937,3.568-24.123,10.707s-9.279,15.752-9.279,25.837v36.546c0,10.088,3.094,18.698,9.279,25.837
			s14.228,10.704,24.123,10.704h200.995L163.02,360.88c-7.234,7.228-10.85,15.89-10.85,25.981c0,10.089,3.616,18.75,10.85,25.978
			l21.411,21.412c7.426,7.043,15.99,10.564,25.697,10.564c9.899,0,18.562-3.521,25.981-10.564l185.864-185.864
			c7.043-7.043,10.567-15.701,10.567-25.981C432.54,211.939,429.016,203.37,421.976,196.712z"
              />
            </g>
          </svg>
        </span>
      </div>
      <p class="consequence-origin">
        <picture>
          <source
            :srcset="imgPathWebpFrom"
            sizes="(max-width:800px) 20vw, 160px"
            type="image/webp"
          />
          <img
            class="consequence-card-image-original"
            :src="imgPathDefaultFrom"
            :alt="consequence.from.title"
            :title="consequence.from.title"
          />
        </picture>
      </p>
    </div>
  </div>
  <div class="consequence-explanation" v-if="!!consequence.link.explanation">
    {{ consequence.link.explanation }}
    <hr class="item-separator" />
  </div>
</template>

<script>
export default {
  name: 'Consequence',
  props: {
    consequence: Object,
  },
  computed: {
    imgPathDefaultFrom() {
      return `/img/cards/${this.$i18n.locale}/default/${this.consequence.from.cardNum}.png`;
    },
    imgPathDefaultTo() {
      return `/img/cards/${this.$i18n.locale}/default/${this.consequence.to.cardNum}.png`;
    },
    imgPathWebpFrom() {
      return (
        `/img/cards/${this.$i18n.locale}/80/${this.consequence.from.cardNum}.webp 80w,` +
        `/img/cards/${this.$i18n.locale}/200/${this.consequence.from.cardNum}.webp 200w,` +
        `/img/cards/${this.$i18n.locale}/400/${this.consequence.from.cardNum}.webp 400w`
      );
    },
    imgPathWebpTo() {
      return (
        `/img/cards/${this.$i18n.locale}/80/${this.consequence.to.cardNum}.webp 80w,` +
        `/img/cards/${this.$i18n.locale}/200/${this.consequence.to.cardNum}.webp 200w,` +
        `/img/cards/${this.$i18n.locale}/400/${this.consequence.to.cardNum}.webp 400w`
      );
    },
  },
  methods: {
    getLinkStyle(classPrefix, linkStatus) {
      return {
        [classPrefix + 'valid']: linkStatus === 'valid',
        [classPrefix + 'optional']: linkStatus === 'optional',
        [classPrefix + 'invalid']: linkStatus === 'invalid',
      };
    },
  },
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
.consequence-card-image:hover {
  transform: scale(1.03);
  max-width: 248px;
}
.consequence-card-image-original {
  float: right;
  width: 20vw;
  max-width: 160px;
  padding: 0;
  margin: 0;
  box-shadow: -2px 2px 0px #706f71;
  opacity: 0.5;
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
.consequence-origin {
  padding: 0.1rem;
  margin: 0;
}
.consequence-explanation {
  padding: 0.1rem;
  margin: 0.7rem 0;
  text-align: justify;
}
.consequence-explanation:first-letter {
  text-transform: capitalize;
  font-size: 130%;
}
.item-separator {
  margin: 1rem auto;
  width: 30%;
  color: #04c2c0;
  box-shadow: 3px 3px 0px #e90000;
}
.arrow-anchor {
  position: relative;
  width: 5px;
  height: 5px;
  float: right;
}
.arrow svg {
  position: absolute;
  z-index: 3;
  transform: translate(-50%, -50%) scale(0.8) translate(50%, 50%);
  fill: #706f71;
}
.arrow-valid svg {
  fill: #04c2c0;
}
.arrow-optional svg {
  fill: rgb(255, 221, 103);
}
.arrow-invalid svg {
  fill: #e90000;
}
</style>
