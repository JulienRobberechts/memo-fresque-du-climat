<template>
  <div class="anchorInList" :id="'carte-' + card.cardNum"></div>
  <router-link
    :to="{
      name: 'RouteCardDetails',
      params: { cardNum: card.cardNum, lang: $i18n.locale },
    }"
  >
    <picture>
      <source
        :srcset="imgPathWebp"
        sizes="(max-width:400px) 95vw, 450px"
        type="image/webp"
      />
      <img
        class="card-image"
        :src="imgPathDefault"
        :alt="card.title"
        :title="card.title"
      />
    </picture>
  </router-link>
</template>

<script>
export default {
  name: 'CardListItem',
  props: {
    card: Object,
  },
  computed: {
    imgPathDefault() {
      return `/img/cards/${this.$i18n.locale}/default/${this.card.cardNum}.png`;
    },
    imgPathWebp() {
      return (
        `/img/cards/${this.$i18n.locale}/80/${this.card.cardNum}.webp 80w,` +
        `/img/cards/${this.$i18n.locale}/200/${this.card.cardNum}.webp 200w,` +
        `/img/cards/${this.$i18n.locale}/400/${this.card.cardNum}.webp 400w`
      );
    },
  },
};
</script>

<style scoped>
.anchorInList {
  position: relative;
  top: -8rem;
}

.card-image {
  width: 95vw;
  max-width: 450px;
  padding: 0;
  cursor: pointer;
  margin: 3px;
  box-shadow: 1px 1px 4px #706f71;
}
.card-image:hover {
  transform: scale(1.02);
  box-shadow: 3px 3px 7px #706f71;
}
</style>
