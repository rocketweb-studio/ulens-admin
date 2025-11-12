import { graphql } from '@/shared/graphql/generated'

export const getPaymentsForAdminQuery = graphql(`
  query getPaymentsForAdmin($input: GetPaymentsInput!) {
    getPaymentsForAdmin(input: $input) {
      page
      pageSize
      totalCount
      items {
        amount
        createdAt
        currency
        id
        interval
        provider
        status
        user {
          avatar
          firstName
          id
          lastName
          userName
        }
      }
    }
  }
`)
