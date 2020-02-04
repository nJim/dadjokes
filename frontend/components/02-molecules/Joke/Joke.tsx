import {Comment, Avatar} from 'antd';
import {JokeData} from '../../../types'
import {JokeLink} from '../../01-atoms/Link'
import {DislikeAction, EditAction, LikeAction, ShareAction} from '../Action';

const Joke = ({id, content}: JokeData) => {
  const actions = [
    <LikeAction />,
    <DislikeAction />,
    <ShareAction />,
    <EditAction id={id} />
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
      content={
        <JokeLink id={id}>
          {content}
        </JokeLink>
      }
      datetime={<span>Five minutes ago.</span>}
    />
  );
} 

export default Joke;
