import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $name: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      name: $name
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPLOAD_VIDEO = gql`
  mutation uploadVideo($file: Upload!, $title: String!) {
    uploadVideo(file: $file, title: $title) {
      id
      title
      uploadDate
      fileName
      path
    }
  }
`;
