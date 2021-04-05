import cardsFr from '@/data/fr/cards-fr.json';
import linksFr from '@/data/fr/links-fr.json';
import cardsEn from '@/data/en/cards-en.json';
import linksEn from '@/data/en/links-en.json';

// const lang = 'fr';

export default {
  getCardsForLang(lang) {
    switch (lang) {
      case 'en':
        return cardsEn;
      case 'fr':
        return cardsFr;
      default:
        throw new Error(`The language code '${lang}' is not supported`);
    }
  },
  getLinksForLang(lang) {
    switch (lang) {
      case 'en':
        return linksEn;
      case 'fr':
        return linksFr;
      default:
        throw new Error(`The language code '${lang}' is not supported`);
    }
  },
  getCardData(cardNum, lang = 'fr') {
    const card = this.getCardsForLang(lang).find(
      (c) => c.cardNum.toString() === cardNum.toString()
    );
    if (!card) {
      throw new Error(`Card with num ${cardNum} not found`);
    }
    return card;
  },
  getCardLinks(cardNum, lang = 'fr') {
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
  getCardDetails(cardNum, lang = 'fr') {
    const card = this.getCardData(cardNum, lang);
    const links = this.getCardLinks(cardNum, lang);
    return {
      ...card,
      ...links,
    };
  },
};
