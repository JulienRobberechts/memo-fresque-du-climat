<template>
  <h1>{{ $t('all-cards') }}</h1>
  <CardsList />
</template>

<script>
// @ is an alias to /src
import CardsList from '@/components/collections/CardsList.vue';
import meta from '@/utils/meta-vue3';

export default {
  name: 'AllCards',
  components: {
    CardsList,
  },
  data() {
    return {
      cards: null,
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
};
</script>
<style scoped>
h1 {
  font-size: 1.4rem;
  line-height: 1.4em;
}
</style>
