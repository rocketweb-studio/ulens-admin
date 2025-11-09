import { graphql } from '../generated/gql'

export const getPaymentsQuery = graphql(`
  query getPayments($input: GetPaymentsInput!) {
    getPayments(input: $input) {
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
