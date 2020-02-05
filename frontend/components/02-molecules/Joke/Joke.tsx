import {Comment, Avatar} from 'antd';
import {JokeData} from '../../../types'
import {JokeLink} from '../../01-atoms/Link'
import {DislikeAction, EditAction, LikeAction, ShareAction} from '../Action';

type Props = {
  id: string,
  content: string,
  category: string,
  author: string
}

const Joke = ({id, content, category, author}: Props) => {
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
      author={category}
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
      datetime={<div>Posted by {author}</div>}
    />
  );
} 

export default Joke;
