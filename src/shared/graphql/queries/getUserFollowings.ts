import { graphql } from '../generated/gql'

export const getUserFollowingsQuery = graphql(`
    query getUserFollowings($input:GetFollowInput!){
        getUserFollowings(input:$input) {
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
