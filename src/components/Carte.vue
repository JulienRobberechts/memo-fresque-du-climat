<template>
  <router-link
    class="carte-link"
    :to="{ name: 'RouteCarteDetails', params: { id: carte.id } }"
  >
    <div class="carte-card">
      <span>@ {{ carte.time }} on {{ carte.date }}</span>
      <h4>{{ carte.title }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CarteCard',
  props: {
    carte: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carte-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.carte-card:hover {
  transform: scale(1.03);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.carte-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
