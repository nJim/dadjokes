import {Comment, Avatar} from 'antd';
import {JokeData} from '../../../types'
import {DislikeAction, LikeAction, ShareAction} from '../../02-molecules/Action';

const Joke = ({id, content}: JokeData) => {
  const actions = [
    <LikeAction />,
    <DislikeAction />,
    <ShareAction />
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
