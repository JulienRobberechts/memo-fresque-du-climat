<template>
  <div id="nav"><Menu /></div>
  <div id="content">
    <router-view />
  </div>
</template>
<script>
import Menu from '@/components/Menu';

export default {
  components: {
    Menu
  }
};
</script>
<style>
body {
  margin: 0;
}

#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  margin: 0;
  padding: 1rem 0;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 999;
}

#content {
  margin-top: 6rem;
}
</style>
