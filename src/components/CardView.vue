<template>
  <div class="card-details-panel">
    <img class="card-image" :src="card.img.url" :title="card.shortTitle" />
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
</style>
