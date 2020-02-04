import gql from 'graphql-tag';

export const CREATE_JOKE_MUTATION = gql`
  mutation CREATE_JOKE_MUTATION($content: String!) {
    createJoke(content: $content) {
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

export const DELETE_JOKE_MUTATION = gql`
  mutation DELETE_JOKE_MUTATION($id: ID!) {
    deleteJoke(id: $id) {
      id
    }
  }
`;
