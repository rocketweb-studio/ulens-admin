import { graphql } from '../generated/gql'

export const getUserFollowingsQuery = graphql(`
    query getUserFollowings($input:GetFollowInput!){
        getUserFollowings(input:$input) {
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
