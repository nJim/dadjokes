import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, select } from '@storybook/addon-knobs';
import Message from '.';

const stories = storiesOf('Molecules/Message', module);
stories.addDecorator(withKnobs);

// Knobs as dynamic variables.
stories.add('Message', () => {
  const label = 'Type';
  const options = {
    Success: 'success',
    Info: 'info',
    Warning: 'warning',
    Error: 'error',
  };
  const defaultValue = 'warning';
  const groupId = 'GROUP-ID1';
  const value = select(label, options, defaultValue, groupId);
  console.log(value);
  return (
    <Message 
      // @ts-ignore
      type={value}
      message="I can't believe rattlesnake warnings are called rattles and not cautionary tails."
    />
  );
});
