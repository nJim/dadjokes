import {JokeData} from '../../../types'

const Joke = ({id, content}: JokeData) => 
  <p key={id}>{content}</p>;

export default Joke;
