import React from 'react';
import Select from './Select';

export default {
  title: 'Molecules|Select',
};

export const select = () => (
  <Select 
    id="foo"
    label="Colors"
    options={['red', 'blue', 'green', 'yellow']}
    defaultValue="blue"
    loading={false}
  />
);
