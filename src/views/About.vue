<template>
  <div class="about">
    <div class="logo">
      <div class="memo">
        Memo
      </div>
      <img class="fdc-logo" src="@/assets/fresque-full.png" />
    </div>
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
.logo {
  position: relative;
  width: 90%;
  margin: 0 auto 3rem auto;
}
.memo {
  color: #04c2c0;
  text-transform: uppercase;
  /* font-family: 'Arial Black', Gadget, sans-serif; */
  font-family: Courier, monospace;
  font-weight: 700;
  font-size: 3.5rem;
  transform: rotate(-0.03turn) translate(-4.5rem, 1.5rem);
  text-shadow: #e90000 1px 1px;
  position: relative;
  top: 0px;
}
.fdc-logo {
  position: relative;
  top: 0px;
}
.about {
  margin: 0 0.5rem;
  color: grey;
}
p {
  margin: 1rem 3rem;
}
</style>
