<template>
  <div class="card-details-panel">
    <img class="card-image" :src="card.img.url" :title="card.shortTitle" />
    <div class="back-description">{{ card.backDescription }}</div>
    <div class="explanation" v-if="card.explanation">
      <span class="explanation-logo">
        <img src="@/assets/hand.png" />
      </span>
      {{ card.explanation }}
    </div>
    <ul class="notes" v-if="card.notes">
      <li class="note" v-for="(note, i) in card.notes" :key="i">
        <img class="bullet" src="@/assets/fresque-hand.png" alt="note" />
        {{ note }}
      </li>
    </ul>
    <ListTitle name="Cause" :items="validCauses" />
    <CauseList :causes="validCauses" />

    <ListTitle name="Conséquence" :items="validConsequences" />
    <ConsequenceList :consequences="validConsequences" />

    <h3>Autres causes possibles</h3>
    <CauseList v-if="optionalCauses.length > 0" :causes="optionalCauses" />

    <h3>Autres conséquences possible</h3>
    <ConsequenceList
      v-if="optionalConsequences.length > 0"
      :consequences="optionalConsequences"
    />

    <h3>Causes à ne pas faire</h3>
    <CauseList v-if="invalidCauses.length > 0" :causes="invalidCauses" />

    <h3>Conséquences à ne pas faire</h3>
    <ConsequenceList
      v-if="invalidConsequences.length > 0"
      :consequences="invalidConsequences"
    />
  </div>
</template>

<script>
import ListTitle from '@/components/ListTitle.vue';
import CauseList from '@/components/CauseList.vue';
import ConsequenceList from '@/components/ConsequenceList.vue';

export default {
  name: 'CardView',
  props: {
    card: Object
  },
  components: {
    ListTitle,
    CauseList,
    ConsequenceList
  },
  data() {
    return {
      validCauses: this.getValidCauses(),
      validConsequences: this.getValidConsequences(),
      optionalCauses: this.getOptionalCauses(),
      optionalConsequences: this.getOptionalConsequences(),
      invalidCauses: this.getInvalidCauses(),
      invalidConsequences: this.getInvalidConsequences()
    };
  },
  methods: {
    getValidCauses() {
      return this.card.causes.filter(cause => cause.link.status === 'valid');
    },
    getValidConsequences() {
      return this.card.consequences
        .filter(consequence => consequence.link.status === 'valid')
        .sort(c => c.status);
    },
    getOptionalCauses() {
      return this.card.causes
        .filter(cause => cause.link.status === 'optional')
        .sort((a, b) => a.from.cardNum - b.from.cardNum);
    },
    getOptionalConsequences() {
      return this.card.consequences
        .filter(consequence => consequence.link.status === 'optional')
        .sort((a, b) => a.to.cardNum - b.to.cardNum);
    },
    getInvalidCauses() {
      return this.card.causes
        .filter(cause => cause.link.status === 'invalid')
        .sort((a, b) => a.from.cardNum - b.from.cardNum);
    },
    getInvalidConsequences() {
      return this.card.consequences
        .filter(consequence => consequence.link.status === 'invalid')
        .sort((a, b) => a.to.cardNum - b.to.cardNum);
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
.explanation-logo img {
  position: relative;
  top: 0.5rem;
  width: 2rem;
}
.explanation {
  margin: 1rem 1rem;
  max-width: 600px;
  font-size: 1.2rem;
  text-align: justify;
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
  width: 1.2rem;
  margin-right: 0.3rem;
  float: left;
}
.note {
  display: inline-block;
  list-style-type: none;
  margin: 0.5rem;
  padding: 0;
  text-align: justify;
  font-size: 1.2rem;
}
</style>
