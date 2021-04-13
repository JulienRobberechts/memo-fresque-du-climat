const humanActivityCol = 1;
const physicsRow = 0.5;
const meltingCol = 8;

export default {
  titleKey: 'layout.set3',
  cardFilter: (card) => card.cardSet <= 3,
  linkFilter: (link) => link.status === 'valid',
  cards: [
    {
      cardNum: 1,
      /// node options as you can see in the doc
      /// https://visjs.github.io/vis-network/docs/network/nodes.html
      nodeOptions: {
        zoom: 1.6,
        xPos: -0.5,
        yPos: 1.5,
      },
    },
    {
      cardNum: 2,
      nodeOptions: {
        xPos: humanActivityCol,
        yPos: 0,
      },
    },
    {
      cardNum: 3,
      nodeOptions: {
        xPos: humanActivityCol,
        yPos: 1,
      },
    },
    {
      cardNum: 4,
      nodeOptions: {
        xPos: humanActivityCol,
        yPos: -1,
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
      cardNum: 6,
      nodeOptions: {
        xPos: humanActivityCol + 1,
        yPos: 2,
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
      cardNum: 8,
      nodeOptions: {
        xPos: humanActivityCol,
        yPos: 3,
      },
    },
    {
      cardNum: 9,
      nodeOptions: {
        xPos: 3,
        yPos: 2.5,
      },
    },
    {
      cardNum: 10,
      nodeOptions: {
        xPos: humanActivityCol + 1,
        yPos: physicsRow - 1.5,
      },
    },
    {
      cardNum: 11,
      nodeOptions: {
        xPos: 4,
        yPos: physicsRow,
      },
    },
    {
      cardNum: 12,
      nodeOptions: {
        xPos: humanActivityCol + 2,
        yPos: physicsRow + 0.55,
      },
    },
    {
      cardNum: 13,
      nodeOptions: {
        xPos: 5,
        yPos: physicsRow,
      },
    },
    {
      cardNum: 14,
      nodeOptions: {
        xPos: meltingCol - 1,
        yPos: physicsRow,
      },
    },
    {
      cardNum: 15,
      nodeOptions: {
        xPos: meltingCol - 2,
        yPos: physicsRow,
      },
    },
    {
      cardNum: 16,
      nodeOptions: {
        xPos: meltingCol,
        yPos: physicsRow + 1,
      },
    },
    {
      cardNum: 17,
      nodeOptions: {
        xPos: meltingCol,
        yPos: -0.5,
      },
    },

    {
      cardNum: 18,
      nodeOptions: {
        xPos: meltingCol,
        yPos: physicsRow + 2,
      },
    },
    {
      cardNum: 19,
      nodeOptions: {
        xPos: meltingCol,
        yPos: physicsRow,
      },
    },
    {
      cardNum: 20,
      nodeOptions: {
        xPos: meltingCol + 1,
        yPos: -1,
      },
    },
    {
      cardNum: 21,
      nodeOptions: {
        xPos: meltingCol,
        yPos: -1.5,
      },
    },
    {
      cardNum: 22,
      nodeOptions: {
        xPos: meltingCol + 1,
        yPos: 1,
      },
    },
    {
      cardNum: 24,
      nodeOptions: {
        xPos: 4,
        yPos: 3.5,
      },
    },
  ],
  links: [],
};
