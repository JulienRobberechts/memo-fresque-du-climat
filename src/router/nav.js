const isLinkToCardDetail = (to) => to.name === 'RouteCardDetails';

const isLinkBackToCardList = (to, from) =>
  from.name === 'RouteCardDetails' &&
  to.name === 'RouteHome' &&
  from.params.cardNum;

export { isLinkToCardDetail, isLinkBackToCardList };
