import cardsFr from '@/data/cards-fr.json';
import linksFr from '@/data/links-fr.json';

const lang = 'fr';

export default {
  getCardsForLang(lang) {
    switch (lang) {
      case 'fr':
        return cardsFr;
      default:
        throw new Error(`The language code '${lang}' is not supported`);
    }
  },
  getLinksForLang(lang) {
    switch (lang) {
      case 'fr':
        return linksFr;
      default:
        throw new Error(`The language code '${lang}' is not supported`);
    }
  },
  getCardData(cardNum) {
    const card = this.getCardsForLang(lang).find(
      (c) => c.cardNum.toString() === cardNum.toString()
    );
    if (!card) {
      throw new Error(`Card with num ${cardNum} not found`);
    }
    return card;
  },
  getCardDetails(cardNum) {
    const card = this.getCardData(cardNum);
    const links = this.getCardLinks(cardNum);
    return {
      ...card,
      ...links,
    };
  },
  getCardLinks(cardNum) {
    const causesCards = this.getLinksForLang(lang)
      .filter((l) => l.toNum.toString() === cardNum.toString())
      .map((link) => ({
        from: this.getCardData(link.fromNum),
        to: this.getCardData(link.toNum),
        link,
      }));
    const consequencesCards = this.getLinksForLang(lang)
      .filter((l) => l.fromNum.toString() === cardNum.toString())
      .map((link) => ({
        from: this.getCardData(link.fromNum),
        to: this.getCardData(link.toNum),
        link,
      }));
    return {
      causes: causesCards,
      consequences: consequencesCards,
    };
  },
};
