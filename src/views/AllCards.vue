<template>
  <h1>{{ $t('all-cards.title') }}</h1>
  <div
    class="menu"
    :class="{
      maxWidth450: selectedView === 'list',
      maxWidth1400: selectedView === 'grid',
    }"
  >
    <toggle-view
      :selectedView="selectedView"
      @selectionChange="selectionChange"
    />
  </div>
  <CardsMenu v-if="selectedView === 'grid'" />
  <CardsList v-if="selectedView === 'list'" />
  <div v-if="selectedView === 'network'">Network</div>
</template>

<script>
import ToggleView from '../components/collections/ToggleView.vue';
import CardsMenu from '@/components/collections/menu/CardsMenu.vue';
import CardsList from '@/components/collections/list/CardsList.vue';
import meta from '@/utils/meta-vue3';

export default {
  name: 'AllCards',
  components: {
    ToggleView,
    CardsMenu,
    CardsList,
  },
  data() {
    return {
      cards: null,
      selectedView: 'grid',
    };
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
  },
  methods: {
    selectionChange(selection) {
      console.log('selectionChange', selection);
      this.selectedView = selection;
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
