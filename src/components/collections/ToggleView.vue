<template>
  <div class="toggle">
    <grid-icon
      class="icon"
      :alt="$t('all-cards.smallCards')"
      :title="$t('all-cards.smallCards')"
      :style="svgStyle('grid')"
      @click="handleClick('grid')"
    />
    <lines-icon
      class="icon"
      :alt="$t('all-cards.bigCards')"
      :title="$t('all-cards.bigCards')"
      :style="svgStyle('list')"
      @click="handleClick('list')"
    />
    <network-icon
      class="icon"
      :alt="$t('all-cards.networkCards')"
      :title="$t('all-cards.networkCards')"
      :style="svgStyle('network')"
      @click="handleClick('network')"
    />
  </div>
</template>

<script>
import GridIcon from './GridIcon.vue';
import LinesIcon from './LinesIcon.vue';
import NetworkIcon from './NetworkIcon.vue';

const selectedColor = '#04c2c0';
const unselectedColor = '#706f71';

export default {
  components: { GridIcon, LinesIcon, NetworkIcon },
  props: {
    selectedView: String,
  },
  methods: {
    handleClick(selection) {
      console.log('handleClick', selection);
      this.$emit('selectionChange', selection);
    },
    svgStyle(target) {
      return {
        fill: this.selectedView === target ? selectedColor : unselectedColor,
      };
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
