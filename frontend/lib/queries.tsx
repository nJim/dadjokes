import gql from 'graphql-tag';

export const ALL_JOKES_QUERY = gql`
  query ALL_JOKES_QUERY {
    jokes {
      id
      content
    }
  }
`;
