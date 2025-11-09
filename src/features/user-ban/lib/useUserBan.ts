import { useCallback, useState } from 'react'
import { type BlockUserInput, useBlockUserMutation } from '@/features/user-ban/api/userBan'

type UseUserBanReturn = {
  isBlocking: boolean
  error: string | null
  blockUser: (input: BlockUserInput) => Promise<boolean>
  resetError: () => void
}

export const useUserBan = (): UseUserBanReturn => {
  const [mutation, { loading }] = useBlockUserMutation()
  const [error, setError] = useState<string | null>(null)

  const blockUser = useCallback(
    async (input: BlockUserInput): Promise<boolean> => {
      setError(null)

      try {
        const result = await mutation({
          variables: { input },
        })

        if (result.error) {
          const errorMessage = result.error.message || 'Unknown GraphQL error'
          setError(errorMessage)
          return false
        }

        return result.data?.setBlockStatusForUser ?? false
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'
        setError(errorMessage)
        return false
      }
    },
    [mutation],
  )

  const resetError = useCallback(() => {
    setError(null)
  }, [])

  return {
    isBlocking: loading,
    error,
    blockUser,
    resetError,
  }
}
