import { graphql } from '@/shared/graphql/generated'

export const setBlockStatusForUserMutation = graphql(`
  mutation setBlockStatusForUser($input: SetBlockStatusForUserInput!) {
    setBlockStatusForUser(input: $input)
  }
`)
