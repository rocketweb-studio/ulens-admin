import { graphql } from '../generated/gql'

export const getUserFollowersQuery = graphql(`
    query getUserFollowers($input:GetFollowInput!){
        getUserFollowers(input:$input) {
            items {
                createdAt
                id
                userName
                createdAt
            }
            pageNumber
            pageSize
            totalCount
        }
    }
`)
