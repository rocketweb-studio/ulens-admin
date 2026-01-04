import { graphql } from '@/shared/graphql/generated'

export const getPostsSubscription = graphql(`
  subscription getPosts {
    newPostAdded {
      id
      userName
      description
      avatarOwner
      createdAt
      isOwnerBlocked
      ownerId
      images {
        medium {
          url
        }
      }
    }
  }
`)
