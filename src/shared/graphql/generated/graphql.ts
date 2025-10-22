/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type DeleteUserInput = {
  userId: Scalars['String']['input'];
};

export type FilterByStatus =
  | 'ALL'
  | 'BLOCKED'
  | 'NOT_BLOCKED';

export type GetPaymentsInput = {
  pageNumber?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  sortBy?: InputMaybe<SortableTransactionFields>;
  sortDirection?: InputMaybe<SortDirection>;
  userId: Scalars['String']['input'];
};

export type GetUsersInput = {
  filterByStatus?: InputMaybe<FilterByStatus>;
  pageNumber?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<SortabeFieldsForUsers>;
  sortDirection?: InputMaybe<SortDirection>;
};

export type LoginAdminInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginAdminModel = {
  __typename?: 'LoginAdminModel';
  adminAccessToken: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteUser: Scalars['Boolean']['output'];
  loginAdmin: LoginAdminModel;
  setBlockStatusForUser: Scalars['Boolean']['output'];
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationLoginAdminArgs = {
  input: LoginAdminInput;
};


export type MutationSetBlockStatusForUserArgs = {
  input: SetBlockStatusForUserInput;
};

export type PostModel = {
  __typename?: 'PostModel';
  id: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  getPayments: TransactionsResponse;
  getPost: PostModel;
  getUsers: UsersResponse;
};


export type QueryGetPaymentsArgs = {
  input: GetPaymentsInput;
};


export type QueryGetUsersArgs = {
  input: GetUsersInput;
};

export type SetBlockStatusForUserInput = {
  isBlocked: Scalars['Boolean']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type SortDirection =
  | 'ASC'
  | 'DESC';

export type SortabeFieldsForUsers =
  | 'CREATED_AT'
  | 'EMAIL'
  | 'IS_BLOCKED'
  | 'USER_NAME';

export type SortableTransactionFields =
  | 'AMOUNT'
  | 'CREATED_AT'
  | 'EXPIRES_AT'
  | 'PROVIDER';

export type TransactionModel = {
  __typename?: 'TransactionModel';
  amount: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
  expiresAt: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  interval: Scalars['String']['output'];
  provider: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type TransactionsResponse = {
  __typename?: 'TransactionsResponse';
  items: Array<TransactionModel>;
  page: Scalars['Float']['output'];
  pageSize: Scalars['Float']['output'];
  totalCount: Scalars['Float']['output'];
};

export type UserModel = {
  __typename?: 'UserModel';
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isBlocked: Scalars['Boolean']['output'];
  userName?: Maybe<Scalars['String']['output']>;
};

export type UsersResponse = {
  __typename?: 'UsersResponse';
  items: Array<UserModel>;
  page: Scalars['Float']['output'];
  pageSize: Scalars['Float']['output'];
  totalCount: Scalars['Float']['output'];
};

export type SingInMutationVariables = Exact<{
  input: LoginAdminInput;
}>;


export type SingInMutation = { __typename?: 'Mutation', loginAdmin: { __typename?: 'LoginAdminModel', adminAccessToken: string } };


export const SingInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"singIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginAdminInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminAccessToken"}}]}}]}}]} as unknown as DocumentNode<SingInMutation, SingInMutationVariables>;