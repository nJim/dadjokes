import { Comment, Icon, Tooltip, Avatar } from 'antd';
import {JokeData} from '../../../types'

const Joke = ({id, content}: JokeData) => {
  return(
    <Comment
      key={id}
      // actions={actions}
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
