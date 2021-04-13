export default {
  titleKey: 'test Layout',
  cardFilter: (card) => card.cardNum <= 6,
  linkFilter: (link) => link.status === 'valid',
  cards: [
    {
      cardNum: 1,
      nodeOptions: {
        xPos: 0,
        yPos: 0,
      },
    },

    {
      cardNum: 2,
      nodeOptions: {
        xPos: 0,
        yPos: 1,
      },
    },
    {
      cardNum: 3,
      nodeOptions: {
        xPos: 1,
        yPos: 0,
      },
    },

    {
      cardNum: 4,
      nodeOptions: {
        xPos: 1,
        yPos: 1,
      },
    },
    {
      cardNum: 5,
      nodeOptions: {
        xPos: 2,
        yPos: 0,
      },
    },

    {
      cardNum: 6,
      nodeOptions: {
        xPos: 2,
        yPos: 1,
      },
    },
  ],
};
