const humanActivityCol = 1;
const physicsRow = 0.5;

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
        zoom: 1.6,
        xPos: humanActivityCol - 0.5,
        yPos: physicsRow,
      },
    },

    {
      cardNum: 5,
      nodeOptions: {
        xPos: humanActivityCol + 1,
        yPos: physicsRow,
      },
    },

    {
      cardNum: 7,
      nodeOptions: {
        xPos: humanActivityCol + 2,
        yPos: physicsRow,
      },
    },

    {
      cardNum: 13,
      nodeOptions: {
        xPos: humanActivityCol + 3,
        yPos: physicsRow,
      },
    },
    {
      cardNum: 18,
      nodeOptions: {
        xPos: humanActivityCol + 5,
        yPos: physicsRow - 0.5,
      },
    },
    {
      cardNum: 21,
      nodeOptions: {
        xPos: humanActivityCol + 4,
        yPos: physicsRow,
      },
    },
    {
      cardNum: 22,
      nodeOptions: {
        xPos: humanActivityCol + 5,
        yPos: physicsRow + 0.5,
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
    {
      fromNum: 13,
      toNum: 21,
    },
    {
      fromNum: 21,
      toNum: 18,
    },
    {
      fromNum: 21,
      toNum: 22,
    },
    {
      fromNum: 18,
      toNum: 22,
      status: 'invalid',
    },
  ],
};
