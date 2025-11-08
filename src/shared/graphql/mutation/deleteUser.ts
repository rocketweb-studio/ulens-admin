import {gql} from "@apollo/client";

export const deleteUser = gql(`
mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) 
}
`)