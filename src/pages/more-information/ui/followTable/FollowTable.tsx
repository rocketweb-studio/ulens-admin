import type { User } from '@/pages/user-list'
import type { Column } from '@/shared/ui/table/TableRow.tsx'
import { formattedDateDDMMYYYY } from '@/shared/utils/formattedDate.ts'
import { Table } from '@/shared/ui/table/Table.tsx'
import { useQuery } from '@apollo/client/react'
import { getUserFollowersQuery, getUserFollowingsQuery } from '@/shared/graphql/queries'

export const FollowTable = ({ activeTab,userId }:{activeTab:string,userId:string}) => {
  const {data:followings}=useQuery( getUserFollowingsQuery,{
    variables:{input:{
        pageNumber: 1,
        pageSize: 10,
        userId: userId
      }
    }
  })
  const {data:followers}=useQuery(getUserFollowersQuery,{
    variables:{input:{
        pageNumber: 1,
        pageSize: 10,
        userId: userId
      }
    }
  })
  const dataTable=activeTab==="Followers"?followers?.getUserFollowers?.items:followings?.getUserFollowings?.items


  const rowTableFollow: User[] = dataTable?.map((follower) => ({
    id: follower?.id ?? '——',
    profileLink: `https://ulens.org/profile/${follower?.id ?? ''}`,
    userName: follower?.userName ?? '——',
    createdAt: follower?.createdAt ?? '——',
    firstName:follower?.firstName ?? '——',
    lastName:follower?.lastName ?? '——',
  })) ?? []

  const columnsTable: Column<User>[] = [
    {
      title: 'User ID',
      dataIndex: 'id',
      key: 'userId-column',
      render: (userId) => (
        <div style={{ display: 'flex', gap: '12px', flexDirection: 'row' }}>
          <span style={{ color: 'white' }}>{userId}</span>
        </div>
      ),
    },
    {
      title: (
        <div>{/* className={s.sortHeader} onClick={() => toggleProfileSort()}*/}
          Profile link
          {/*<SortArrows active={sort === 'AZ' || sort === 'ZA'} direction={sort === 'AZ' ? 'ASC' : 'DESC'} />*/}
        </div>
      ),
      dataIndex: 'profileLink',
      key: 'profileLink-column',
      render: (_, { firstName, lastName, profileLink }) => (
        <a href={profileLink} target='_blank' rel='noopener noreferrer'>{/*className={s.link}*/}
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
        <div> {/*className={s.sortHeader} onClick={() => toggleDateSort()}*/}
          Subscription Date
          {/*<SortArrows active={sort === 'NEW' || sort === 'OLD'} direction={sort === 'NEW' ? 'DESC' : 'ASC'} />*/}
        </div>
      ),
      dataIndex: 'createdAt',
      key: 'dateAdded-column',
      render: (date) => {
        const formattedDate = formattedDateDDMMYYYY(date)
        return (
          <div>
            <span style={{ color: 'white' }}>{formattedDate}</span>
          </div>
        )
      },
    },
  ]

  return  (<div><Table rows={rowTableFollow} columns={columnsTable} /></div>)
      }

