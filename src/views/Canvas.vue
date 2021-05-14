<template>
  <div class="banner">
    <h2>{{ $t('canvas.circle_quiz') }}</h2>
  </div>
  <h4>{{ $t('canvas.dimensions', { width: 230, height: 90 }) }}</h4>
  <img
    src="@/assets/canvas/circle-quiz.svg"
    alt="circle-quiz"
    class="canvas-img"
  />
</template>

<style>
.banner {
  color: #04c2c0;
  text-shadow: #5a5a5a 1px 1px;
  padding: 0.1rem 0;
  text-align: center;
  margin: 0 1rem;
}
.canvas-img {
  border: solid 1px #aaa;
  width: 95%;
  margin: 1rem auto;
}
</style>
