<template>
  <div class="card-details">
    <div class="card-details-panel" v-if="card">
      <CardTitle :card="card" />
      <CardMenu :card="card" />
      <CardFront :card="card" />
      <CardBack
        :description="card.backDescription"
        :cardNumber="card.cardNum"
        :setNumber="card.cardSet"
      />
      <CardExplanation :card="card" />
      <CardMenu :card="card" />
      <CardLinks :card="card" />
      <CardMenu :card="card" />
      <router-link
        class="fdc-link withSpace"
        :to="{ name: 'RouteHome', params: { lang: $i18n.locale } }"
      >
        &larrhk; {{ $t('menu.back') }}
      </router-link>
    </div>
  </div>
</template>

<script>
import CardTitle from './CardTitle.vue';
import CardMenu from './CardMenu.vue';
import CardBack from './CardBack.vue';
import CardFront from './CardFront.vue';
import CardExplanation from './CardExplanation.vue';
import CardLinks from './CardLinks.vue';

export default {
  name: 'CardView',
  props: {
    card: Object,
  },
  components: {
    CardTitle,
    CardMenu,
    CardFront,
    CardBack,
    CardExplanation,
    CardLinks,
  },
};
</script>

<style scoped>
.card-details {
  display: flex;
  justify-content: center;
}
.card-details-panel {
  width: 95vw;
  max-width: 600px;
  padding: 0;
  margin: 3px;
}
.withSpace {
  margin: 2rem;
}
</style>
