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

export type FollowerModel = {
  __typename?: 'FollowerModel';
  aboutMe?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  dateOfBirth?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  userName: Scalars['String']['output'];
};

export type FollowersResponse = {
  __typename?: 'FollowersResponse';
  items: Array<FollowerModel>;
  pageNumber: Scalars['Float']['output'];
  pageSize: Scalars['Float']['output'];
  totalCount: Scalars['Float']['output'];
};

export type FollowingModel = {
  __typename?: 'FollowingModel';
  aboutMe?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  dateOfBirth?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  userName: Scalars['String']['output'];
};

export type FollowingsResponse = {
  __typename?: 'FollowingsResponse';
  items: Array<FollowingModel>;
  pageNumber: Scalars['Float']['output'];
  pageSize: Scalars['Float']['output'];
  totalCount: Scalars['Float']['output'];
};

export type GetAdminPostsInput = {
  endCursorPostId?: InputMaybe<Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type GetFollowInput = {
  pageNumber?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  userId: Scalars['String']['input'];
};

export type GetPaymentsInput = {
  pageNumber?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<SortableTransactionFields>;
  sortDirection?: InputMaybe<SortDirection>;
};

export type GetUserPaymentsInput = {
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

export type ImageModel = {
  __typename?: 'ImageModel';
  createdAt: Scalars['String']['output'];
  fileSize: Scalars['Float']['output'];
  height: Scalars['Float']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Float']['output'];
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

export type OwnerModel = {
  __typename?: 'OwnerModel';
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

export type PageInfoModel = {
  __typename?: 'PageInfoModel';
  endCursorPostId?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
};

export type PostImageModel = {
  __typename?: 'PostImageModel';
  medium: Array<ImageModel>;
  small: Array<ImageModel>;
};

export type PostModel = {
  __typename?: 'PostModel';
  avatarOwner?: Maybe<Scalars['String']['output']>;
  avatarWhoLikes: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  images: PostImageModel;
  isLiked: Scalars['Boolean']['output'];
  isOwnerBlocked: Scalars['Boolean']['output'];
  likeCount: Scalars['Float']['output'];
  owner: OwnerModel;
  ownerId: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  userName: Scalars['String']['output'];
};

export type PostsResponse = {
  __typename?: 'PostsResponse';
  items: Array<PostModel>;
  pageInfo: PageInfoModel;
  pageSize: Scalars['Float']['output'];
  totalCount: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllPostsForAdmin: PostsResponse;
  getPaymentsForAdmin: TransactionsResponseForAdmin;
  getUserFollowers: FollowersResponse;
  getUserFollowings: FollowingsResponse;
  getUserPayments: TransactionsResponse;
  getUsers: UsersResponse;
};


export type QueryGetAllPostsForAdminArgs = {
  input: GetAdminPostsInput;
};


export type QueryGetPaymentsForAdminArgs = {
  input: GetPaymentsInput;
};


export type QueryGetUserFollowersArgs = {
  input: GetFollowInput;
};


export type QueryGetUserFollowingsArgs = {
  input: GetFollowInput;
};


export type QueryGetUserPaymentsArgs = {
  input: GetUserPaymentsInput;
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

export type Subscription = {
  __typename?: 'Subscription';
  newPostAdded: PostModel;
};

export type TransactionModel = {
  __typename?: 'TransactionModel';
  amount: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
  expiresAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  interval: Scalars['String']['output'];
  provider: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type TransactionModelForAdmin = {
  __typename?: 'TransactionModelForAdmin';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  interval: Scalars['String']['output'];
  provider: Scalars['String']['output'];
  status: Scalars['String']['output'];
  user: UserModelForAdmin;
};

export type TransactionsResponse = {
  __typename?: 'TransactionsResponse';
  items: Array<TransactionModel>;
  page: Scalars['Float']['output'];
  pageSize: Scalars['Float']['output'];
  totalCount: Scalars['Float']['output'];
};

export type TransactionsResponseForAdmin = {
  __typename?: 'TransactionsResponseForAdmin';
  items: Array<TransactionModelForAdmin>;
  page: Scalars['Float']['output'];
  pageSize: Scalars['Float']['output'];
  totalCount: Scalars['Float']['output'];
};

export type UserModel = {
  __typename?: 'UserModel';
  createdAt: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isBlocked: Scalars['Boolean']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type UserModelForAdmin = {
  __typename?: 'UserModelForAdmin';
  avatar?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  userName: Scalars['String']['output'];
};

export type UsersResponse = {
  __typename?: 'UsersResponse';
  items: Array<UserModel>;
  page: Scalars['Float']['output'];
  pageSize: Scalars['Float']['output'];
  totalCount: Scalars['Float']['output'];
};

export type DeleteUserMutationVariables = Exact<{
  input: DeleteUserInput;
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: boolean };

export type SetBlockStatusForUserMutationVariables = Exact<{
  input: SetBlockStatusForUserInput;
}>;


export type SetBlockStatusForUserMutation = { __typename?: 'Mutation', setBlockStatusForUser: boolean };

export type GetAllPostsQueryVariables = Exact<{
  input: GetAdminPostsInput;
}>;


export type GetAllPostsQuery = { __typename?: 'Query', getAllPostsForAdmin: { __typename?: 'PostsResponse', pageInfo: { __typename?: 'PageInfoModel', hasNextPage: boolean }, items: Array<{ __typename?: 'PostModel', id: string, avatarOwner?: string | null, createdAt: string, description: string, userName: string, ownerId: string, isOwnerBlocked: boolean, images: { __typename?: 'PostImageModel', medium: Array<{ __typename?: 'ImageModel', url: string }> } }> } };

export type GetPaymentsForAdminQueryVariables = Exact<{
  input: GetPaymentsInput;
}>;


export type GetPaymentsForAdminQuery = { __typename?: 'Query', getPaymentsForAdmin: { __typename?: 'TransactionsResponseForAdmin', page: number, pageSize: number, totalCount: number, items: Array<{ __typename?: 'TransactionModelForAdmin', amount: number, createdAt: string, currency: string, id: number, interval: string, provider: string, status: string, user: { __typename?: 'UserModelForAdmin', avatar?: string | null, firstName?: string | null, id: string, lastName?: string | null, userName: string } }> } };

export type GetPhotosQueryVariables = Exact<{
  input: GetAdminPostsInput;
}>;


export type GetPhotosQuery = { __typename?: 'Query', getAllPostsForAdmin: { __typename?: 'PostsResponse', pageInfo: { __typename?: 'PageInfoModel', hasNextPage: boolean }, items: Array<{ __typename?: 'PostModel', images: { __typename?: 'PostImageModel', medium: Array<{ __typename?: 'ImageModel', url: string }> } }> } };

export type GetUserFollowersQueryVariables = Exact<{
  input: GetFollowInput;
}>;


export type GetUserFollowersQuery = { __typename?: 'Query', getUserFollowers: { __typename?: 'FollowersResponse', pageNumber: number, pageSize: number, totalCount: number, items: Array<{ __typename?: 'FollowerModel', createdAt: string, id: string, userName: string }> } };

export type GetUserFollowingsQueryVariables = Exact<{
  input: GetFollowInput;
}>;


export type GetUserFollowingsQuery = { __typename?: 'Query', getUserFollowings: { __typename?: 'FollowingsResponse', pageNumber: number, pageSize: number, totalCount: number, items: Array<{ __typename?: 'FollowingModel', createdAt: string, id: string, userName: string }> } };

export type GetUserPaymentsQueryVariables = Exact<{
  input: GetUserPaymentsInput;
}>;


export type GetUserPaymentsQuery = { __typename?: 'Query', getUserPayments: { __typename?: 'TransactionsResponse', page: number, pageSize: number, totalCount: number, items: Array<{ __typename?: 'TransactionModel', amount: number, currency: string, expiresAt?: string | null, id: number, interval: string, provider: string, status: string }> } };

export type GetUsersQueryVariables = Exact<{
  input: GetUsersInput;
}>;


export type GetUsersQuery = { __typename?: 'Query', getUsers: { __typename?: 'UsersResponse', page: number, pageSize: number, totalCount: number, items: Array<{ __typename?: 'UserModel', id: string, userName?: string | null, createdAt: string, isBlocked: boolean, firstName?: string | null, lastName?: string | null }> } };

export type SingInMutationVariables = Exact<{
  input: LoginAdminInput;
}>;


export type SingInMutation = { __typename?: 'Mutation', loginAdmin: { __typename?: 'LoginAdminModel', adminAccessToken: string } };

export type GetPostsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type GetPostsSubscription = { __typename?: 'Subscription', newPostAdded: { __typename?: 'PostModel', id: string, userName: string, description: string, avatarOwner?: string | null, createdAt: string, isOwnerBlocked: boolean, ownerId: string, images: { __typename?: 'PostImageModel', medium: Array<{ __typename?: 'ImageModel', url: string }> } } };


export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const SetBlockStatusForUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setBlockStatusForUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetBlockStatusForUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setBlockStatusForUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<SetBlockStatusForUserMutation, SetBlockStatusForUserMutationVariables>;
export const GetAllPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAdminPostsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllPostsForAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatarOwner"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"isOwnerBlocked"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"medium"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllPostsQuery, GetAllPostsQueryVariables>;
export const GetPaymentsForAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPaymentsForAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetPaymentsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPaymentsForAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"interval"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPaymentsForAdminQuery, GetPaymentsForAdminQueryVariables>;
export const GetPhotosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPhotos"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAdminPostsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllPostsForAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"medium"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPhotosQuery, GetPhotosQueryVariables>;
export const GetUserFollowersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserFollowers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetFollowInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserFollowers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<GetUserFollowersQuery, GetUserFollowersQueryVariables>;
export const GetUserFollowingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserFollowings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetFollowInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserFollowings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<GetUserFollowingsQuery, GetUserFollowingsQueryVariables>;
export const GetUserPaymentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserPayments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetUserPaymentsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserPayments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"interval"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserPaymentsQuery, GetUserPaymentsQueryVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetUsersInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"isBlocked"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
export const SingInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"singIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginAdminInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminAccessToken"}}]}}]}}]} as unknown as DocumentNode<SingInMutation, SingInMutationVariables>;
export const GetPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"getPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newPostAdded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"avatarOwner"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"isOwnerBlocked"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"medium"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPostsSubscription, GetPostsSubscriptionVariables>;