import {Icon} from 'antd';

interface Props {
  active?: boolean
}

const DislikeIcon = ({active}: Props) => (
  <Icon
    type="dislike"
    theme={active ? 'filled' : 'outlined'}
  />
);

export default DislikeIcon;
