<template>
  <canvas ref="can" width="700" height="700"></canvas>
</template>

<script>
import { fabric } from 'fabric';

export default {
  mounted() {
    const can = this.$refs.can;
    const canvas = new fabric.Canvas(can);
    const rect = new fabric.Rect({
      fill: 'red',
      width: 200,
      height: 200,
    });
    canvas.add(rect);
    const svgFormat = canvas.toSVG();
    console.log('toSVG =', svgFormat);
  },
};
</script>
