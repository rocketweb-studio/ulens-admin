import { Button, Modal, Select } from '@rocketweb-studio/ulens-ui-kit'
import { useState } from 'react'
import { BanUserButton } from '@/features/user-ban/ui/ban-user-button/BanUserButton'

type Props = {
  isOpen: boolean
  onClose: () => void
  userId: string
  isBlocked: boolean
  userName?: string
}

const REASON_FOR_BAN = ['Bad behavior', 'Advertising placement', 'Another reason']

export const UserBan = ({ isOpen, onClose, userId, isBlocked, userName }: Props) => {
  const [reason, setReason] = useState(REASON_FOR_BAN[0])

  return (
    <div>
      <Modal className={'flex flex-col'} isOpen={isOpen} onClose={onClose} modalTitle={'Ban user'} hideDefaultButton>
        {!isBlocked ?
          <p>Are you sure to ban this user {userName}?</p>
        : <p>Are you sure to unban this user {userName}</p>}
        {!isBlocked && <Select options={REASON_FOR_BAN} onChange={(e) => setReason(e.target.value)}></Select>}
        <div className={'flex justify-between gap-x-6 mt-12'}>
          <Button className={'w-[130px]'} onClick={onClose}>
            No
          </Button>
          <BanUserButton
            userId={userId}
            isBlocked={isBlocked}
            reason={!isBlocked ? reason : ''}
            onSuccess={() => onClose()}
          >
            <Button className={'w-[130px]'} variant={'outline'}>
              Yes
            </Button>
          </BanUserButton>
        </div>
      </Modal>
    </div>
  )
}
