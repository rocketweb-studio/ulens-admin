/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\nmutation DeleteUser($input: DeleteUserInput!) {\n    deleteUser(input: $input) \n}\n": typeof types.DeleteUserDocument,
    "\n  mutation setBlockStatusForUser($input: SetBlockStatusForUserInput!) {\n    setBlockStatusForUser(input: $input)\n  }\n": typeof types.SetBlockStatusForUserDocument,
    "\n  query getAllPosts($input: GetAdminPostsInput!) {\n    getAllPostsForAdmin(input: $input) {\n      pageInfo {\n        hasNextPage\n      }\n      items {\n        id\n        avatarOwner\n        createdAt\n        description\n        userName\n        ownerId\n        isOwnerBlocked\n        images {\n          medium {\n            url\n          }\n        }\n      }\n    }\n  }\n": typeof types.GetAllPostsDocument,
    "\n  query getPaymentsForAdmin($input: GetPaymentsInput!) {\n    getPaymentsForAdmin(input: $input) {\n      page\n      pageSize\n      totalCount\n      items {\n        amount\n        createdAt\n        currency\n        id\n        interval\n        provider\n        status\n        user {\n          avatar\n          firstName\n          id\n          lastName\n          userName\n        }\n      }\n    }\n  }\n": typeof types.GetPaymentsForAdminDocument,
    "\n  query getPhotos($input: GetAdminPostsInput!) {\n    getAllPostsForAdmin(input: $input) {\n      pageInfo {\n        hasNextPage\n      }\n      items {\n        images {\n          medium {\n            url\n          }\n        }\n      }\n    }\n  }\n": typeof types.GetPhotosDocument,
    "\n    query getUserFollowers($input:GetFollowInput!){\n        getUserFollowers(input:$input) {\n            items {\n                id\n                userName\n                createdAt\n                firstName\n                lastName\n            }\n            pageNumber\n            pageSize\n            totalCount\n        }\n    }\n": typeof types.GetUserFollowersDocument,
    "\n    query getUserFollowings($input:GetFollowInput!){\n        getUserFollowings(input:$input) {\n            items {\n                id\n                userName\n                createdAt\n                firstName\n                lastName\n            }\n            pageNumber\n            pageSize\n            totalCount\n        }\n    }\n": typeof types.GetUserFollowingsDocument,
    "\n  query getUserPayments($input: GetUserPaymentsInput!) {\n    getUserPayments(input: $input) {\n      page\n      pageSize\n      totalCount\n      items {\n        amount\n        currency\n        expiresAt\n        id\n        interval\n        provider\n        status\n      }\n    }\n  }\n": typeof types.GetUserPaymentsDocument,
    "\n  query GetUsers($input: GetUsersInput!) {\n    getUsers(input: $input) {\n      items {\n        id\n        userName\n        createdAt\n        isBlocked\n        firstName\n        lastName\n      }\n      page\n      pageSize\n      totalCount\n    }\n  }\n": typeof types.GetUsersDocument,
    "\n  mutation singIn($input: LoginAdminInput!) {\n    loginAdmin(input: $input) {\n      adminAccessToken\n    }\n  }\n": typeof types.SingInDocument,
    "\n  subscription getPosts {\n    newPostAdded {\n      id\n      userName\n      description\n      avatarOwner\n      createdAt\n      isOwnerBlocked\n      ownerId\n      images {\n        medium {\n          url\n        }\n      }\n    }\n  }\n": typeof types.GetPostsDocument,
};
const documents: Documents = {
    "\nmutation DeleteUser($input: DeleteUserInput!) {\n    deleteUser(input: $input) \n}\n": types.DeleteUserDocument,
    "\n  mutation setBlockStatusForUser($input: SetBlockStatusForUserInput!) {\n    setBlockStatusForUser(input: $input)\n  }\n": types.SetBlockStatusForUserDocument,
    "\n  query getAllPosts($input: GetAdminPostsInput!) {\n    getAllPostsForAdmin(input: $input) {\n      pageInfo {\n        hasNextPage\n      }\n      items {\n        id\n        avatarOwner\n        createdAt\n        description\n        userName\n        ownerId\n        isOwnerBlocked\n        images {\n          medium {\n            url\n          }\n        }\n      }\n    }\n  }\n": types.GetAllPostsDocument,
    "\n  query getPaymentsForAdmin($input: GetPaymentsInput!) {\n    getPaymentsForAdmin(input: $input) {\n      page\n      pageSize\n      totalCount\n      items {\n        amount\n        createdAt\n        currency\n        id\n        interval\n        provider\n        status\n        user {\n          avatar\n          firstName\n          id\n          lastName\n          userName\n        }\n      }\n    }\n  }\n": types.GetPaymentsForAdminDocument,
    "\n  query getPhotos($input: GetAdminPostsInput!) {\n    getAllPostsForAdmin(input: $input) {\n      pageInfo {\n        hasNextPage\n      }\n      items {\n        images {\n          medium {\n            url\n          }\n        }\n      }\n    }\n  }\n": types.GetPhotosDocument,
    "\n    query getUserFollowers($input:GetFollowInput!){\n        getUserFollowers(input:$input) {\n            items {\n                id\n                userName\n                createdAt\n                firstName\n                lastName\n            }\n            pageNumber\n            pageSize\n            totalCount\n        }\n    }\n": types.GetUserFollowersDocument,
    "\n    query getUserFollowings($input:GetFollowInput!){\n        getUserFollowings(input:$input) {\n            items {\n                id\n                userName\n                createdAt\n                firstName\n                lastName\n            }\n            pageNumber\n            pageSize\n            totalCount\n        }\n    }\n": types.GetUserFollowingsDocument,
    "\n  query getUserPayments($input: GetUserPaymentsInput!) {\n    getUserPayments(input: $input) {\n      page\n      pageSize\n      totalCount\n      items {\n        amount\n        currency\n        expiresAt\n        id\n        interval\n        provider\n        status\n      }\n    }\n  }\n": types.GetUserPaymentsDocument,
    "\n  query GetUsers($input: GetUsersInput!) {\n    getUsers(input: $input) {\n      items {\n        id\n        userName\n        createdAt\n        isBlocked\n        firstName\n        lastName\n      }\n      page\n      pageSize\n      totalCount\n    }\n  }\n": types.GetUsersDocument,
    "\n  mutation singIn($input: LoginAdminInput!) {\n    loginAdmin(input: $input) {\n      adminAccessToken\n    }\n  }\n": types.SingInDocument,
    "\n  subscription getPosts {\n    newPostAdded {\n      id\n      userName\n      description\n      avatarOwner\n      createdAt\n      isOwnerBlocked\n      ownerId\n      images {\n        medium {\n          url\n        }\n      }\n    }\n  }\n": types.GetPostsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation DeleteUser($input: DeleteUserInput!) {\n    deleteUser(input: $input) \n}\n"): (typeof documents)["\nmutation DeleteUser($input: DeleteUserInput!) {\n    deleteUser(input: $input) \n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation setBlockStatusForUser($input: SetBlockStatusForUserInput!) {\n    setBlockStatusForUser(input: $input)\n  }\n"): (typeof documents)["\n  mutation setBlockStatusForUser($input: SetBlockStatusForUserInput!) {\n    setBlockStatusForUser(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAllPosts($input: GetAdminPostsInput!) {\n    getAllPostsForAdmin(input: $input) {\n      pageInfo {\n        hasNextPage\n      }\n      items {\n        id\n        avatarOwner\n        createdAt\n        description\n        userName\n        ownerId\n        isOwnerBlocked\n        images {\n          medium {\n            url\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAllPosts($input: GetAdminPostsInput!) {\n    getAllPostsForAdmin(input: $input) {\n      pageInfo {\n        hasNextPage\n      }\n      items {\n        id\n        avatarOwner\n        createdAt\n        description\n        userName\n        ownerId\n        isOwnerBlocked\n        images {\n          medium {\n            url\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPaymentsForAdmin($input: GetPaymentsInput!) {\n    getPaymentsForAdmin(input: $input) {\n      page\n      pageSize\n      totalCount\n      items {\n        amount\n        createdAt\n        currency\n        id\n        interval\n        provider\n        status\n        user {\n          avatar\n          firstName\n          id\n          lastName\n          userName\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPaymentsForAdmin($input: GetPaymentsInput!) {\n    getPaymentsForAdmin(input: $input) {\n      page\n      pageSize\n      totalCount\n      items {\n        amount\n        createdAt\n        currency\n        id\n        interval\n        provider\n        status\n        user {\n          avatar\n          firstName\n          id\n          lastName\n          userName\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPhotos($input: GetAdminPostsInput!) {\n    getAllPostsForAdmin(input: $input) {\n      pageInfo {\n        hasNextPage\n      }\n      items {\n        images {\n          medium {\n            url\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPhotos($input: GetAdminPostsInput!) {\n    getAllPostsForAdmin(input: $input) {\n      pageInfo {\n        hasNextPage\n      }\n      items {\n        images {\n          medium {\n            url\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getUserFollowers($input:GetFollowInput!){\n        getUserFollowers(input:$input) {\n            items {\n                id\n                userName\n                createdAt\n                firstName\n                lastName\n            }\n            pageNumber\n            pageSize\n            totalCount\n        }\n    }\n"): (typeof documents)["\n    query getUserFollowers($input:GetFollowInput!){\n        getUserFollowers(input:$input) {\n            items {\n                id\n                userName\n                createdAt\n                firstName\n                lastName\n            }\n            pageNumber\n            pageSize\n            totalCount\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getUserFollowings($input:GetFollowInput!){\n        getUserFollowings(input:$input) {\n            items {\n                id\n                userName\n                createdAt\n                firstName\n                lastName\n            }\n            pageNumber\n            pageSize\n            totalCount\n        }\n    }\n"): (typeof documents)["\n    query getUserFollowings($input:GetFollowInput!){\n        getUserFollowings(input:$input) {\n            items {\n                id\n                userName\n                createdAt\n                firstName\n                lastName\n            }\n            pageNumber\n            pageSize\n            totalCount\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getUserPayments($input: GetUserPaymentsInput!) {\n    getUserPayments(input: $input) {\n      page\n      pageSize\n      totalCount\n      items {\n        amount\n        currency\n        expiresAt\n        id\n        interval\n        provider\n        status\n      }\n    }\n  }\n"): (typeof documents)["\n  query getUserPayments($input: GetUserPaymentsInput!) {\n    getUserPayments(input: $input) {\n      page\n      pageSize\n      totalCount\n      items {\n        amount\n        currency\n        expiresAt\n        id\n        interval\n        provider\n        status\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUsers($input: GetUsersInput!) {\n    getUsers(input: $input) {\n      items {\n        id\n        userName\n        createdAt\n        isBlocked\n        firstName\n        lastName\n      }\n      page\n      pageSize\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query GetUsers($input: GetUsersInput!) {\n    getUsers(input: $input) {\n      items {\n        id\n        userName\n        createdAt\n        isBlocked\n        firstName\n        lastName\n      }\n      page\n      pageSize\n      totalCount\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation singIn($input: LoginAdminInput!) {\n    loginAdmin(input: $input) {\n      adminAccessToken\n    }\n  }\n"): (typeof documents)["\n  mutation singIn($input: LoginAdminInput!) {\n    loginAdmin(input: $input) {\n      adminAccessToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription getPosts {\n    newPostAdded {\n      id\n      userName\n      description\n      avatarOwner\n      createdAt\n      isOwnerBlocked\n      ownerId\n      images {\n        medium {\n          url\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  subscription getPosts {\n    newPostAdded {\n      id\n      userName\n      description\n      avatarOwner\n      createdAt\n      isOwnerBlocked\n      ownerId\n      images {\n        medium {\n          url\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;