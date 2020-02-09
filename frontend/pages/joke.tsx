import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {SINGLE_JOKE_QUERY} from '../lib/queries';
import {getJoke} from '../utility';
import Joke from '../components/02-molecules/Joke';
import Message from '../components/02-molecules/Message';

function JokePage({query}: any) {
  // Query a single joke where the id is a query parameter.
  const { loading, error, data } = useQuery(SINGLE_JOKE_QUERY, {
    variables: {id: query.id}
  });

  // Exit early if the data is still loading.
  if (loading) return 'Loading...';

  // Get the joke from the response data.
  const joke = getJoke(data);

  return (
    <div>
      {error && (
        <Message 
          message={error.message}
          type='error'
        />
      )}
      {joke && (
        <Joke 
          id={data.joke.id}
          content={data.joke.content} 
          category={data.joke.category.name}
          author={data.joke.author.name}
        />
      )}
    </div>
  );
}

export default JokePage;
