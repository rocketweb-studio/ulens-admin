import { graphql } from '../generated/gql'

export const getUserFollowings = graphql(`
    query getFollowings($input:GetFollowInput!){
        getUserFollowings(input:$input) {
            items {
                aboutMe
                city
                country
                createdAt
                dateOfBirth
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
