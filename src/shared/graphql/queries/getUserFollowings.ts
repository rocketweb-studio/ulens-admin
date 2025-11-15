import { graphql } from '../generated/gql'

export const getUserFollowingsQuery = graphql(`
    query getUserFollowings($input:GetFollowInput!){
        getUserFollowings(input:$input) {
            items {
                aboutMe
                city
                country
                createdAt
                dateOfBirth
                createdAt
                firstName
                id
                lastName
                userName

            }
            pageNumber
            pageSize
            totalCount
        }
    }
`)
