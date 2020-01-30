import {Tooltip} from 'antd';
import {ShareIcon} from '../../01-atoms/Icons';

const ShareAction = () => (
  <span>
    <Tooltip title="Share">
      <ShareIcon />
    </Tooltip>
  </span>
);

export default ShareAction;
