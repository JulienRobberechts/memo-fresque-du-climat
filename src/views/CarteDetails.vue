<template>
  <div class="carte-details" v-if="carte">
    <h1>{{ carte.title }}</h1>
    <span>@ {{ carte.time }} on {{ carte.date }}</span>
  </div>
  <router-link class="back-link" :to="{ name: 'RouteAccueil' }">
    retour à la liste des cartes
  </router-link>
</template>

<script>
import CartesService from '@/services/CartesService';

export default {
  name: 'CarteDetail',
  props: ['id'],
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
  border: 1px solid #000000;
}
</style>
