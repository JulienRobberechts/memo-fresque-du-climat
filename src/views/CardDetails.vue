<template>
  <div class="card-details" v-if="card">
    <CardView :card="card" />
  </div>
  <router-link class="fdc-link withSpace" :to="{ name: 'RouteHome' }">
    &larrhk; {{ $t('back') }}
  </router-link>
</template>

<script>
import CardView from '@/components/CardView.vue';
import CardsService from '@/services/CardsService';

export default {
  name: 'CardDetails',
  props: ['cardNum'],
  components: {
    CardView,
  },
  computed: {
    card: function () {
      return CardsService.getCardDetails(this.cardNum, this.$i18n.locale);
    },
  },
};
</script>

<style scoped>
.card-details {
  display: flex;
  justify-content: center;
}
.withSpace {
  margin: 2rem;
}
</style>
