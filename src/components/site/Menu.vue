<template>
  <div class="menu">
    <div class="menu-left">
      <router-link
        class="fdc-link-logo"
        :to="{
          name: 'RouteHome',
          hash: '#top',
          params: { lang: $i18n.locale },
        }"
        ><img class="main-logo" :src="logoPath"
      /></router-link>
    </div>
    <div class="menu-right">
      <router-link
        class="fdc-link"
        :to="{ name: 'RouteHome', params: { lang: $i18n.locale } }"
        >{{ $t('menu.cards') }}</router-link
      >
      <router-link
        class="fdc-link fdc-link-info"
        :to="{ name: 'RouteAbout', params: { lang: $i18n.locale } }"
        >{{ $t('menu.info') }}</router-link
      >
      <LanguageSwitch />
    </div>
  </div>
</template>
<script>
import LanguageSwitch from '@/components/site/LanguageSwitch';

export default {
  components: {
    LanguageSwitch,
  },
  computed: {
    logoPath() {
      return require(`@/assets/lang/${this.$i18n.locale}/logo-full-${this.$i18n.locale}.png`);
    },
  },
};
</script>
<style>
.menu {
  display: flex;
  justify-content: space-between;
  margin: 0 0.7rem;
}
.menu-left {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.menu-right {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}
.main-logo {
  width: 50%;
  height: 50%;
  min-width: 7rem;
}
.fdc-link-logo {
  display: flex;
  justify-content: flex-start;
}

.fdc-link {
  margin: 0 0.3rem;
  padding: 4px 8px;
  display: inline-block;
  white-space: nowrap;
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
.fdc-link-info {
  text-transform: lowercase;
  font-style: italic;
  font-family: cursive;
}
.fdc-link:hover {
  transform: scale(1.05);
}
.fdc-link,
.fdc-link:active,
.fdc-link:focus {
  outline: none;
}

.fdc-link.router-link-exact-active {
  color: #ffffff;
  text-shadow: #04c2c0 1px 1px;

  background-color: #e90000;
}
</style>
