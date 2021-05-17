<template>
  <div class="toggle">
    <grid-icon
      class="icon"
      :alt="$t('all-cards.smallCards')"
      :title="$t('all-cards.smallCards')"
      :style="SvgStyleSmall"
      @click="handleClick(true)"
    />
    <lines-icon
      class="icon"
      :alt="$t('all-cards.bigCards')"
      :title="$t('all-cards.bigCards')"
      :style="SvgStyleBig"
      @click="handleClick(false)"
    />
  </div>
</template>

<script>
import GridIcon from './GridIcon.vue';
import LinesIcon from './LinesIcon.vue';
const selectedColor = '#04c2c0';
const unselectedColor = '#706f71';

export default {
  components: { GridIcon, LinesIcon },
  props: {
    smallIconSelected: Boolean,
  },
  computed: {
    SvgStyleSmall() {
      return { fill: this.smallIconSelected ? selectedColor : unselectedColor };
    },
    SvgStyleBig() {
      return { fill: this.smallIconSelected ? unselectedColor : selectedColor };
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
