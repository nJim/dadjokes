import React from 'react';
import Cards from '.';

export default {
  title: 'Organisms|Cards',
};

const cardData = [
  {
    title: 'One Week',
    description: "It's been one week since you looked at me; Cocked your head to the side and said, I'm angry."
  },
  {
    title: 'Five Days',
    description: "Since you laughed at me, saying; Get that together, come back and see me."
  },
  {
    title: 'Three Days',
    description: "Since the living room; I realized it's all my fault, but couldn't tell you."
  }
];

export const cards = () => (
  <Cards 
    heading="Hot like wasabi when I bust rhymes"
    cards={cardData}
  />
);
