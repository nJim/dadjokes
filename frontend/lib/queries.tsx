import gql from 'graphql-tag';

export const ALL_JOKES_QUERY = gql`
  query ALL_JOKES_QUERY {
    jokes {
      id
      content
      category {
        name
      }
      author {
        name
      }
    }
  }
`;

export const ALL_CATEGORIES_QUERY = gql`
  query ALL_CATEGORIES_QUERY {
    categories {
      id
      name
    }
  }
`;

export const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    users {
      id
      name
    }
  }
`;

export const SINGLE_JOKE_QUERY = gql`
  query SINGLE_JOKE_QUERY($id: ID!) {
    joke (where: { id: $id }) {
      id
      content
      category {
        name
      }
      author {
        name
      }
    }
  }
`;
