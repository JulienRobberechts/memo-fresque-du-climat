<template>
  <div>
    <about-fr v-if="$i18n.locale === 'fr'" :version="version" />
    <about-en v-else-if="$i18n.locale === 'en'" :version="version" />
  </div>
</template>
<script>
import packageFile from '../../package.json';
import aboutFr from '@/components/lang/fr/about-fr.vue';
import AboutEn from '../components/lang/en/about-en.vue';
import meta from '@/utils/meta-vue3';

export default {
  components: { aboutFr, AboutEn },
  data() {
    return {
      version: packageFile.version,
    };
  },
  created() {
    meta.setTitle(document, this.title);
    meta.setDescription(document, this.description);
  },
  computed: {
    title() {
      return this.$t('title.about');
    },
    description() {
      return this.$t('description.about');
    },
  },
};
</script>
<style scoped>
.about {
  width: 90vw;
  max-width: 400px;
  margin: 0 auto;
}
.fdc-logo {
  width: 90vw;
  max-width: 400px;
}
p {
  /* margin: 1rem auto; */
  text-align: justify;
}
.list {
  text-align: left;
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
}
.footer {
  margin: 0.5rem 0;
  font-size: small;
}
.version {
  margin: 0;
  font-size: small;
}
.sources {
  margin: 0;
  font-size: small;
}
</style>
