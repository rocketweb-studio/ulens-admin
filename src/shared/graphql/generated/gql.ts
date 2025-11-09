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
    "\n  query getAllPosts($input: GetAdminPostsInput!) {\n    getAllPostsForAdmin(input: $input) {\n      pageInfo {\n        hasNextPage\n      }\n      items {\n        id\n        avatarOwner\n        createdAt\n        description\n        userName\n        ownerId\n        images {\n          medium {\n            url\n          }\n        }\n      }\n    }\n  }\n": typeof types.GetAllPostsDocument,
    "\n  query getPayments($input: GetPaymentsInput!) {\n    getPayments(input: $input) {\n      page\n      pageSize\n      totalCount\n      items {\n        amount\n        currency\n        expiresAt\n        id\n        interval\n        provider\n        status\n      }\n    }\n  }\n": typeof types.GetPaymentsDocument,
    "\n  query GetUsers($input: GetUsersInput!) {\n    getUsers(input: $input) {\n      items {\n        id\n        userName\n        createdAt\n        isBlocked\n        firstName\n        lastName\n      }\n      page\n      pageSize\n      totalCount\n    }\n  }\n": typeof types.GetUsersDocument,
    "\n  mutation singIn($input: LoginAdminInput!) {\n    loginAdmin(input: $input) {\n      adminAccessToken\n    }\n  }\n": typeof types.SingInDocument,
    "\n  subscription getPosts {\n    newPostAdded {\n      id\n      userName\n      description\n      avatarOwner\n      createdAt\n      images {\n        medium {\n          url\n        }\n      }\n    }\n  }\n": typeof types.GetPostsDocument,
};
const documents: Documents = {
    "\nmutation DeleteUser($input: DeleteUserInput!) {\n    deleteUser(input: $input) \n}\n": types.DeleteUserDocument,
    "\n  mutation setBlockStatusForUser($input: SetBlockStatusForUserInput!) {\n    setBlockStatusForUser(input: $input)\n  }\n": types.SetBlockStatusForUserDocument,
    "\n  query getAllPosts($input: GetAdminPostsInput!) {\n    getAllPostsForAdmin(input: $input) {\n      pageInfo {\n        hasNextPage\n      }\n      items {\n        id\n        avatarOwner\n        createdAt\n        description\n        userName\n        ownerId\n        images {\n          medium {\n            url\n          }\n        }\n      }\n    }\n  }\n": types.GetAllPostsDocument,
    "\n  query getPayments($input: GetPaymentsInput!) {\n    getPayments(input: $input) {\n      page\n      pageSize\n      totalCount\n      items {\n        amount\n        currency\n        expiresAt\n        id\n        interval\n        provider\n        status\n      }\n    }\n  }\n": types.GetPaymentsDocument,
    "\n  query GetUsers($input: GetUsersInput!) {\n    getUsers(input: $input) {\n      items {\n        id\n        userName\n        createdAt\n        isBlocked\n        firstName\n        lastName\n      }\n      page\n      pageSize\n      totalCount\n    }\n  }\n": types.GetUsersDocument,
    "\n  mutation singIn($input: LoginAdminInput!) {\n    loginAdmin(input: $input) {\n      adminAccessToken\n    }\n  }\n": types.SingInDocument,
    "\n  subscription getPosts {\n    newPostAdded {\n      id\n      userName\n      description\n      avatarOwner\n      createdAt\n      images {\n        medium {\n          url\n        }\n      }\n    }\n  }\n": types.GetPostsDocument,
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
export function graphql(source: "\n  query getAllPosts($input: GetAdminPostsInput!) {\n    getAllPostsForAdmin(input: $input) {\n      pageInfo {\n        hasNextPage\n      }\n      items {\n        id\n        avatarOwner\n        createdAt\n        description\n        userName\n        ownerId\n        images {\n          medium {\n            url\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAllPosts($input: GetAdminPostsInput!) {\n    getAllPostsForAdmin(input: $input) {\n      pageInfo {\n        hasNextPage\n      }\n      items {\n        id\n        avatarOwner\n        createdAt\n        description\n        userName\n        ownerId\n        images {\n          medium {\n            url\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPayments($input: GetPaymentsInput!) {\n    getPayments(input: $input) {\n      page\n      pageSize\n      totalCount\n      items {\n        amount\n        currency\n        expiresAt\n        id\n        interval\n        provider\n        status\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPayments($input: GetPaymentsInput!) {\n    getPayments(input: $input) {\n      page\n      pageSize\n      totalCount\n      items {\n        amount\n        currency\n        expiresAt\n        id\n        interval\n        provider\n        status\n      }\n    }\n  }\n"];
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
export function graphql(source: "\n  subscription getPosts {\n    newPostAdded {\n      id\n      userName\n      description\n      avatarOwner\n      createdAt\n      images {\n        medium {\n          url\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  subscription getPosts {\n    newPostAdded {\n      id\n      userName\n      description\n      avatarOwner\n      createdAt\n      images {\n        medium {\n          url\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;