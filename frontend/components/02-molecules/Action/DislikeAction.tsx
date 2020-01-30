import {useState} from 'react';
import {Tooltip} from 'antd';
import {DislikeIcon} from '../../01-atoms/Icons';

const DislikeAction = () => {
  // TODO: Make the counter a dynamic property.
  const counter = 1;

  // Initiall set the active state to false and toggle on click.
  const [active, setActive] = useState(false);
  const toggleActive = () => setActive(value => !value);
  return (
    <span onClick={toggleActive}>
      <Tooltip title="Dislike">
        <DislikeIcon active={active} />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: 'auto' }}>{counter}</span>
    </span>
  );
}

export default DislikeAction;
