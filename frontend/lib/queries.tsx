import gql from 'graphql-tag';

export const ALL_JOKES_QUERY = gql`
  query ALL_JOKES_QUERY {
    jokes {
      id
      content
    }
  }
`;

export const SINGLE_JOKE_QUERY = gql`
  query SINGLE_JOKE_QUERY($id: ID!) {
    joke (where: { id: $id }) {
      id
      content
    }
  }
`;
