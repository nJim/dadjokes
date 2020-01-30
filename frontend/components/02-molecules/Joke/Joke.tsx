import { Comment, Icon, Tooltip, Avatar } from 'antd';
import {JokeData} from '../../../types'
import {DislikeIcon, LikeIcon, ShareIcon} from '../../01-atoms/Icons';

const Joke = ({id, content}: JokeData) => {
  const likes = 10;
  const dislikes = 1;

  const actions = [
    <span>
      <Tooltip title="Like">
        <LikeIcon />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
    </span>,
    <span>
      <Tooltip title="Dislike">
        <DislikeIcon />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
    </span>,
    <span>
    <Tooltip title="Share">
      <ShareIcon />
    </Tooltip>
  </span>
  ];

  return(
    <Comment
      key={id}
      actions={actions}
      author={<a>Han Solo</a>}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={content}
      datetime={<span>Five minutes ago.</span>}
    />
  );
} 

export default Joke;
