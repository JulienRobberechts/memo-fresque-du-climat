<template>
  <ListTitle
    :nameSingular="$t('card.valid-cause')"
    :namePlural="$t('card.valid-causes')"
    badgeStatus="valid"
    :items="validCauses"
  />
  <CauseList :causes="validCauses" />

  <ListTitle
    :nameSingular="$t('card.valid-consequence')"
    :namePlural="$t('card.valid-consequences')"
    badgeStatus="valid"
    :items="validConsequences"
  />
  <ConsequenceList :consequences="validConsequences" />

  <ListTitle
    :nameSingular="$t('card.optional-cause')"
    :namePlural="$t('card.optional-causes')"
    badgeStatus="optional"
    :items="optionalCauses"
  />
  <CauseList v-if="optionalCauses.length > 0" :causes="optionalCauses" />

  <ListTitle
    :nameSingular="$t('card.optional-consequence')"
    :namePlural="$t('card.optional-consequences')"
    badgeStatus="optional"
    :items="optionalConsequences"
  />
  <ConsequenceList
    v-if="optionalConsequences.length > 0"
    :consequences="optionalConsequences"
  />

  <ListTitle
    :nameSingular="$t('card.invalid-cause')"
    :namePlural="$t('card.invalid-causes')"
    badgeStatus="invalid"
    :items="invalidCauses"
  />
  <CauseList v-if="invalidCauses.length > 0" :causes="invalidCauses" />

  <ListTitle
    :nameSingular="$t('card.invalid-consequence')"
    :namePlural="$t('card.invalid-consequences')"
    badgeStatus="invalid"
    :items="invalidConsequences"
  />
  <ConsequenceList
    v-if="invalidConsequences.length > 0"
    :consequences="invalidConsequences"
  />
</template>

<script>
import ListTitle from './ListTitle.vue';
import CauseList from './CauseList.vue';
import ConsequenceList from './ConsequenceList.vue';

export default {
  name: 'CardLinks',
  props: {
    card: Object,
  },
  components: { ListTitle, CauseList, ConsequenceList },
  computed: {
    validCauses: function () {
      return this.card.causes.filter((cause) => cause.link.status === 'valid');
    },
    validConsequences: function () {
      return this.card.consequences.filter(
        (consequence) => consequence.link.status === 'valid'
      );
    },
    optionalCauses: function () {
      return this.card.causes
        .filter((cause) => cause.link.status === 'optional')
        .sort((a, b) => a.from.cardNum - b.from.cardNum);
    },
    optionalConsequences: function () {
      return this.card.consequences
        .filter((consequence) => consequence.link.status === 'optional')
        .sort((a, b) => a.to.cardNum - b.to.cardNum);
    },
    invalidCauses: function () {
      return this.card.causes
        .filter((cause) => cause.link.status === 'invalid')
        .sort((a, b) => a.from.cardNum - b.from.cardNum);
    },
    invalidConsequences: function () {
      return this.card.consequences
        .filter((consequence) => consequence.link.status === 'invalid')
        .sort((a, b) => a.to.cardNum - b.to.cardNum);
    },
  },
};
</script>
