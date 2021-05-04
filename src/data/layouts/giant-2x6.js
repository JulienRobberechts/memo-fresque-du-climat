const humanActivityCol = 1;
const humanActivityRow = 1;
const co2Col = 3;
const physicsRow = 1;
const oceanCol = 4;
const oceanRow = 3;
const meltingCol = 8;
const weatherCol = meltingCol + 3;
const bioCol = weatherCol;
const bioRow = -2.5;
const foodCol = weatherCol + 2;
const deathCol = foodCol + 1;
const deathRow = 0;
const retroCol = 5;
const retroRow = -2;

export default {
  titleKey: 'layout.giant-2x6',
  cardFilter: null,
  linkFilter: (link) => link.status === 'valid',
  edgeMap: (link, edge) => {
    if (link.fromNum === 10 && link.toNum === 15) {
      return {
        ...edge,
        smooth: { type: 'discrete' },
      };
    }
    if (link.fromNum === 9 && link.toNum === 13) {
      return {
        ...edge,
        smooth: { type: 'horizontal' },
      };
    }
    if (link.fromNum === 21 && link.toNum === 25) {
      return {
        ...edge,
        smooth: { type: 'curvedCW', roundness: 0.2 },
      };
    }

    if (link.fromNum === 8 && link.toNum === 9) {
      return {
        ...edge,
        smooth: {
          type: 'curvedCW',
        },
      };
    }
    if (link.fromNum === 20 && link.toNum === 26) {
      return {
        ...edge,
        smooth: {
          type: 'curvedCW',
          roundness: 0.2,
        },
      };
    }
    if (link.fromNum === 30 && link.toNum === 31) {
      return {
        ...edge,
        smooth: {
          type: 'curvedCCW',
          roundness: 0.3,
        },
      };
    }
    if (link.fromNum === 30 && link.toNum === 32) {
      return {
        ...edge,
        smooth: {
          type: 'curvedCCW',
          roundness: 0.3,
        },
      };
    }
    if (link.fromNum === 10 && link.toNum === 38) {
      return {
        hidden: true,
        ...edge,
        smooth: {
          type: 'curvedCW',
          roundness: 0.4,
        },
      };
    }
    if (link.fromNum === 31 && link.toNum === 40) {
      return {
        ...edge,
        smooth: {
          type: 'curvedCW',
          roundness: 0.2,
        },
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
        yPos: physicsRow - 2,
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
        yPos: -0.5,
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
        yPos: bioRow,
      },
    },
    {
      cardNum: 26,
      nodeOptions: {
        xPos: weatherCol + 1,
        yPos: 0,
      },
    },
    {
      cardNum: 27,
      nodeOptions: {
        xPos: oceanCol + 5,
        yPos: oceanRow + 1.5,
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
      cardNum: 31,
      nodeOptions: {
        xPos: foodCol,
        yPos: 2.5,
      },
    },
    {
      cardNum: 32,
      nodeOptions: {
        xPos: foodCol,
        yPos: 1.5,
      },
    },
    {
      cardNum: 33,
      nodeOptions: {
        xPos: weatherCol + 1,
        yPos: 1,
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
        yPos: -1,
      },
    },
    {
      cardNum: 36,
      nodeOptions: {
        xPos: weatherCol,
        yPos: -1.5,
      },
    },
    {
      cardNum: 37,
      nodeOptions: {
        xPos: deathCol,
        yPos: deathRow + 1,
      },
    },
    {
      cardNum: 38,
      nodeOptions: {
        xPos: deathCol + 1,
        yPos: deathRow,
      },
    },
    {
      cardNum: 39,
      nodeOptions: {
        xPos: deathCol + 1,
        yPos: deathRow + 2,
      },
    },
    {
      cardNum: 40,
      nodeOptions: {
        xPos: deathCol + 2,
        yPos: deathRow + 1,
      },
    },
    {
      cardNum: 41,
      nodeOptions: {
        xPos: retroCol,
        yPos: retroRow,
      },
    },
    {
      cardNum: 42,
      nodeOptions: {
        xPos: retroCol + 1,
        yPos: retroRow + 1,
      },
    },
  ],
  links: [],
};
