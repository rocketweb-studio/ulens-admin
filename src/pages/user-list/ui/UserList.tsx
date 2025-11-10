import { IconBlock, Input, Pagination, Select } from '@rocketweb-studio/ulens-ui-kit'
import s from './UserList.module.css'
import { useState } from 'react'
import { useQuery } from '@apollo/client/react'
import { getUsersList } from '@/shared/graphql/queries/getUsersList.ts'
import { mapSortToQuery } from '@/features/user-sort/model/mapper.ts'
import type { SortValue } from '@/features/user-sort/model/types.ts'

import { Table } from '@/widgets/table/Table.tsx'
import type { Column } from '@/widgets/table/TableRow.tsx'
import { UserActionsMenu } from '@/pages/user-list/ui/UserActionsMenu.tsx'
import { SortArrows } from '@/entities/user/userSort/ui/SortArrows.tsx'
import { UserBan } from '@/features/user-ban'
import { useModal } from '@/shared/hooks'

export type User = {
  id: string
  profileLink: string
  userName: string
  firstName: string
  lastName: string
  createdAt: string
  isBlocked: boolean
}

export const UserList = () => {
  const [sort, setSort] = useState<SortValue>('NEW')
  const [openUserId, setOpenUserId] = useState<string | null>(null)
  const { isOpen: isBanModalOpen, closeModal: closeBanModal, openModal: openBanModal } = useModal()
  const [currentUserId, setCurrentUserId] = useState<string>('')
  const [currentUserBlockStatus, setCurrentUserBlockStatus] = useState<boolean>(false)

  const toggleDateSort = () => {
    setSort((prev) => (prev === 'NEW' ? 'OLD' : 'NEW'))
  }

  const toggleProfileSort = () => {
    setSort((prev) => (prev === 'AZ' ? 'ZA' : 'AZ'))
  }

  const buttonBlockClickHandler = (id: string, blockedStatus: boolean) => {
    setCurrentUserId(id)
    setCurrentUserBlockStatus(blockedStatus)
    openBanModal()
  }

  const sortQuery = mapSortToQuery(sort)

  const { data, loading, error } = useQuery(getUsersList, {
    variables: {
      input: {
        pageNumber: 1,
        pageSize: 8,
        filterByStatus: 'ALL',
        search: '',
        sortBy: sortQuery.sortBy,
        sortDirection: sortQuery.sortDirection,
      },
    },
  })

  const rowsTableUsers: User[] =
    data?.getUsers.items.map((user) => ({
      id: user.id,
      profileLink: `https://ulens.org/profile/${user.id}`,
      userName: user.userName ?? '——',
      firstName: user.firstName ?? '——',
      lastName: user.lastName ?? '——',
      createdAt: user.createdAt,
      isBlocked: user.isBlocked,
    })) || []

  const columnsTable: Column<User>[] = [
    {
      title: 'User ID',
      dataIndex: 'id',
      key: 'userId-column',
      render: (userId, { isBlocked }) => (
        <div style={{ display: 'flex', gap: '12px', flexDirection: 'row' }}>
          {isBlocked ?
            <IconBlock />
          : <div className={'w-6 h-6'}></div>}
          <span style={{ color: 'white' }}>{userId}</span>
        </div>
      ),
    },
    {
      title: (
        <div className={s.sortHeader} onClick={() => toggleProfileSort()}>
          Profile link
          <SortArrows active={sort === 'AZ' || sort === 'ZA'} direction={sort === 'AZ' ? 'ASC' : 'DESC'} />
        </div>
      ),
      dataIndex: 'profileLink',
      key: 'profileLink-column',
      render: (_, { firstName, lastName, profileLink }) => (
        <a href={profileLink} target='_blank' rel='noopener noreferrer' className={s.link}>
          {`${firstName} ${lastName}`}
        </a>
      ),
    },
    {
      title: 'Username',
      dataIndex: 'userName',
      key: 'userName-column',
      render: (_, { userName }) => <span style={{ color: 'white' }}> {userName}</span>,
    },
    {
      title: (
        <div className={s.sortHeader} onClick={() => toggleDateSort()}>
          Date added
          <SortArrows active={sort === 'NEW' || sort === 'OLD'} direction={sort === 'NEW' ? 'DESC' : 'ASC'} />
        </div>
      ),
      dataIndex: 'createdAt',
      key: 'dateAdded-column',
      render: (date, user) => {
        const isOpen = openUserId === user.id
        const formattedDate = new Date(date).toLocaleDateString('ru-RU', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })

        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            <span style={{ color: 'white' }}>{formattedDate}</span>
            <button onClick={() => setOpenUserId(isOpen ? null : user.id)}>
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g clipPath='url(#clip0_45764_12530)'>
                  <path
                    d='M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z'
                    fill='white'
                  />
                  <path
                    d='M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z'
                    fill='white'
                  />
                  <path
                    d='M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z'
                    fill='white'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_45764_12530'>
                    <rect width='24' height='24' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </button>
            {isOpen && (
              <UserActionsMenu
                user={user}
                onClose={() => setOpenUserId(null)}
                buttonBlockClickHandler={buttonBlockClickHandler}
              />
            )}
          </div>
        )
      },
    },
  ]

  if (loading) {
    return <div>Загрузка...</div>
  }
  if (error) {
    return <div style={{ color: 'red' }}>Ошибка: {error.message}</div>
  }

  return (
    <div>
      <div className={s.SearchPanel}>
        <Input placeholder={'Search'} />
        <div className={s.selectContainer}>
          <Select options={['Blocked', 'Not Blocked', 'All']} placeholder={'Not Selected'} />
        </div>
      </div>
      <Table<User> rows={rowsTableUsers} columns={columnsTable} />
      <Pagination elementCount={8} onPageChange={() => {}} />
      <UserBan
        isOpen={isBanModalOpen}
        onClose={closeBanModal}
        userId={currentUserId}
        isBlocked={currentUserBlockStatus}
      />
    </div>
  )
}
