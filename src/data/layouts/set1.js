export default {
  titleKey: 'layout.set1',
  cardFilter: (card) => card.cardSet <= 1,
  linkFilter: (link) => link.status === 'valid',
  cards: [
    {
      cardNum: 1,
      /// node options as you can see in the doc
      /// https://visjs.github.io/vis-network/docs/network/nodes.html
      nodeOptions: {
        x: 0,
        y: 0,
      },
    },

    {
      cardNum: 5,
      nodeOptions: {
        x: 240,
        y: 0,
      },
    },

    {
      cardNum: 7,
      nodeOptions: {
        x: 120 * 3,
        y: 0,
      },
    },

    {
      cardNum: 13,
      nodeOptions: {
        x: 600,
        y: 0,
      },
    },
    {
      cardNum: 18,
      nodeOptions: {
        x: 280 * 3,
        y: 75,
      },
    },
    {
      cardNum: 21,
      nodeOptions: {
        x: 280 * 3,
        y: -75,
      },
    },
    {
      cardNum: 22,
      nodeOptions: {
        x: 900,
        y: 0,
      },
    },
  ],
  links: [
    {
      fromNum: 1,
      toNum: 5,
    },
    {
      fromNum: 7,
      toNum: 13,
    },
  ],
};
