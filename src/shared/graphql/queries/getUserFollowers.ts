import { graphql } from '../generated/gql'

export const getUserFollowers = graphql(`
    query getFollowers($input:GetFollowInput!){
        getUserFollowers(input:$input) {
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
