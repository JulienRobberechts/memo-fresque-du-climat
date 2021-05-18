<template>
  <swiper
    ref="mySwiper"
    class="swiper"
    :slides-per-view="1"
    :initialSlide="initialSlide"
    @swiper="onSwiper"
    @slideNextTransitionEnd="slideNextTransitionEnd"
    @slidePrevTransitionEnd="slidePrevTransitionEnd"
  >
    <swiper-slide v-if="allowSlidePrevious">
      <div>PREV</div>
      <CardView :card="cardPrevious" />
    </swiper-slide>
    <swiper-slide>
      <div>CURR</div>
      <CardView :card="card" />
    </swiper-slide>
    <swiper-slide v-if="allowSlideNext"
      ><div>NEXT</div>
      <CardView :card="cardNext" />
    </swiper-slide>
  </swiper>
</template>

<script>
import CardView from './CardView.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import CardsService from '@/services/CardsService';

export default {
  name: 'CardViewSwiper',
  props: {
    cardNum: Number,
  },
  components: {
    Swiper,
    SwiperSlide,
    CardView,
  },
  data() {
    return {
      swiper: null,
    };
  },
  computed: {
    initialSlide() {
      return this.cardNum > 1 ? 1 : 0;
    },
    allowSlidePrevious() {
      return this.cardNum > 1;
    },
    allowSlideNext() {
      return this.cardNum < 42;
    },
    cardPrevious: function () {
      if (this.cardNum < 1)
        throw Error('cardPrevious cardNum = ' + this.cardNum);
      return this.getCard(this.cardNum - 1);
    },
    card: function () {
      return this.getCard(this.cardNum);
    },
    cardNext: function () {
      if (this.cardNum > 42) throw Error('cardNext cardNum = ' + this.cardNum);
      return this.getCard(this.cardNum + 1);
    },
  },
  watch: {
    cardNum: function () {
      this.swiper.slideTo(this.initialSlide, 0);
    },
  },
  methods: {
    getCard: function (index) {
      if (this.cardNum < 1 || this.cardNum > 42)
        throw Error('getCard cardNum = ' + this.cardNum);
      return CardsService.getCardDetails(index, this.$i18n.locale);
    },
    onSwiper(swiper) {
      this.swiper = swiper;
    },
    slideNextTransitionEnd(swiper) {
      const increment =
        this.initialSlide === 1 ? swiper.activeIndex - 1 : swiper.activeIndex;
      this.$router.push({
        name: 'RouteCardDetails',
        params: { cardNum: this.cardNum + increment },
      });
    },
    slidePrevTransitionEnd(swiper) {
      const increment =
        this.initialSlide === 1 ? swiper.activeIndex - 1 : swiper.activeIndex;
      this.$router.push({
        name: 'RouteCardDetails',
        params: { cardNum: this.cardNum + increment },
      });
    },
  },
};
</script>

<style scoped>
.swiper {
  margin: 0 auto;
}
</style>
