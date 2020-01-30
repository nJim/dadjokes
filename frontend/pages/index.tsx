import React, {Component} from 'react';
import {useQuery} from '@apollo/react-hooks';
import JokeList from '../components/03-organisms/JokeList';
import {ALL_JOKES_QUERY} from '../lib/queries';

function HomePage() {
  const { loading, error, data } = useQuery(ALL_JOKES_QUERY);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      Welcome home.
      <JokeList jokes={data.jokes}/>
    </div>
  );
}

export default HomePage;
