import { isLink } from './utils.js';
const humanActivityCol = 1;
const co2Col = 3;
const physicsRow = 1;
const oceanCol = 3;
const oceanRow = 3;
const meltingCol = 5;
const bioRow = 0;
const deathCol = meltingCol + 3;
const deathRow = 0;
const retroCol = 4;
const retroRow = 0;

const nonQuizCards = [10, 11, 14, 15, 18, 19, 23, 28, 29, 35, 42];

export default {
  titleKey: 'layout.quiz31',
  cardFilter: (card) => {
    return !nonQuizCards.includes(card.cardNum);
  },
  linkFilter: (l) =>
    l.status === 'valid' &&
    !isLink(l, 17, 20) &&
    !isLink(l, 30, 31) &&
    !isLink(l, 20, 34) &&
    !isLink(l, 21, 32) &&
    !isLink(l, 21, 38) &&
    !isLink(l, 26, 38) &&
    !isLink(l, 32, 39) &&
    !isLink(l, 31, 40) &&
    !isLink(l, 34, 32),
  edgeMap: (l, edge) => {
    if (l.fromNum === 1) {
      return {
        ...edge,
        smooth: {
          type: 'curvedCCW',
          forceDirection: 'horizontal',
          roundness: 0.45,
        },
      };
    }
    if (isLink(l, 21, 25)) {
      return {
        ...edge,
        smooth: {
          type: 'curvedCW',
          forceDirection: 'horizontal',
          roundness: 0.6,
        },
      };
    }
    if (isLink(l, 21, 36)) {
      return {
        ...edge,
        smooth: {
          type: 'curvedCW',
          forceDirection: 'horizontal',
          roundness: 0.65,
        },
      };
    }
    if (isLink(l, 20, 26)) {
      return {
        ...edge,
        smooth: {
          type: 'cubicBezier',
          forceDirection: 'vertical',
          roundness: 0.8,
        },
      };
    }
    if (isLink(l, 20, 30)) {
      return {
        ...edge,
        smooth: {
          type: 'cubicBezier',
          forceDirection: 'vertical',
          roundness: 0.8,
        },
      };
    }
    // difficult one !!
    if (isLink(l, 25, 32)) {
      return {
        ...edge,
        smooth: {
          type: 'curvedCW',
          forceDirection: 'horizontal',
          roundness: 0.05,
        },
      };
    }
    if (isLink(l, 36, 38)) {
      return {
        ...edge,
        smooth: {
          type: 'curvedCW',
          forceDirection: 'vertical',
          roundness: 0.5,
        },
      };
    }
    if (isLink(l, 33, 32)) {
      return {
        ...edge,
        smooth: {
          type: 'cubicBezier',
          forceDirection: 'vertical',
          roundness: 0.8,
        },
      };
    }
    if (isLink(l, 27, 37)) {
      return {
        ...edge,
        smooth: {
          type: 'curvedCCW',
          forceDirection: 'horizontal',
          roundness: 0.4,
        },
      };
    }
    return {
      ...edge,
      smooth: {
        type: 'straightCross',
      },
    };
  },
  cards: [
    {
      cardNum: 1,
      /// node options as you can see in the doc
      /// https://visjs.github.io/vis-network/docs/network/nodes.html
      nodeOptions: {
        xPos: humanActivityCol,
        yPos: -1,
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
        yPos: 2,
      },
    },
    {
      cardNum: 4,
      nodeOptions: {
        xPos: humanActivityCol,
        yPos: 1,
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
        yPos: physicsRow - 1,
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
        xPos: humanActivityCol + 1,
        yPos: -1,
      },
    },
    {
      cardNum: 9,
      nodeOptions: {
        xPos: co2Col,
        yPos: 0,
      },
    },
    {
      cardNum: 12,
      nodeOptions: {
        xPos: co2Col,
        yPos: physicsRow + 0.75,
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
      cardNum: 16,
      nodeOptions: {
        xPos: meltingCol + 1,
        yPos: physicsRow,
      },
    },
    {
      cardNum: 17,
      nodeOptions: {
        xPos: meltingCol,
        yPos: physicsRow + 1,
      },
    },
    {
      cardNum: 20,
      nodeOptions: {
        xPos: meltingCol + 1,
        yPos: 0,
      },
    },
    {
      cardNum: 21,
      nodeOptions: {
        xPos: meltingCol,
        yPos: physicsRow,
      },
    },
    {
      cardNum: 22,
      nodeOptions: {
        xPos: meltingCol + 1,
        yPos: 2,
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
        xPos: deathCol - 1,
        yPos: bioRow,
      },
    },
    {
      cardNum: 26,
      nodeOptions: {
        xPos: deathCol - 1,
        yPos: 1,
      },
    },
    {
      cardNum: 27,
      nodeOptions: {
        xPos: oceanCol + 1,
        yPos: oceanRow,
      },
    },
    {
      cardNum: 30,
      nodeOptions: {
        xPos: deathCol,
        yPos: 1,
      },
    },
    {
      cardNum: 31,
      nodeOptions: {
        xPos: deathCol - 1,
        yPos: 2,
      },
    },
    {
      cardNum: 32,
      nodeOptions: {
        xPos: deathCol,
        yPos: 2,
      },
    },
    {
      cardNum: 33,
      nodeOptions: {
        xPos: meltingCol + 1,
        yPos: 3,
      },
    },
    {
      cardNum: 34,
      nodeOptions: {
        xPos: meltingCol,
        yPos: 3,
      },
    },
    {
      cardNum: 36,
      nodeOptions: {
        xPos: meltingCol,
        yPos: 0,
      },
    },
    {
      cardNum: 37,
      nodeOptions: {
        xPos: deathCol - 1,
        yPos: deathRow + 3,
      },
    },
    {
      cardNum: 38,
      nodeOptions: {
        xPos: deathCol,
        yPos: deathRow + 3,
      },
    },
    {
      cardNum: 39,
      nodeOptions: {
        xPos: deathCol - 1,
        yPos: deathRow + 4,
      },
    },
    {
      cardNum: 40,
      nodeOptions: {
        xPos: deathCol,
        yPos: deathRow + 4,
      },
    },
    {
      cardNum: 41,
      nodeOptions: {
        xPos: retroCol,
        yPos: retroRow,
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
      toNum: 21,
    },
    {
      fromNum: 21,
      toNum: 16,
    },
    {
      fromNum: 21,
      toNum: 17,
    },
    {
      fromNum: 24,
      toNum: 27,
    },
    {
      fromNum: 26,
      toNum: 31,
    },
    {
      fromNum: 36,
      toNum: 38,
    },
  ],
};
