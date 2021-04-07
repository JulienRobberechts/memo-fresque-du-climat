<template>
  <div class="notFound">
    <h3>Oups, la page n'existe pas</h3>
    <router-link class="back-link" :to="{ name: 'RouteHome' }">
      {{ $t('menu.back') }}
    </router-link>
  </div>
</template>
<style scoped>
.notFound {
  color: red;
}
.back-link {
  color: black;
}
</style>
