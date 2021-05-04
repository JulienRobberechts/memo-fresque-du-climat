import { isLink } from './utils.js';

const humanActivityCol = 1;
const humanActivityRow = 1;
const co2Col = 3;
const physicsRow = 1;
const oceanCol = 4;
const oceanRow = 3;
const meltingCol = 8;
const weatherCol = meltingCol + 2;
const bioCol = 10;
const bioRow = -1;
const foodCol = weatherCol + 2;
const deathCol = foodCol + 1;
const deathRow = 2;
const retroCol = 5;
const retroRow = -2;

export default {
  titleKey: 'layout.giant-2x6',
  cardFilter: null,
  linkFilter: (l) =>
    l.status === 'valid' &&
    !isLink(l, 25, 32) &&
    !isLink(l, 34, 32) &&
    !isLink(l, 34, 38) &&
    !isLink(l, 26, 38) &&
    !isLink(l, 21, 32) &&
    !isLink(l, 17, 27) &&
    !isLink(l, 37, 38) &&
    !isLink(l, 10, 38) &&
    !isLink(l, 21, 38),
  edgeMap: (l, edge) => {
    const width = 2; // isLink(l, 13, 15) ? 5 : 2;
    if (isLink(l, 10, 15) || isLink(l, 9, 13)) {
      return {
        ...edge,
        smooth: {
          type: 'horizontal',
          roundness: 0.8,
        },
      };
    }
    if (
      isLink(l, 41, 9) ||
      isLink(l, 42, 9) ||
      isLink(l, 21, 41) ||
      isLink(l, 17, 42)
    ) {
      return {
        ...edge,
        color: { color: '#951' },
        width: 1,
        smooth: {
          type: 'curvedCCW',
          roundness: 0.25,
        },
      };
    }
    if (
      isLink(l, 21, 36) ||
      isLink(l, 20, 26) ||
      isLink(l, 20, 30) ||
      isLink(l, 30, 32) ||
      isLink(l, 26, 32) ||
      isLink(l, 32, 39) ||
      isLink(l, 33, 39)
    ) {
      return {
        ...edge,
        smooth: {
          type: 'cubicBezier',
          forceDirection: 'vertical',
          roundness: 0.8,
        },
      };
    }
    if (isLink(l, 17, 34)) {
      return {
        ...edge,
        smooth: {
          type: 'cubicBezier',
          forceDirection: 'horizontal',
          roundness: 0.6,
        },
      };
    }
    if (isLink(l, 20, 33)) {
      return {
        ...edge,
        smooth: {
          type: 'curvedCCW',
          roundness: 0.25,
        },
      };
    }
    if (isLink(l, 34, 33)) {
      return {
        ...edge,
        smooth: {
          type: 'curvedCCW',
          roundness: 0.1,
        },
      };
    }
    if (isLink(l, 30, 31)) {
      return {
        ...edge,
        smooth: {
          type: 'curvedCCW',
          roundness: 0.3,
        },
      };
    }
    if (isLink(l, 20, 33)) {
      return {
        ...edge,
        smooth: {
          type: 'curvedCW',
          forceDirection: 'horizontal',
          roundness: 0.3,
        },
      };
    }
    if (isLink(l, 21, 20)) {
      return {
        ...edge,
        smooth: {
          type: 'curvedCCW',
          forceDirection: 'horizontal',
          roundness: 0.3,
        },
      };
    }
    if (isLink(l, 16, 31)) {
      return {
        ...edge,
        color: {
          color: '#aaa',
        },
        smooth: {
          type: 'curvedCCW',
          forceDirection: 'horizontal',
          roundness: 0.25,
        },
      };
    }
    return { ...edge, width };
  },
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
      cardNum: 10,
      nodeOptions: {
        xPos: co2Col - 1,
        yPos: physicsRow + 1,
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
      cardNum: 19,
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
        xPos: meltingCol - 1,
        yPos: physicsRow + 1,
      },
    },
    {
      cardNum: 16,
      nodeOptions: {
        xPos: meltingCol,
        yPos: physicsRow,
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
        yPos: physicsRow - 2,
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
      cardNum: 23,
      nodeOptions: {
        xPos: oceanCol + 1,
        yPos: oceanRow,
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
        yPos: bioRow,
      },
    },
    {
      cardNum: 26,
      nodeOptions: {
        xPos: weatherCol + 1,
        yPos: 1,
      },
    },
    {
      cardNum: 27,
      nodeOptions: {
        xPos: deathCol - 1,
        yPos: oceanRow,
      },
    },
    {
      cardNum: 28,
      nodeOptions: {
        xPos: bioCol + 1,
        yPos: bioRow,
      },
    },
    {
      cardNum: 29,
      nodeOptions: {
        xPos: oceanCol + 2,
        yPos: oceanRow,
      },
    },
    {
      cardNum: 30,
      nodeOptions: {
        xPos: weatherCol,
        yPos: 1,
      },
    },
    {
      cardNum: 31,
      nodeOptions: {
        xPos: foodCol,
        yPos: 1,
      },
    },
    {
      cardNum: 32,
      nodeOptions: {
        xPos: foodCol,
        yPos: 2,
      },
    },
    {
      cardNum: 33,
      nodeOptions: {
        xPos: weatherCol + 0.5,
        yPos: 2,
      },
    },
    {
      cardNum: 34,
      nodeOptions: {
        xPos: weatherCol - 1,
        yPos: 1,
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
        xPos: retroCol + 1,
        yPos: retroRow + 1,
      },
    },
    {
      cardNum: 42,
      nodeOptions: {
        xPos: retroCol + 1,
        yPos: retroRow + 2,
      },
    },
  ],
  links: [],
};
