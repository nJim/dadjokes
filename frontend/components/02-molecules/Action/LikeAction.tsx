import {Tooltip} from 'antd';
import {LikeIcon} from '../../01-atoms/Icons';

const LikeAction = () => {
  // TODO: Make the counter a dynamic property.
  const counter = 10;
  return (
    <span>
      <Tooltip title="Like">
        <LikeIcon />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: 'auto' }}>{counter}</span>
    </span>
  );
}

export default LikeAction;
