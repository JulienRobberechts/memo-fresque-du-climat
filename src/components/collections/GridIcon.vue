<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="35px"
    height="35px"
    viewBox="0 0 35 35"
    style="enable-background: new 0 0 35 35"
    xml:space="preserve"
  >
    <title id="unique-id">{{ title }}</title>
    <g>
      <rect width="16" height="16" rx="4" ry="4" />
      <rect x="19" width="16" height="16" rx="4" ry="4" />
      <rect y="19" width="16" height="16" rx="4" ry="4" />
      <rect x="19" y="19" width="16" height="16" rx="4" ry="4" />
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
