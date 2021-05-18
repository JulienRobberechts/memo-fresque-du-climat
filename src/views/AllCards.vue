<template>
  <h1>{{ $t('all-cards.title') }}</h1>
  <div
    class="menu"
    :class="{
      maxWidth450: view === 'list',
      maxWidth1400: view === 'grid',
    }"
  >
    <toggle-view :selectedView="selectedView" />
  </div>
  <CardsList v-if="view === 'list'" />
  <CollageLayout
    v-else-if="view === 'network'"
    layoutName="full"
    :showBanner1="false"
  />
  <CardsMenu v-else />
</template>

<script>
import ToggleView from '@/components/collections/ToggleView.vue';
import CardsMenu from '@/components/collections/menu/CardsMenu.vue';
import CardsList from '@/components/collections/list/CardsList.vue';
import CollageLayout from '@/components/collages/CollageLayout.vue';

import meta from '@/utils/meta-vue3';

export default {
  name: 'AllCards',
  components: {
    ToggleView,
    CardsMenu,
    CardsList,
    CollageLayout,
  },
  props: {
    view: {
      type: String,
      required: false,
      default: 'grid',
      validator: function (value) {
        // La valeur passée doit être l'une de ces chaines de caractères
        return ['grid', 'list', 'network'].indexOf(value) !== -1;
      },
    },
  },
  created() {
    meta.setTitle(document, this.title);
    meta.setDescription(document, this.description);
  },
  computed: {
    title() {
      return this.$t('title.all-cards');
    },
    description() {
      return this.$t('description.all-cards');
    },
    selectedView() {
      if (['grid', 'list', 'network'].includes(this.view)) return this.view;
      return 'grid';
    },
  },
};
</script>
<style scoped>
h1 {
  font-size: 1.4rem;
  line-height: 1.4em;
  margin: 0.6rem auto;
}
.menu {
  display: flex;
  flex-direction: row-reverse;
  width: 95vw;
  margin: 0.2rem auto;
}

.maxWidth450 {
  max-width: 450px;
}

.maxWidth1400 {
  max-width: 1400px;
}
</style>
