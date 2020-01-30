import React, {Component} from 'react';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Joke from '../components/02-molecules/Joke';

const ALL_JOKES_QUERY = gql`
  query ALL_JOKES_QUERY {
    jokes {
      id
      content
    }
  }
`;

const JokeList = () => {
  const { loading, error, data } = useQuery(ALL_JOKES_QUERY);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    data.jokes.map((joke: { id: string; content: string; }) => (
      <Joke id={joke.id} content={joke.content} />
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
