<template>
  <router-link @click="routeToAnchor" :to="to">
    <slot />
  </router-link>
</template>

<script>
export default {
  name: 'vue-anchor-router-link',
  props: {
    to: Object,
    scrollOptions: {
      type: [Object, Number],
      default: 1
    }
  },
  data() {
    return {
      previousRoute: this.$route
    };
  },
  methods: {
    routeToAnchor() {
      // Scrolls manually to anchor if user clicks an routing link but the route has not changed.
      if (this.$route.fullPath === this.previousRoute.fullPath) {
        console.log('scroll', this.to.hash);
        this.$scrollTo(this.to.hash, this.scrollOptions);
      }
    }
  },
  watch: {
    $route: function(newRoute) {
      this.previousRoute = newRoute;
    }
  },
  mounted() {
    if (this.$route.hash) {
      console.log('scroll', this.to.hash);
      // this.$scrollTo(this.$route.hash, this.scrollOptions);
    }
  }
};
</script>

<style></style>
