import { graphql } from '../generated/gql'

export const getPhotosFromPostsForAdmin = graphql(`
  query getPhotos($input: GetAdminPostsInput!) {
    getAllPostsForAdmin(input: $input) {
      pageInfo {
        hasNextPage
      }
      items {
        images {
          medium {
            url
          }
        }
      }
    }
  }
`)
