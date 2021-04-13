export default {
  titleKey: 'layout.set2',
  cardFilter: (card) => card.cardSet <= 2,
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
        xPos: 1,
        yPos: 0,
      },
    },
    {
      cardNum: 3,
      nodeOptions: {
        xPos: 1,
        yPos: 1,
      },
    },
    {
      cardNum: 4,
      nodeOptions: {
        xPos: 1,
        yPos: 2,
      },
    },
    {
      cardNum: 5,
      nodeOptions: {
        xPos: 2,
        yPos: 0.5,
      },
    },
    {
      cardNum: 6,
      nodeOptions: {
        xPos: 2,
        yPos: 2,
      },
    },
    {
      cardNum: 7,
      nodeOptions: {
        xPos: 3,
        yPos: 0.5,
      },
    },
    {
      cardNum: 8,
      nodeOptions: {
        xPos: 1,
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
      cardNum: 11,
      nodeOptions: {
        xPos: 4,
        yPos: 0.5,
      },
    },
    {
      cardNum: 12,
      nodeOptions: {
        xPos: 3,
        yPos: 1.5,
      },
    },
    {
      cardNum: 13,
      nodeOptions: {
        xPos: 5,
        yPos: 0.5,
      },
    },
    {
      cardNum: 18,
      nodeOptions: {
        xPos: 7,
        yPos: 0,
      },
    },
    {
      cardNum: 21,
      nodeOptions: {
        xPos: 6,
        yPos: 0.5,
      },
    },
    {
      cardNum: 22,
      nodeOptions: {
        xPos: 7,
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
