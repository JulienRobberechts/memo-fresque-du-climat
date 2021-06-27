<template>
  <div class="menu-card">
    <div>
      <router-link
        :to="{
          name: 'RouteCardDetails',
          params: { cardNum: card.cardNum - 1, lang: $i18n.locale },
        }"
        v-if="card.cardNum > 1"
      >
        <img
          class="icon"
          src="@/assets/icons/left.svg"
          :title="$t('card.previous')"
          :alt="$t('card.previous')"
        />
      </router-link>
    </div>
    <toggle-view />
    <div>
      <router-link
        :to="{
          name: 'RouteCardDetails',
          params: { cardNum: card.cardNum + 1, lang: $i18n.locale },
        }"
        v-if="card.cardNum < 42"
      >
        <img
          class="icon"
          src="@/assets/icons/right.svg"
          :title="$t('card.next')"
          :alt="$t('card.next')"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import ToggleView from '@/components/collections/ToggleView.vue';

export default {
  name: 'CardMenu',
  props: {
    card: Object,
  },
  components: { ToggleView },
};
</script>

<style scoped>
.menu-card {
  display: flex;
  justify-content: space-between;
}
.icon {
  width: 25px;
  margin: 2px;
}
.icon:hover {
  transform: scale(1.08);
}
</style>
