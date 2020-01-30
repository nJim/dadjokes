import {Tooltip} from 'antd';
import {DislikeIcon} from '../../01-atoms/Icons';

const DislikeAction = () => {
  // TODO: Make the counter a dynamic property.
  const counter = 1;
  return (
    <span>
      <Tooltip title="Dislike">
        <DislikeIcon />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: 'auto' }}>{counter}</span>
    </span>
  );
}

export default DislikeAction;
