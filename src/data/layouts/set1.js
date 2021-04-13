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
        xPos: -0.5,
        yPos: 0,
      },
    },

    {
      cardNum: 5,
      nodeOptions: {
        xPos: 1,
        yPos: 0,
      },
    },

    {
      cardNum: 7,
      nodeOptions: {
        xPos: 2,
        yPos: 0,
      },
    },

    {
      cardNum: 13,
      nodeOptions: {
        xPos: 3,
        yPos: 0,
      },
    },
    {
      cardNum: 18,
      nodeOptions: {
        xPos: 5,
        yPos: -0.5,
      },
    },
    {
      cardNum: 21,
      nodeOptions: {
        xPos: 4,
        yPos: 0,
      },
    },
    {
      cardNum: 22,
      nodeOptions: {
        xPos: 5,
        yPos: 0.5,
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
