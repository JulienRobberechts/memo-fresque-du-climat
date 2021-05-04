const humanActivityCol = 1;
const humanActivityRow = 1;
const co2Col = 3;
const physicsRow = 1;
const oceanCol = 3;
const oceanRow = 3;
const meltingCol = 5;
const weatherCol = meltingCol + 2;
const bioCol = weatherCol;
const bioRow = 0;
const foodCol = weatherCol;
const deathCol = foodCol + 1;
const deathRow = 0;
const retroCol = 4;
const retroRow = 0;

const quizCards = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  12,
  13,
  16,
  17,
  20,
  21,
  22,
  24,
  25,
  26,
  27,
  30,
  31,
  32,
  33,
  34,
  36,
  37,
  38,
  39,
  40,
  41,
];

export default {
  titleKey: 'layout.quiz30',
  cardFilter: (card) => {
    return quizCards.includes(card.cardNum);
  },
  linkFilter: (link) =>
    link.status === 'valid' &&
    !(link.fromNum === 17 && link.toNum === 20) &&
    !(link.fromNum === 30 && link.toNum === 31) &&
    !(link.fromNum === 20 && link.toNum === 34) &&
    !(link.fromNum === 21 && link.toNum === 32) &&
    !(link.fromNum === 21 && link.toNum === 38) &&
    !(link.fromNum === 26 && link.toNum === 38) &&
    !(link.fromNum === 32 && link.toNum === 39) &&
    !(link.fromNum === 31 && link.toNum === 40) &&
    !(link.fromNum === 34 && link.toNum === 32),
  edgeMap: (link, edge) => {
    if (link.fromNum === 1) {
      return {
        ...edge,
        smooth: {
          type: 'curvedCCW',
          forceDirection: 'horizontal',
          roundness: 0.45,
        },
      };
    }
    if (link.fromNum === 21 && link.toNum === 25) {
      return {
        ...edge,
        smooth: {
          type: 'curvedCW',
          forceDirection: 'horizontal',
          roundness: 0.6,
        },
      };
    }
    if (link.fromNum === 21 && link.toNum === 36) {
      return {
        ...edge,
        smooth: {
          type: 'curvedCW',
          forceDirection: 'horizontal',
          roundness: 0.65,
        },
      };
    }
    if (link.fromNum === 20 && link.toNum === 26) {
      return {
        ...edge,
        smooth: {
          type: 'cubicBezier',
          forceDirection: 'vertical',
          roundness: 0.8,
        },
      };
    }
    if (link.fromNum === 20 && link.toNum === 30) {
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
    if (link.fromNum === 25 && link.toNum === 32) {
      return {
        ...edge,
        smooth: {
          type: 'curvedCW',
          forceDirection: 'horizontal',
          roundness: 0.05,
        },
      };
    }
    if (link.fromNum === 36 && link.toNum === 38) {
      return {
        ...edge,
        smooth: {
          type: 'curvedCW',
          forceDirection: 'vertical',
          roundness: 0.5,
        },
      };
    }
    if (link.fromNum === 33 && link.toNum === 32) {
      return {
        ...edge,
        smooth: {
          type: 'cubicBezier',
          forceDirection: 'vertical',
          roundness: 0.8,
        },
      };
    }
    if (link.fromNum === 27 && link.toNum === 37) {
      return {
        ...edge,
        smooth: {
          type: 'curvedCCW',
          forceDirection: 'horizontal',
          roundness: 0.5,
        },
      };
    }
    // if (link.toNum === 13) {
    //   return {
    //     ...edge,
    //     smooth: {
    //       type: 'straightCross',
    //     },
    //   };
    // }
    // if (link.toNum === 12) {
    //   return {
    //     ...edge,
    //     smooth: {
    //       type: 'straightCross',
    //     },
    //   };
    // }
    // if (link.toNum === 9) {
    //   return {
    //     ...edge,
    //     smooth: {
    //       type: 'curvedCW',
    //       forceDirection: 'horizontal',
    //     },
    //   };
    // }
    // if (link.fromNum === 8) {
    //   return {
    //     ...edge,
    //     smooth: {
    //       type: 'straightCross',
    //     },
    //   };
    // }
    // if (link.toNum === 8) {
    //   return {
    //     ...edge,
    //     smooth: {
    //       type: 'straightCross',
    //     },
    //   };
    // }
    // if (link.toNum === 7) {
    //   return {
    //     ...edge,
    //     smooth: {
    //       type: 'curvedCCW',
    //       forceDirection: 'horizontal',
    //       roundness: 0.3,
    //     },
    //   };
    // }
    // if (link.toNum === 5) {
    //   return {
    //     ...edge,
    //     smooth: {
    //       type: 'cubicBezier',
    //       forceDirection: 'horizontal',
    //       roundness: 0.2,
    //     },
    //   };
    // }
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
        yPos: humanActivityRow - 2,
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
        yPos: humanActivityRow - 2,
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
        xPos: weatherCol,
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
        xPos: weatherCol + 1,
        yPos: 1,
      },
    },
    {
      cardNum: 31,
      nodeOptions: {
        xPos: foodCol,
        yPos: 2,
      },
    },
    {
      cardNum: 32,
      nodeOptions: {
        xPos: foodCol + 1,
        yPos: 2,
      },
    },
    {
      cardNum: 33,
      nodeOptions: {
        xPos: weatherCol - 1,
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
      cardNum: 35,
      nodeOptions: {
        xPos: weatherCol + 1,
        yPos: -1,
      },
    },
    {
      cardNum: 36,
      nodeOptions: {
        xPos: weatherCol + 1,
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
    {
      cardNum: 42,
      nodeOptions: {
        xPos: retroCol + 1,
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
    {
      fromNum: 27,
      toNum: 37,
    },
  ],
};
