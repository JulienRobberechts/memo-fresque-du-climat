<template>
  <h1>Cartes de la Fresque du climat</h1>
  <div class="cards">
    <Carte
      class="card"
      v-for="carte in cartes"
      :key="carte.id"
      :carte="carte"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Carte from '@/components/Carte.vue';
import CartesService from '@/services/CartesService';

export default {
  name: 'CarteList',
  components: {
    Carte
  },
  data() {
    return {
      cartes: null
    };
  },
  created() {
    this.cartes = CartesService.getCards();
  }
};
</script>
<style scoped>
.cards {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
}
.card {
  margin: 3px 3px;
}
</style>
