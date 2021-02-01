<template>
  <div class="a-propos">
    <h1>
      Memo la fresque du climat
    </h1>
    <p>
      Ce site a pour but de proposer au animateurs de la fresque du climat un
      accés rapides aux cartes.
    </p>
    <div>version : {{ version }}</div>
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
.a-propos {
}
</style>
