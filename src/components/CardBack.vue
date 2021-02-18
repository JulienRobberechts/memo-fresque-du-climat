<template>
  <div class="back">
    <div class="header">
      <div class="back-card-num">
        <img class="card-num-logo" src="@/assets/cards.svg" />
        <div class="card-num-digit">{{ cardNumber }}</div>
      </div>
      <div class="back-logo">
        <img class="back-logo-img" src="@/assets/fresque-full.png" />
      </div>
    </div>
    <div class="back-description">
      {{ description }}
    </div>
    <div class="footer">
      <div class="back-set-num" :class="`set${setNumber}`">
        Lot {{ setNumber }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardBack',
  props: {
    description: {
      type: String,
      required: true
    },
    cardNumber: {
      type: Number,
      required: true
    },
    setNumber: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
.back {
  margin: 0.8rem 0;
  box-shadow: 1px 1px 4px #706f71;
  width: 95vw;
  max-width: 594px;
  height: 63.33vw;
  max-height: 403px;
  display: flex;
  flex-direction: column;
  align-content: stretch;
}
.header {
  display: flex;
  justify-content: space-between;
}
.footer {
  display: flex;
  margin: 0 0.7rem;
}
.back-logo {
  margin: 0.8rem;
}

.back-logo-img {
  width: calc(1rem + 21vw);
  max-width: 9rem;
}

.back-card-num {
  width: 14%;
  margin-top: 1%;
  margin-left: 3%;
  position: relative;
  text-align: center;
}

.card-num-logo {
  width: 100%;
}

.card-num-digit {
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 600;
  font-size: 2rem;
  font-family: 'Avenir Next', 'HelveticaNeue', 'Helvetica Neue', 'Helvetica',
    Arial, sans-serif;
}
.back-set-num {
  bottom: 0px;
  margin-left: 80%;
  width: 20vw;
  max-width: 100px;
  background-color: #e90000;
  color: #ffffff;
  padding: min(calc(0.3rem + 1vw), 0.7rem);
  font-size: min(calc(0.3rem + 3vw), 1.5rem);
}

.set1 {
  margin-left: 0%;
}
.set2 {
  margin-left: 20%;
}
.set3 {
  margin-left: 40%;
}
.set4 {
  margin-left: 60%;
}
.set5 {
  margin-left: 80%;
}

.back-description {
  padding: 0rem 1rem;
  font-size: min(calc(0.4rem + 3.5vw), 1.625rem);
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
