import { isLink } from './utils.js';
const humanActivityCol = 1;
const humanActivityRow = 1.5;
const co2Col = 3;
const physicsRow = 0.5;
const oceanCol = 4;
const oceanRow = 3.5;

export default {
  titleKey: 'layout.set2',
  cardFilter: (card) => card.cardSet <= 2,
  linkFilter: (link) => link.status === 'valid',
  edgeMap: (l, edge) => {
    if (isLink(l, 9, 13)) {
      return {
        ...edge,
        smooth: { type: 'horizontal' },
      };
    }
    return { ...edge };
  },
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
        yPos: humanActivityRow - 1.5,
      },
    },
    {
      cardNum: 3,
      nodeOptions: {
        xPos: humanActivityCol,
        yPos: humanActivityRow - 0.5,
      },
    },
    {
      cardNum: 4,
      nodeOptions: {
        xPos: humanActivityCol,
        yPos: humanActivityRow + 0.5,
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
        yPos: physicsRow + 1.5,
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
        yPos: humanActivityRow + 1.5,
      },
    },
    {
      cardNum: 9,
      nodeOptions: {
        xPos: co2Col,
        yPos: physicsRow + 2,
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
      cardNum: 18,
      nodeOptions: {
        xPos: co2Col + 4,
        yPos: physicsRow - 0.5,
      },
    },
    {
      cardNum: 21,
      nodeOptions: {
        xPos: co2Col + 3,
        yPos: physicsRow,
      },
    },
    {
      cardNum: 22,
      nodeOptions: {
        xPos: co2Col + 4,
        yPos: physicsRow + 0.5,
      },
    },
    {
      cardNum: 24,
      nodeOptions: {
        xPos: oceanCol,
        yPos: oceanRow,
      },
    },
  ],
  links: [
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
