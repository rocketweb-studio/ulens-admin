import { graphql } from "../generated/gql";


export const loginAdminQuery = graphql(`
    mutation singIn($input: LoginAdminInput!) {
        loginAdmin(input: $input) {
            adminAccessToken
        }
    }
`)