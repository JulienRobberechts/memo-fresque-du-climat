<template>
  <div class="carte-details" v-if="carte">
    <Carte :carte="carte" />
  </div>
  <router-link class="back-link" :to="{ name: 'RouteAccueil' }">
    retour à la liste des cartes
  </router-link>
</template>

<script>
import Carte from '@/components/Carte.vue';
import CartesService from '@/services/CartesService';

export default {
  name: 'CarteDetail',
  props: ['id'],
  components: {
    Carte
  },
  data() {
    return {
      carte: null
    };
  },
  created() {
    if (!this.id) {
      return;
    }
    this.carte = CartesService.getCard(this.id);
  }
};
</script>

<style scoped>
.carte-details {
  margin: 0.4rem 5rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
}
</style>
