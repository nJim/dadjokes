import {Icon} from 'antd';

interface Props {
  active?: boolean
}

const LikeIcon = ({active}: Props) => (
  <Icon
    type="like"
    theme={active ? 'filled' : 'outlined'}
  />
);

export default LikeIcon;
