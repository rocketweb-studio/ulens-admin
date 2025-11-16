import { graphql } from '../generated/gql'

export const getUserFollowersQuery = graphql(`
    query getUserFollowers($input:GetFollowInput!){
        getUserFollowers(input:$input) {
            items {
                id
                userName
                createdAt
                firstName
                lastName
            }
            pageNumber
            pageSize
            totalCount
        }
    }
`)
