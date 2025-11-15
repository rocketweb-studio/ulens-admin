import { graphql } from '../generated/gql'

export const getPhotosFromPostsForAdminQuery = graphql(`
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
