import cards from '@/data/cards.json';
import links from '@/data/links.json';

export default {
  getCards() {
    return cards;
  },
  getCard(cardNum) {
    const foundCards = cards.filter(c => c.cardNum.toString() === cardNum);
    if (foundCards.length < 1) return null;
    const { id, shortTitle, cardBatch, img } = foundCards[0];
    const links = this.getCardLinks(cardNum);
    return { id, cardNum, shortTitle, cardBatch, img, ...links };
  },
  getCardLinks(cardNum) {
    const causesCards = links
      .filter(l => l.toNum.toString() === cardNum)
      .map(l => this.getCard(l.fromNum));
    return {
      causes: causesCards
    };
  }
};
