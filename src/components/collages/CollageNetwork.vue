<template>
  <div class="visu" ref="visualization"></div>
  <canvas ref="can" width="600" height="600"></canvas>
</template>

<script>
// @ts-nocheck
import { DataSet, Network } from 'visjs-network';
import C2S from 'canvas2svg';

const arrayDiff = (arr1, arr2) => arr1.filter((x) => arr2.indexOf(x) === -1);

export default {
  name: 'collage',
  props: {
    nodes: Array,
    msg: String,
    edges: Array,
  },
  data: () => ({
    graphDataSet: {
      nodes: null,
      edges: null,
    },
  }),
  mounted() {
    // create a network
    const container = this.$refs.visualization;
    const can = this.$refs.can;
    console.log('can', can);

    const options = {
      autoResize: true,
      width: '100%',
      physics: {
        enabled: false,
      },
    };

    // mount data
    // From https://github.com/alexcode/vue2vis/blob/master/src/utils.js

    this.graphDataSet.edges = new DataSet(this.edges);
    // We attach deep watcher on the prop to propagate changes in the DataSet
    const callbackEdges = (value) => {
      if (Array.isArray(value)) {
        const newIds = new DataSet(value).getIds();
        const diff = arrayDiff(this.graphDataSet.edges.getIds(), newIds);
        this.graphDataSet.edges.update(value);
        this.graphDataSet.edges.remove(diff);
      }
    };

    this.$watch('edges', callbackEdges, {
      deep: true,
    });

    this.graphDataSet.nodes = new DataSet(this.nodes);
    // We attach deep watcher on the prop to propagate changes in the DataSet
    const callback = (value) => {
      if (Array.isArray(value)) {
        const newIds = new DataSet(value).getIds();
        const diff = arrayDiff(this.graphDataSet.nodes.getIds(), newIds);
        this.graphDataSet.nodes.update(value);
        this.graphDataSet.nodes.remove(diff);
      }
    };

    this.$watch('nodes', callback, {
      deep: true,
    });

    const network = new Network(container, this.graphDataSet, options);

    const self = this;
    network.on('selectNode', function (params) {
      const selectedNodes = params.nodes;
      const selectedEdges = params.edges;
      if (selectedNodes.length === 1) {
        self.$emit('node-selection', selectedNodes[0]);
      } else if (selectedEdges.length == 1) {
        self.$emit('edge-selection', selectedEdges[0]);
      } else {
        throw new Error('Unknown click event');
      }
    });

    network.on('deselectNode', function (params) {
      const newSelectedNodes = params.nodes;
      const oldSelectedNodes = params.previousSelection.nodes;
      const removed = oldSelectedNodes.filter(function (n) {
        return newSelectedNodes.indexOf(n) === -1;
      });
      self.$emit('node-deselection', removed);
    });

    network.on('doubleClick', function (params) {
      const selectedNodes = params.nodes;
      const selectedEdges = params.edges;
      if (selectedNodes.length === 1) {
        self.$emit('node-double-selection', selectedNodes[0]);
      } else if (selectedEdges.length == 1) {
        self.$emit('edge-double-selection', selectedEdges[0]);
      } else {
        console.log('db click event on empty area');
        // throw new Error('Unknown db click event');
      }
      try {
        console.log('double click');
        const sourceCanvas = self.$refs.visualization.getElementsByTagName(
          'canvas'
        )[0];
        console.log('sourceCanvas :', sourceCanvas);
        // var sourceCtx = sourceCanvas.getContext('2d');

        var destCanvas = self.$refs.can;
        // const destCtx = destCanvas.getContext('2d');
        const destCtxFabric = new C2S(destCanvas);

        //call its drawImage() function passing it the source canvas directly
        destCtxFabric.drawImage(
          sourceCanvas,
          0,
          0,
          500,
          500,
          100,
          100,
          600,
          600
        );

        // var imgInstance = new fabric.Image.fromObject(sourceCanvas, (res) => {
        //   console.log('callback res', res);
        // });
        // destCtxFabric.add(imgInstance);

        const svgFormat = destCtxFabric.getSerializedSvg();
        console.log('toSVG =', svgFormat);

        // get pixels png
        // var myImageData = ctx.getImageData(0, 0, 500, 500);
        // var buffer = document.createElement('canvas');
        // buffer.width = 500;
        // buffer.height = 500;

        // var bufferCtx = buffer.getContext('2d');
        // bufferCtx.putImageData(myImageData, 0, 0);
        // window.open(buffer.toDataURL('image/png'));
        // console.log(myImageData);
        // console.log(ctx);
      } catch (error) {
        console.log('double click ERror', error);
      }
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.visu {
  background: linear-gradient(#ffffff, #efeeee);
  /* magic number to replace */
  height: calc(100vh - 219px);
}
</style>
