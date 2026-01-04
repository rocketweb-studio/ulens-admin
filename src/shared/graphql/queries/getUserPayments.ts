import { graphql } from '../generated/gql'

export const getUserPaymentsQuery = graphql(`
  query getUserPayments($input: GetUserPaymentsInput!) {
    getUserPayments(input: $input) {
      page
      pageSize
      totalCount
      items {
        amount
        currency
        expiresAt
        id
        interval
        provider
        status
      }
    }
  }
`)
