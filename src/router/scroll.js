const noScroll = null;

const scrollToCard = (cardNum) => ({
  el: `#carte-${cardNum}`,
});

const scrollToTop = () => ({
  top: 0,
});

const scrollToHash = (hash) => ({
  el: hash,
});

export { noScroll, scrollToCard, scrollToTop, scrollToHash };
