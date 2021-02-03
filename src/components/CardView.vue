<template>
  <div class="card-details-panel">
    <img class="card-image" :src="card.img.url" :title="card.shortTitle" />
    <div class="back-description">{{ card.backDescription }}</div>
    <div class="explanation" v-if="card.explanation">
      <span class="explanation-logo">
        &#9755;
      </span>
      {{ card.explanation }}
    </div>
    <ul class="notes" v-if="card.notes">
      <li class="note" v-for="(note, i) in card.notes" :key="i">
        <img class="bullet" src="@/assets/fresque-hand.png" alt="note" />
        {{ note }}
      </li>
    </ul>
    <CauseList :causes="validCauses()" />
    <ConsequenceList :consequences="validConsequences()" />
    <CauseList
      v-if="otherCauses().length > 0"
      :causes="otherCauses()"
      title="autre cause"
    />
    <ConsequenceList
      v-if="otherConsequences().length > 0"
      :consequences="otherConsequences()"
      title="autre conséquence"
    />
  </div>
</template>

<script>
import CauseList from '@/components/CauseList.vue';
import ConsequenceList from '@/components/ConsequenceList.vue';

export default {
  name: 'CardView',
  props: {
    card: Object
  },
  components: {
    CauseList,
    ConsequenceList
  },
  methods: {
    validCauses() {
      return this.card.causes.filter(cause => cause.link.status === 'valid');
    },
    validConsequences() {
      return this.card.consequences
        .filter(consequence => consequence.link.status === 'valid')
        .sort(c => c.status);
    },
    otherCauses() {
      return this.card.causes
        .filter(cause => cause.link.status !== 'valid')
        .sort((a, b) => a.from.cardNum - b.from.cardNum)
        .sort(a => (a.link.status === 'optional' ? -1 : 1)); // to fix
    },
    otherConsequences() {
      return this.card.consequences
        .filter(consequence => consequence.link.status !== 'valid')
        .sort((a, b) => a.to.cardNum - b.to.cardNum)
        .sort(a => (a.link.status === 'optional' ? -1 : 1)); // to fix
    }
  }
};
</script>

<style scoped>
.card-details-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card-image {
  width: 95vw;
  max-width: 600px;
  padding: 0;
  margin: 3px;
}
.back-description {
  margin: 2rem;
  font-size: 1rem;
}
.explanation-logo {
  font-size: 3rem;
  position: relative;
  top: 0.8rem;
  left: 0.3rem;
  color: #04c2c0;
  text-shadow: #e90000 2px 2px;
}
.explanation {
  margin: 1rem 1rem;
  max-width: 600px;
  font-size: 1.2rem;
}
.notes {
  margin: 0 auto;
  padding: 1rem;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.bullet {
  width: 1.5rem;
  margin-right: 0.3rem;
  float: left;
}
.note {
  display: inline-block;
  list-style-type: none;
  margin: 0.5rem;
  padding: 0;
  text-align: left;
  font-size: 1.2rem;
}
</style>
