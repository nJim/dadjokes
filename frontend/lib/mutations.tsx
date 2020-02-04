import gql from 'graphql-tag';

export const CREATE_JOKE_MUTATION = gql`
  mutation CREATE_JOKE_MUTATION($id: ID!, $content: String!) {
    createJoke(id: $id, content: $content) {
      id
    }
  }
`;

export const UPDATE_JOKE_MUTATION = gql`
  mutation UPDATE_JOKE_MUTATION($id: ID!, $content: String) {
    updateJoke(id: $id, content: $content) {
      id
      content
    }
  }
`;
