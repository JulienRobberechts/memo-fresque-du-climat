<template>
  <div class="about">
    <img class="fdc-logo" src="@/assets/fresque-full.png" />
    <p>
      Le memo de la fresque du climat a pour but de proposer aux animateurs un
      accés rapide aux cartes du jeu.
    </p>
    <p>version : {{ version }}</p>
  </div>
</template>
<script>
// import packageFile from '../../package.json';

export default {
  data() {
    return {
      version: '0.1.0' // packageFile.version
    };
  }
};
</script>
<style scoped>
.fdc-logo {
  width: 90vw;
}
.about {
  margin: 0 0.5rem;
}
p {
  margin: 1rem 1rem;
}
</style>
