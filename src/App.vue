<template>
  <div id="nav">
    <router-link :to="{ name: 'RouteHome' }">Cartes</router-link> |
    <router-link :to="{ name: 'RouteAbout' }">A propos</router-link>
  </div>
  <div id="content">
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#content {
  margin-top: 5rem;
}

h4 {
  font-size: 20px;
}
</style>
