import {graphql} from "@/shared/graphql/generated";


export const deleteUser = graphql(`
mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) 
}
`)