<template>
  <div>
    <CollageNetwork
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
import CollageNetwork from '@/components/collage/CollageNetwork.vue';
import CardsService from '@/services/CardsService';
import LayoutService from '@/services/LayoutService';

export default {
  components: {
    CollageNetwork,
    // FdcCard
  },
  props: ['layoutName'],
  data: () => ({
    selectedCard: undefined,
  }),
  computed: {
    layout() {
      return LayoutService.getLayoutByName(this.layoutName);
    },
    nodes() {
      // const layout = LayoutService.getLayoutByName(this.layoutName);
      // console.log('layout', layout);

      const selectedCards = CardsService.getCardsForLang(
        this.$i18n.locale
      ).filter(
        (card) => !this.layout.cardFilter || this.layout.cardFilter(card)
      );
      // console.log('selectedCards', selectedCards);

      const nodes = selectedCards.map((card) => {
        const cardLayout =
          this.layout.cards.find((c) => c.cardNum === card.cardNum) || {};
        return {
          id: card.cardNum,
          shape: 'image',
          image: card.img.url,
          size: 30,
          ...cardLayout.nodeOptions,
        };
      });
      // console.log('nodes', nodes);
      return nodes;
    },
    edges() {
      // const layout = LayoutService.getLayoutByName(this.layoutName);
      // console.log('layout', layout);

      const selectedLinks = CardsService.getLinksForLang(
        this.$i18n.locale
      ).filter(
        (link) => !this.layout.linkFilter || this.layout.linkFilter(link)
      );

      const additionalLinks = (this.layout.links || []).map((link) => ({
        explanation: '',
        ...link,
        status: 'temporary',
      }));
      // console.log('additionalLinks', additionalLinks);

      const edges = [...selectedLinks, ...additionalLinks].map((link) => {
        return {
          from: link.fromNum,
          to: link.toNum,
          dashes: link.status === 'temporary',
          arrows: { to: { enabled: true } },
        };
      });
      // console.log(edges);
      return edges;
    },
  },
  methods: {
    onNodeDoubleSelection(nodeId) {
      console.log('onNodeDoubleSelection', nodeId);
      //   this.selectedCard = this.collage.cards()[nodeId - 1];
    },
    onNodeSelection(nodeId) {
      console.log('onNodeSelection', nodeId);
      // this.$buefy.toast.open({
      //   message: "Double cliquer sur la carte pour l'afficher en grand",
      //   position: 'is-bottom',
      // });
    },
  },
};
</script>

<style></style>
