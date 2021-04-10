<template>
  <div>
    <FdcNetwork
      id="network"
      :nodes="nodes"
      :edges="edges"
      @node-double-selection="onNodeDoubleSelection"
      @node-selection="onNodeSelection"
    />

    <!-- <b-modal
          v-model="selectedCard"
          has-modal-card
          trap-focus
          :destroy-on-hide="false"
          aria-role="dialog"

          aria-modal>
          <template #default='props'>
              <div class='modal-card' style="width: auto">
                <header class="modal-card-head">
                  <p class="modal-card-title">Carte {{ selectedCard ? selectedCard.label : ''}}</p>
                  <button
                      type="button"
                      class="delete"
                      @click="props.close"/>
              </header>
              <section class="modal-card-body">
                <FdcCard :card="selectedCard"></FdcCard>
              </section>
            </div>
          </template>
      </b-modal> -->
  </div>
</template>

<script>
import FdcNetwork from '@/components/NetworkComponent.vue';
import CardsService from '@/services/CardsService';
import meta from '@/utils/meta-vue3';

export default {
  name: 'NetworkView',
  components: {
    FdcNetwork,
    // FdcCard
  },
  data: () => ({
    // collage: new Collage('climatecollage'),
    selectedCard: undefined,
  }),
  created() {
    meta.setTitle(document, this.title);
    meta.setDescription(document, this.description);
    console.log(this.cards);
  },
  computed: {
    title() {
      return this.$t('title.all-cards');
    },
    description() {
      return this.$t('description.all-cards');
    },
    nodes() {
      return CardsService.getCardsForLang(this.$i18n.locale).map((card) => ({
        id: card.cardNum,
        label: card.title,
        shape: 'image',
        image: card.img.url,
        size: 30,
      }));
    },
    edges() {
      console.log(
        CardsService.getCardsForLang(this.$i18n.locale).map((link) => ({
          // todo status
          from: link.from,
          to: link.to,
          arrows: { to: { enabled: true } },
        }))
      );
      return CardsService.getLinksForLang(this.$i18n.locale).map((link) => {
        console.log(link);
        return {
          // todo status
          from: link.fromNum,
          to: link.toNum,
          dashes: link.status === 'optional',
          arrows: { to: { enabled: true } },
        };
      });
    },
  },
  methods: {
    onNodeDoubleSelection(nodeId) {
      console.log(nodeId);
      //   this.selectedCard = this.collage.cards()[nodeId - 1];
    },
    onNodeSelection() {
      this.$buefy.toast.open({
        message: "Double cliquer sur la carte pour l'afficher en grand",
        position: 'is-bottom',
      });
    },
  },
};
</script>

<style></style>
