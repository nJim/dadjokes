import Joke from '../../02-molecules/Joke';
import {JokeData, JokeListData} from '../../../types';

const JokeList = ({jokes}: JokeListData) => {
  return (
    <div>
      {jokes.map((joke: JokeData) => (
        <Joke id={joke.id} content={joke.content} />
      ))}
    </div>
  );
}

export default JokeList;
