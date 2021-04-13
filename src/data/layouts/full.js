const humanActivityCol = 1;
const humanActivityRow = 1;
const co2Col = 3;
const physicsRow = 1;
const oceanCol = 4;
const oceanRow = 3;
const meltingCol = 8;
const weatherCol = meltingCol + 2;
const bioCol = weatherCol + 2;

export default {
  titleKey: 'layout.full',
  cardFilter: (card) => card.cardSet <= 4,
  linkFilter: (link) => link.status === 'valid',
  cards: [
    {
      cardNum: 1,
      /// node options as you can see in the doc
      /// https://visjs.github.io/vis-network/docs/network/nodes.html
      nodeOptions: {
        zoom: 1.6,
        xPos: humanActivityCol - 1.5,
        yPos: humanActivityRow,
      },
    },
    {
      cardNum: 2,
      nodeOptions: {
        xPos: humanActivityCol,
        yPos: humanActivityRow - 1,
      },
    },

    {
      cardNum: 3,
      nodeOptions: {
        xPos: humanActivityCol,
        yPos: humanActivityRow + 1,
      },
    },
    {
      cardNum: 4,
      nodeOptions: {
        xPos: humanActivityCol,
        yPos: humanActivityRow,
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
        yPos: physicsRow + 1,
      },
    },
    {
      cardNum: 7,
      nodeOptions: {
        xPos: co2Col,
        yPos: physicsRow,
      },
    },
    {
      cardNum: 8,
      nodeOptions: {
        xPos: humanActivityCol,
        yPos: humanActivityRow + 2,
      },
    },
    {
      cardNum: 9,
      nodeOptions: {
        xPos: co2Col,
        yPos: 2.5,
      },
    },
    {
      cardNum: 10,
      nodeOptions: {
        xPos: humanActivityCol + 1,
        yPos: physicsRow - 1,
      },
    },
    {
      cardNum: 11,
      nodeOptions: {
        xPos: co2Col + 1,
        yPos: physicsRow,
      },
    },
    {
      cardNum: 12,
      nodeOptions: {
        xPos: co2Col,
        yPos: physicsRow + 0.55,
      },
    },
    {
      cardNum: 13,
      nodeOptions: {
        xPos: co2Col + 2,
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
        yPos: physicsRow - 1,
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
        yPos: physicsRow - 2,
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
      cardNum: 23,
      nodeOptions: {
        xPos: oceanCol + 1,
        yPos: oceanRow + 0.5,
      },
    },
    {
      cardNum: 24,
      nodeOptions: {
        xPos: oceanCol,
        yPos: oceanRow,
      },
    },
    {
      cardNum: 25,
      nodeOptions: {
        xPos: bioCol,
        yPos: 0,
      },
    },
    {
      cardNum: 26,
      nodeOptions: {
        xPos: weatherCol,
        yPos: 1,
      },
    },
    {
      cardNum: 27,
      nodeOptions: {
        xPos: bioCol,
        yPos: 4,
      },
    },
    {
      cardNum: 29,
      nodeOptions: {
        xPos: oceanCol + 2,
        yPos: oceanRow + 1,
      },
    },
    {
      cardNum: 30,
      nodeOptions: {
        xPos: weatherCol,
        yPos: 0,
      },
    },
    {
      cardNum: 33,
      nodeOptions: {
        xPos: weatherCol,
        yPos: 3,
      },
    },
    {
      cardNum: 34,
      nodeOptions: {
        xPos: weatherCol,
        yPos: 2,
      },
    },
  ],
  links: [],
};
