import { getCards, getCard, getCardLinks } from './CardsService';

describe('getCard', () => {
  it('should return card 1', () => {
    const card = getCard(1);
    expect(card).toMatchSnapshot();
  });
});

describe('getCards', () => {
  it('should return all cards', () => {
    const allCards = getCards();
    expect(allCards).toMatchSnapshot();
  });
});

describe('getCardLinks', () => {
  it('should return links for card 1', () => {
    const links = getCardLinks(1);
    expect(links).toMatchSnapshot();
  });
});
