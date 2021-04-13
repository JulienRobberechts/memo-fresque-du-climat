export default {
  titleKey: 'layout-set2',
  cardFilter: (card) => card.cardSet <= 2,
  linkFilter: (link) => link.status === 'valid',
  cards: [
    {
      cardNum: 1,
      /// node options as you can see in the doc
      /// https://visjs.github.io/vis-network/docs/network/nodes.html
      nodeOptions: {
        size: 50,
        x: -50,
        y: 100,
      },
    },
    {
      cardNum: 2,
      nodeOptions: {
        x: 120,
        y: 0,
      },
    },
    {
      cardNum: 3,
      nodeOptions: {
        x: 120,
        y: 75,
      },
    },
    {
      cardNum: 4,
      nodeOptions: {
        x: 120,
        y: 150,
      },
    },
    {
      cardNum: 5,
      nodeOptions: {
        x: 240,
        y: 75,
      },
    },
    {
      cardNum: 6,
      nodeOptions: {
        x: 240,
        y: 170,
      },
    },
    {
      cardNum: 7,
      nodeOptions: {
        x: 120 * 3,
        y: 75,
      },
    },
    {
      cardNum: 8,
      nodeOptions: {
        x: 120,
        y: 75 * 3,
      },
    },
    {
      cardNum: 9,
      nodeOptions: {
        x: 120 * 3,
        y: 87 * 3,
      },
    },
    {
      cardNum: 11,
      nodeOptions: {
        x: 480,
        y: 45 * 3,
      },
    },
    {
      cardNum: 12,
      nodeOptions: {
        x: 120 * 3,
        y: 44 * 3,
      },
    },
    {
      cardNum: 13,
      nodeOptions: {
        x: 600,
        y: 45 * 3,
      },
    },
    {
      cardNum: 18,
      nodeOptions: {
        x: 280 * 3,
        y: 75 * 3,
      },
    },
    {
      cardNum: 21,
      nodeOptions: {
        x: 280 * 3,
        y: 75,
      },
    },
    {
      cardNum: 22,
      nodeOptions: {
        x: 900,
        y: 150,
      },
    },
    {
      cardNum: 24,
      nodeOptions: {
        x: 480,
        y: 300,
      },
    },
  ],
};
