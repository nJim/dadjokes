import {useState} from 'react';
import {Tooltip} from 'antd';
import {LikeIcon} from '../../01-atoms/Icons';

const LikeAction = () => {
  // TODO: Make the counter a dynamic property.
  const counter = 10;

  // Initiall set the active state to false and toggle on click.
  const [active, setActive] = useState(false);
  const toggleActive = () => setActive(value => !value);
  return (
    <span onClick={toggleActive}>
      <Tooltip title="Like">
        <LikeIcon active={active} />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: 'auto' }}>{counter}</span>
    </span>
  );
}

export default LikeAction;
