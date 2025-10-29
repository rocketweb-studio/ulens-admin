import { graphql } from "../generated/gql";


export const getAllPostsForAdminQuery = graphql(`
    query getAllPosts($input: GetAdminPostsInput!) {
        getAllPostsForAdmin(input: $input) {
            items {
                id
                avatarOwner
                createdAt
                description
                userName
                images {
                    medium {
                        url
                    }
                }
            }
        }
    }
`)
