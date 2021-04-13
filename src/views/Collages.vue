<template>
  <div><CollageLayout layoutName="set2" /></div>
</template>

<script>
import CollageLayout from '@/components/collage/CollageLayout.vue';
import meta from '@/utils/meta-vue3';

export default {
  name: 'CollagesView',
  components: {
    CollageLayout,
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

<style></style>
