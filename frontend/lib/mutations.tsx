import gql from 'graphql-tag';

export const CREATE_JOKE_MUTATION = gql`
  mutation CREATE_JOKE_MUTATION($content: String!) {
    createJoke(data: {
      content: $content
      category: {
        connect: {
          name: "One Liner"
        }
      }
      author: {
        connect: {
          name: "ZZ"
        }
      }
    }) {
      id
      content
      updatedAt
      createdAt
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
