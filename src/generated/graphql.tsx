import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type EmailPasswordInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Forms = {
  __typename?: 'Forms';
  description: Scalars['String'];
  form: Scalars['JSON'];
  id: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['String'];
  user_id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteAnswer: Formanswers;
  login: UserResponse;
};


export type MutationDeleteAnswerArgs = {
  answerid: Scalars['String'];
};


export type MutationLoginArgs = {
  options: EmailPasswordInput;
};

export type Query = {
  __typename?: 'Query';
  answer: Formanswers;
  answers: Array<Formanswers>;
  form: Forms;
  forms: Array<Forms>;
  user: Array<Users>;
};


export type QueryAnswerArgs = {
  answerId: Scalars['String'];
};


export type QueryFormArgs = {
  formId: Scalars['String'];
};

export type Token = {
  __typename?: 'Token';
  access_token: Scalars['String'];
  expires_in: Scalars['String'];
};

export type UserAuth = {
  __typename?: 'UserAuth';
  email: Scalars['String'];
  name: Scalars['String'];
  token: Token;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<UserAuth>;
};

export type Users = {
  __typename?: 'Users';
  _id: Scalars['String'];
  created_at: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  updated_at: Scalars['String'];
  user_name: Scalars['String'];
};

export type Formanswers = {
  __typename?: 'formanswers';
  answers: Scalars['JSON'];
  created_at: Scalars['String'];
  form_id: Scalars['String'];
  id: Scalars['String'];
  updated_at: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'UserAuth', name: string, token: { __typename?: 'Token', access_token: string } } | null | undefined } };


export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(options: {email: $email, password: $password}) {
    errors {
      field
      message
    }
    user {
      name
      token {
        access_token
      }
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};