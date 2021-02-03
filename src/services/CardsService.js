import cards from '@/data/cards.json';
import links from '@/data/links.json';

export default {
  getCards() {
    return cards;
  },
  getCardData(cardNum) {
    const card = cards.find(c => c.cardNum.toString() === cardNum.toString());
    if (!card) {
      throw new Error(`Card with num ${cardNum} not found`);
    }
    return card;
  },
  getCardDetails(cardNum) {
    const { id, shortTitle, cardBatch, img } = this.getCardData(cardNum);
    const links = this.getCardLinks(cardNum);
    return { id, cardNum, shortTitle, cardBatch, img, ...links };
  },
  getCardLinks(cardNum) {
    const causesCards = links
      .filter(l => l.toNum.toString() === cardNum.toString())
      .map(link => ({
        from: this.getCardData(link.fromNum),
        link
      }));
    const consequencesCards = links
      .filter(l => l.fromNum.toString() === cardNum.toString())
      .map(link => ({
        to: this.getCardData(link.toNum),
        link
      }));
    return {
      causes: causesCards,
      consequences: consequencesCards
    };
  }
};
