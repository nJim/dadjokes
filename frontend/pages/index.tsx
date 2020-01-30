import React, {Component} from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const ALL_JOKES_QUERY = gql`
  query ALL_JOKES_QUERY {
    jokes {
      id
      content
    }
  }
`;

interface Data {
  jokes: {
    joke: Array<{ id: string; content: string }>;
  };
};

const JokeList = () => {
  const { loading, error, data } = useQuery(ALL_JOKES_QUERY);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    data.jokes.map((joke: { id: string; content: string; }) => (
      <p key={joke.id}>{joke.content}</p>
    ))
  );

}


function HomePage() {
  return (
    <div>
      Welcome home.
      <JokeList />
    </div>
  );
}

export default HomePage;
