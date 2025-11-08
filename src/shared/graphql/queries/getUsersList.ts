import { graphql } from '@/shared/graphql/generated'

export const getUsersList = graphql(`
  query GetUsers($input: GetUsersInput!) {
    getUsers(input: $input) {
      items {
        id
        userName
        createdAt
        isBlocked
        firstName
        lastName
      }
      page
      pageSize
      totalCount
    }
  }
`)
