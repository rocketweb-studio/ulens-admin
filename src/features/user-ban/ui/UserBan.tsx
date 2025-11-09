import { Button, Modal, Select } from '@rocketweb-studio/ulens-ui-kit'
import { useState } from 'react'
import { BanUserButton } from '@/features/user-ban/ui/ban-user-button/BanUserButton'

type Props = {
  isOpen: boolean
  onClose: () => void
  userId: string
}

const REASON_FOR_BAN = ['Bad behavior', 'Advertising placement', 'Another reason']

export const UserBan = ({ isOpen, onClose, userId }: Props) => {
  const [reason, setReason] = useState(REASON_FOR_BAN[0])
  return (
    <div>
      <Modal className={'flex flex-col'} isOpen={isOpen} onClose={onClose} modalTitle={'Ban user'} hideDefaultButton>
        <p>Are you sure to ban this user, Ivan Ivanov?</p>
        <Select options={REASON_FOR_BAN} onChange={(e) => setReason(e.target.value)}></Select>
        <div className={'flex justify-between mt-12'}>
          <Button className={'w-[130px]'} onClick={onClose}>
            No
          </Button>
          <BanUserButton userId={userId} isBlocked={false} reason={reason}>
            <Button className={'w-[130px]'} variant={'outline'}>
              Yes
            </Button>
          </BanUserButton>
        </div>
      </Modal>
    </div>
  )
}
