<template>
  <svg
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns="http://www.w3.org/2000/svg"
    id="svg8"
    version="1.1"
    viewBox="0 0 9.2604167 9.2604167"
    height="35"
    width="35"
  >
    <title id="unique-id">{{ title }}</title>
    <defs id="defs2">
      <marker
        style="overflow: visible"
        id="Arrow2Lend"
        refX="0.0"
        refY="0.0"
        orient="auto"
      >
        <path
          transform="scale(1.1) rotate(180) translate(1,0)"
          d="M 8.7185878,4.0337352 L -2.2072895,0.016013256 L 8.7185884,-4.0017078 C 6.9730900,-1.6296469 6.9831476,1.6157441 8.7185878,4.0337352 z "
          style="fill-rule: evenodd; stroke-linejoin: round"
          id="path1406"
        />
      </marker>
      <marker
        style="overflow: visible"
        id="DotL"
        refX="0.0"
        refY="0.0"
        orient="auto"
      >
        <path
          transform="scale(0.8) translate(7.4, 1)"
          d="M -2.5,-1.0 C -2.5,1.7600000 -4.7400000,4.0 -7.5,4.0 C -10.260000,4.0 -12.5,1.7600000 -12.5,-1.0 C -12.5,-3.7600000 -10.260000,-6.0 -7.5,-6.0 C -4.7400000,-6.0 -2.5,-3.7600000 -2.5,-1.0 z "
          id="path1446"
        />
      </marker>
    </defs>
    <g transform="translate(0,-287.73957)" id="layer1">
      <rect
        ry="0.39101124"
        y="288.21204"
        x="0.33072907"
        height="2.7403274"
        width="4.8428197"
        id="card-1"
        style="
          opacity: 1;
          fill-opacity: 1;
          fill-rule: nonzero;
          stroke: none;
          stroke-width: 21.65471077;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 4;
          stroke-dasharray: none;
          stroke-dashoffset: 0;
          stroke-opacity: 1;
          paint-order: stroke markers fill;
        "
      />
      <path
        id="link"
        d="m 5.1026785,289.60582 c 1.0016609,0.80837 1.5102215,1.11304 1.9607516,3.87426"
        style="
          fill: none;
          fill-rule: evenodd;
          stroke: #000000;
          stroke-width: 0.2;
          stroke-linecap: butt;
          stroke-linejoin: miter;
          stroke-dasharray: none;
          marker-end: url(#Arrow2Lend);
        "
      />
      <rect
        ry="0.39101124"
        y="293.62183"
        x="4.122303"
        height="2.7403274"
        width="4.8428197"
        id="card-2"
        style="
          opacity: 1;
          fill-opacity: 1;
          fill-rule: nonzero;
          stroke: none;
          stroke-width: 21.65471077;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 4;
          stroke-dasharray: none;
          stroke-dashoffset: 0;
          stroke-opacity: 1;
          paint-order: stroke markers fill;
        "
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>
