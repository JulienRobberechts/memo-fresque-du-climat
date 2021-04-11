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
import LayoutService from '@/services/LayoutService';
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
      const layoutName = 'set1';
      const layout = LayoutService.getLayoutByName(layoutName);
      // console.log('layout', layout);

      const selectedCards = CardsService.getCardsForLang(
        this.$i18n.locale
      ).filter((card) => !layout.cardFilter || layout.cardFilter(card));
      // console.log('selectedCards', selectedCards);

      const nodes = selectedCards.map((card) => {
        const cardLayout =
          layout.cards.find((c) => c.cardNum === card.cardNum) || {};
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
      const layoutName = 'set1';
      const layout = LayoutService.getLayoutByName(layoutName);

      const selectedLinks = CardsService.getLinksForLang(
        this.$i18n.locale
      ).filter((link) => !layout.linkFilter || layout.linkFilter(link));

      const additionalLinks = (layout.links || []).map((link) => ({
        explanation: '',
        ...link,
        status: 'temporary',
      }));

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
