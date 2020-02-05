import Joke from '../../02-molecules/Joke';
import {JokeData, JokeListData} from '../../../types';

const JokeList = ({jokes}: JokeListData) => {
  console.log(jokes)
  return (
    <div>
      {jokes.map((joke: JokeData) => (
        <Joke 
          key={joke.id} 
          id={joke.id} 
          content={joke.content}
          category={joke.category.name}
          author={joke.author.name}
        />
      ))}
    </div>
  );
}

export default JokeList;
