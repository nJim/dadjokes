import Joke from '../../02-molecules/Joke';
import {JokeListData} from '../../../types';

const JokeList = ({jokes}: JokeListData) => {
  return (
    jokes.map((joke: { id: string; content: string; }) => (
      <Joke id={joke.id} content={joke.content} />
    ))
  );
}

export default JokeList;
