import gql from 'graphql-tag';

export const CREATE_JOKE_MUTATION = gql`
  mutation CREATE_JOKE_MUTATION($content: String!) {
    createJoke(content: $content) {
      id
    }
  }
`;
