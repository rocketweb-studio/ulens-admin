import { Link } from 'react-router'
import { formattedDateDDMMYYYY } from '@/shared/utils/formattedDate.ts'
import type { User } from '@/pages/user-list'

export const DataUser = ({user}:{ user: User }) => {
  return (
    <div>
      <div className={'flex gap-[24px] mt-[24px]'}>
        <img src={'user.avatar'} alt={'avatar'}
             className={`rounded-full overflow-hidden w-[60px] h-[60px] bg-[#4c8dff] object-cover object-center`} />
        <div className={'flex flex-col  justify-evenly'}>
          <span className={'font-bold text-[20px]'}>{user.firstName} {user.lastName}</span>
          <Link to={user.profileLink}><span
            className={'hover:text-[#4c8dff] border-b-[1px] text-[14px]'}>{user.userName}</span></Link>
        </div>
      </div>
      <div className={'flex gap-[50px] mt-[38px]'}>
                                <span
                                  className={'relative after:content-["UserID"] after:absolute after:top-[-22px] after:left-0 after:text-[#8D9094] after:text-[14px] font-light text-[14px] '}>{user.id}</span>
        <span
          className={'relative  after:content-["ProfileCreationDate"] after:absolute after:top-[-22px] after:left-0 after:text-[#8D9094] after:text-[14px] font-light text-[14px]'}>{formattedDateDDMMYYYY(user.createdAt)}</span>
      </div>
    </div>
  )
}

