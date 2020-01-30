import { Comment, Icon, Tooltip, Avatar } from 'antd';
import {JokeData} from '../../../types'

const Joke = ({id, content}: JokeData) => {
  const likes = 10;
  const dislikes = 1;

  const actions = [
    <span>
      <Tooltip title="Like">
        <Icon
          type="like"
          // theme={action === 'liked' ? 'filled' : 'outlined'}
        />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
    </span>,
    <span>
      <Tooltip title="Dislike">
        <Icon
          type="dislike"
          // theme={action === 'disliked' ? 'filled' : 'outlined'}
        />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
    </span>,
    <span>
    <Tooltip title="Share">
      <Icon type="share-alt" />
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
