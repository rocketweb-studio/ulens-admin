import { useMutation } from '@apollo/client/react'
import { SetBlockStatusForUserDocument } from '@/shared/graphql/generated/graphql'
import { getUsersList } from '@/shared/graphql/queries/getUsersList'
import { getAllPostsForAdminQuery } from '@/shared/graphql/queries'

export type BlockUserInput = {
  userId: string
  isBlocked: boolean
  reason?: string
}

export const useBlockUserMutation = () => {
  return useMutation(SetBlockStatusForUserDocument, {
    refetchQueries: [getUsersList, getAllPostsForAdminQuery],
  })
}
