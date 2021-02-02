import cards from '@/data/cards.json';

export default {
  getCards() {
    return cards;
  },
  getCard(cardNum) {
    const foundCards = cards.filter(c => c.cardNum.toString() === cardNum);
    if (foundCards.length < 1) return null;
    return foundCards[0];
  }
};
