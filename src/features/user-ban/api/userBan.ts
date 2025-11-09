import { useMutation } from '@apollo/client/react'
import {
  SetBlockStatusForUserDocument,
  type SetBlockStatusForUserMutation,
  type SetBlockStatusForUserMutationVariables,
} from '@/shared/graphql/generated/graphql'

export type BlockUserInput = {
  userId: string
  isBlocked: boolean
  reason?: string
}

export const useBlockUserMutation = () => {
  return useMutation<SetBlockStatusForUserMutation, SetBlockStatusForUserMutationVariables>(
    SetBlockStatusForUserDocument,
  )
}
