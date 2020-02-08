import React from 'react';
import Joke from '.';

export default {
  title: 'Molecules|Joke',
};

export const joke = () => (
  <Joke 
    id="foo"
    content="Sting has been kidnapped. The Police have no lead."
    category="One Liner"
    author="Ned Flanders"
  />
);
