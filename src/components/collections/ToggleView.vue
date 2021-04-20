<template>
  <div class="toggle">
    <grid-icon
      class="icon"
      alt="small cards"
      title="small cards"
      :color="colorSmall"
      @click="handleClick(true)"
    />
    <lines-icon
      class="icon"
      alt="big cards"
      title="big cards"
      :color="colorBig"
      @click="handleClick(false)"
    />
  </div>
</template>

<script>
import GridIcon from './GridIcon.vue';
import LinesIcon from './LinesIcon.vue';
export default {
  components: { GridIcon, LinesIcon },
  props: {
    smallIconSelected: Boolean,
  },
  computed: {
    colorSmall() {
      // console.log('this.smallIconSelected', this.smallIconSelected);
      return this.smallIconSelected ? '#04c2c0' : '#706f71';
    },
    colorBig() {
      return this.smallIconSelected ? '#706f71' : '#04c2c0';
    },
  },
  methods: {
    handleClick(selection) {
      console.log('handleClick', selection);
      this.$emit('selectionChange', selection);
    },
  },
};
</script>

<style scoped>
.icon {
  min-width: 25px;
  min-height: 25px;
  width: min(3vw, 35px);
  height: min(3vw, 35px);
  padding: 5px;
  border-radius: 5px;
}
.toggle .icon {
  border: 2px solid #fff;
}
.toggle .icon:hover {
  border: 2px solid #04c2c0;
}
</style>
