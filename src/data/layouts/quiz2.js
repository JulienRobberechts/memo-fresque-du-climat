import { isLink } from './utils.js';

const humanActivityCol = 1;
const humanActivityRow = 1;
const co2Col = 3;
const physicsRow = 1;
const oceanRow = 3;
const meltingCol = 6;
const weatherCol = meltingCol + 2;
const foodCol = weatherCol + 1;
const deathCol = foodCol + 1;
const deathRow = 2;
const retroRow = -2;

const nonQuizCards = [10, 11, 15, 18, 19, 23, 29, 35, 36, 42];

export default {
  titleKey: 'layout.quiz2',
  cardFilter: (card) => {
    return !nonQuizCards.includes(card.cardNum);
  },
  linkFilter: (l) =>
    l.status === 'valid' &&
    !isLink(l, 25, 32) &&
    !isLink(l, 17, 34) &&
    !isLink(l, 34, 38) &&
    !isLink(l, 26, 38) &&
    !isLink(l, 21, 32) &&
    !isLink(l, 17, 27) &&
    !isLink(l, 37, 38) &&
    !isLink(l, 21, 38),
  cards: [
    {
      cardNum: 1,
      /// node options as you can see in the doc
      /// https://visjs.github.io/vis-network/docs/network/nodes.html
      nodeOptions: {
        xPos: humanActivityCol - 1,
        yPos: humanActivityRow - 0.5,
      },
    },
    {
      cardNum: 2,
      nodeOptions: {
        xPos: humanActivityCol,
        yPos: humanActivityRow + 1,
      },
    },
    {
      cardNum: 3,
      nodeOptions: {
        xPos: humanActivityCol,
        yPos: humanActivityRow - 1,
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
        yPos: physicsRow - 1.5,
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
        yPos: humanActivityRow - 2,
      },
    },
    {
      cardNum: 9,
      nodeOptions: {
        xPos: co2Col,
        yPos: -1,
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
        xPos: co2Col + 1,
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
        yPos: physicsRow,
      },
    },
    {
      cardNum: 20,
      nodeOptions: {
        xPos: meltingCol + 1,
        yPos: physicsRow,
      },
    },
    {
      cardNum: 21,
      nodeOptions: {
        xPos: meltingCol,
        yPos: physicsRow - 1,
      },
    },
    {
      cardNum: 22,
      nodeOptions: {
        xPos: meltingCol + 1,
        yPos: physicsRow + 1,
      },
    },
    {
      cardNum: 24,
      nodeOptions: {
        xPos: co2Col + 1,
        yPos: oceanRow - 1,
      },
    },
    {
      cardNum: 25,
      nodeOptions: {
        xPos: meltingCol + 1,
        yPos: physicsRow - 1,
      },
    },
    {
      cardNum: 26,
      nodeOptions: {
        xPos: weatherCol,
        yPos: -0.5,
      },
    },
    {
      cardNum: 27,
      nodeOptions: {
        xPos: foodCol,
        yPos: 2,
      },
    },
    {
      cardNum: 28,
      nodeOptions: {
        xPos: foodCol,
        yPos: physicsRow - 2,
      },
    },
    {
      cardNum: 30,
      nodeOptions: {
        xPos: weatherCol,
        yPos: 0.5,
      },
    },
    {
      cardNum: 31,
      nodeOptions: {
        xPos: foodCol,
        yPos: 0,
      },
    },
    {
      cardNum: 32,
      nodeOptions: {
        xPos: foodCol,
        yPos: 1,
      },
    },
    {
      cardNum: 33,
      nodeOptions: {
        xPos: weatherCol,
        yPos: 2.5,
      },
    },
    {
      cardNum: 34,
      nodeOptions: {
        xPos: weatherCol,
        yPos: 1.5,
      },
    },
    {
      cardNum: 35,
      nodeOptions: {
        xPos: weatherCol + 1,
        yPos: 0,
      },
    },
    {
      cardNum: 36,
      nodeOptions: {
        xPos: weatherCol,
        yPos: 0,
      },
    },
    {
      cardNum: 37,
      nodeOptions: {
        xPos: deathCol,
        yPos: deathRow,
      },
    },
    {
      cardNum: 38,
      nodeOptions: {
        xPos: deathCol,
        yPos: -1,
      },
    },
    {
      cardNum: 39,
      nodeOptions: {
        xPos: deathCol,
        yPos: 1,
      },
    },
    {
      cardNum: 40,
      nodeOptions: {
        xPos: deathCol,
        yPos: 0,
      },
    },
    {
      cardNum: 41,
      nodeOptions: {
        xPos: co2Col + 1,
        yPos: retroRow + 1,
      },
    },
  ],
  links: [
    {
      fromNum: 12,
      toNum: 13,
    },
    {
      fromNum: 13,
      toNum: 14,
    },
    {
      fromNum: 24,
      toNum: 27,
    },
  ],
};
