<template>
  <div id="menu">
    <router-link class="fdc-link" :to="{ name: 'RouteHome' }"
      >Cartes</router-link
    >
    <router-link class="fdc-link" :to="{ name: 'RouteAbout' }"
      >&#8505;</router-link
    >
  </div>
</template>
<style>
.fdc-link {
  margin: 0 0.3rem;
  padding: 4px 8px;
  display: inline-block;

  text-decoration: none;
  font-weight: 600;
  font-size: 1em;
  color: #04c2c0;
  text-transform: uppercase;
  text-shadow: #e90000 1px 1px;

  background-color: #ffffff;

  border-radius: 3px;
  border: 1px solid #71ced0;
  box-shadow: 3px 3px 0px #04c2c0;
}

.fdc-link:hover {
  transform: scale(1.05);
}

.fdc-link.router-link-exact-active {
  color: #ffffff;
  text-shadow: #04c2c0 1px 1px;

  background-color: #e90000;
}
</style>
