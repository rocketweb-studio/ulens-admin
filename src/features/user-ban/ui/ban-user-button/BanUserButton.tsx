import { type ButtonHTMLAttributes, cloneElement, type ReactElement, type ReactNode, useEffect } from 'react'
import { useUserBan } from '@/features/user-ban'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text' | 'text-white' | 'in-text' | 'darken'
type ButtonSize = 'small' | 'medium' | 'large' | 'inherit'

type BaseButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  isLoading?: boolean
  disabled?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  centredIcon?: ReactNode
  underlineText?: boolean
  withoutPadding?: boolean
  className?: string
  children?: ReactNode
}

type ButtonProps = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
    tagType?: 'button'
  }

export type BlockUserButtonProps = {
  userId: string
  isBlocked: boolean
  children: ReactElement<ButtonProps>
  reason?: string
  onSuccess?: (result: boolean) => void
  onError?: (error: string) => void
  onStart?: () => void
}

export const BanUserButton = ({
  userId,
  isBlocked,
  children,
  reason,
  onSuccess,
  onError,
  onStart,
}: BlockUserButtonProps) => {
  const { blockUser, isBlocking, error } = useUserBan()

  useEffect(() => {
    if (error && onError) {
      onError(error)
    }
  }, [error, onError])

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isBlocking) {
      event.preventDefault()
      return
    }

    if (children.props.onClick) {
      children.props.onClick(event)
    }

    if (event.defaultPrevented) {
      return
    }

    onStart?.()

    const result = await blockUser({
      userId,
      isBlocked: !isBlocked,
      reason: reason || `User ${!isBlocked ? 'blocked' : 'unblocked'} by admin`,
    })

    onSuccess?.(result)
  }

  return cloneElement(children, {
    onClick: handleClick,
    disabled: children.props.disabled || isBlocking,
  })
}
