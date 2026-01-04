import { graphql } from '../generated/gql'

export const getAllPostsForAdminQuery = graphql(`
  query getAllPosts($input: GetAdminPostsInput!) {
    getAllPostsForAdmin(input: $input) {
      pageInfo {
        hasNextPage
      }
      items {
        id
        avatarOwner
        createdAt
        description
        userName
        ownerId
        isOwnerBlocked
        images {
          medium {
            url
          }
        }
      }
    }
  }
`)
