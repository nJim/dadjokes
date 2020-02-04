import JokeTeaser from '../../02-molecules/JokeTeaser';
import {JokeData, JokeListData} from '../../../types';

const JokeList = ({jokes}: JokeListData) => {
  return (
    <div>
      {jokes.map((joke: JokeData) => (
        <JokeTeaser key={joke.id} id={joke.id} content={joke.content} />
      ))}
    </div>
  );
}

export default JokeList;
