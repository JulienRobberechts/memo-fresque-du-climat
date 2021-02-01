import cards from '@/data/cards.json';

export default {
  getCards() {
    console.log('cards', cards);
    return cards;
  },
  getCard(id) {
    const foundCards = cards.filter(c => c.id.toString() === id);
    if (foundCards.length < 1) return null;
    return foundCards[0];
  }
};
