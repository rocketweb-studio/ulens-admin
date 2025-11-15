import { Button, Pagination, Tabs } from '@rocketweb-studio/ulens-ui-kit'
import { Link, useLocation, useNavigate } from 'react-router'
import { useState } from 'react'
import { formattedDateDDMMYYYY } from '@/shared/utils/formattedDate.ts'
import { getUserFollowingsQuery } from '@/shared/graphql/queries/getUserFollowings.ts'
import { useQuery } from '@apollo/client/react'
import { getUserFollowersQuery } from '@/shared/graphql/queries/getUserFollowers.ts'
import { getPhotosFromPostsForAdminQuery } from '@/shared/graphql/queries/getPhotosFromPostsForAdmin.ts'


type TabsSettingsType={title:'Uploaded photos'|'Payments'|'Followers'|'Following'}


export const MoreInformation = () => {
  const {data:followings}=useQuery( getUserFollowingsQuery,{
    variables:{input:{
        pageNumber: 1,
        pageSize: 10,
        userId: ""
      }
    }
  })
  const {data:followers}=useQuery( getUserFollowersQuery,{
    variables:{input:{
        pageNumber: 1,
        pageSize: 10,
        userId: ""
      }
    }
  })
  const {data:photos}=useQuery( getPhotosFromPostsForAdminQuery,{variables:{
   input: {
     endCursorPostId: 'cursor',
     pageSize: 10,
     search: ""
   }
  }
  })


  const navigate = useNavigate()
  const location = useLocation()
  const [activeTab, setActiveTab] = useState<string>('Uploaded photos')
  const { user } = location.state || {}
  const openActiveTab = (active: string) => {
    setActiveTab(active)
  }
  const tabsSettings: TabsSettingsType[] = [
    { title: 'Uploaded photos' },
    { title: 'Payments' },
    { title: 'Followers' },
    { title: 'Following' }
  ]
  // const rowTableFollow={
  //   userId:"User Id",
  //   profileLink:"Profile Link",
  //   userName:"Username",
  //   subscriptionDate:"Subscription Date",
  // }
  //
  // const columnsTable: Column<User>[] = [
  //   {
  //     title: 'User ID',
  //     dataIndex: 'id',
  //     key: 'userId-column',
  //     render: (userId, { isBlocked }) => (
  //       <div style={{ display: 'flex', gap: '12px', flexDirection: 'row' }}>
  //         {isBlocked ?
  //           <IconBlock />
  //           : <div className={'w-6 h-6'}></div>}
  //         <span style={{ color: 'white' }}>{userId}</span>
  //       </div>
  //     ),
  //   },
  //   {
  //     title: (
  //       <div className={s.sortHeader} onClick={() => toggleProfileSort()}>
  //         Profile link
  //         <SortArrows active={sort === 'AZ' || sort === 'ZA'} direction={sort === 'AZ' ? 'ASC' : 'DESC'} />
  //       </div>
  //     ),
  //     dataIndex: 'profileLink',
  //     key: 'profileLink-column',
  //     render: (_, { firstName, lastName, profileLink }) => (
  //       <a href={profileLink} target='_blank' rel='noopener noreferrer' className={s.link}>
  //         {`${firstName} ${lastName}`}
  //       </a>
  //     ),
  //   },
  //   {
  //     title: 'Username',
  //     dataIndex: 'userName',
  //     key: 'userName-column',
  //     render: (_, { userName }) => <span style={{ color: 'white' }}> {userName}</span>,
  //   },
  //   {
  //     title: (
  //       <div className={s.sortHeader} onClick={() => toggleDateSort()}>
  //         Date added
  //         <SortArrows active={sort === 'NEW' || sort === 'OLD'} direction={sort === 'NEW' ? 'DESC' : 'ASC'} />
  //       </div>
  //     ),
  //     dataIndex: 'createdAt',
  //     key: 'dateAdded-column',
  //     render: (date, user) => {
  //       const isOpen = openUserId === user.id
  //       const formattedDate = new Date(date).toLocaleDateString('ru-RU', {
  //         day: '2-digit',
  //         month: '2-digit',
  //         year: 'numeric',
  //       })
  //
  //       return (
  //         <div
  //           style={{
  //             display: 'flex',
  //             flexDirection: 'row',
  //             justifyContent: 'space-between',
  //             position: 'relative',
  //           }}
  //         >
  //           <span style={{ color: 'white' }}>{formattedDate}</span>
  //           <button onClick={() => setOpenUserId(isOpen ? null : user.id)}>
  //             <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
  //               <g clipPath='url(#clip0_45764_12530)'>
  //                 <path
  //                   d='M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z'
  //                   fill='white'
  //                 />
  //                 <path
  //                   d='M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z'
  //                   fill='white'
  //                 />
  //                 <path
  //                   d='M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z'
  //                   fill='white'
  //                 />
  //               </g>
  //               <defs>
  //                 <clipPath id='clip0_45764_12530'>
  //                   <rect width='24' height='24' fill='white' />
  //                 </clipPath>
  //               </defs>
  //             </svg>
  //           </button>
  //           {isOpen && (
  //             <UserActionsMenu
  //               user={user}
  //               onClose={() => setOpenUserId(null)}
  //               buttonBlockClickHandler={buttonBlockClickHandler}
  //             />
  //           )}
  //         </div>
  //       )
  //     },
  //   },
  // ]


  return (
    <>
      <Button variant={'text-white'} onClick={() => navigate(-1)} style={{ padding: '0' }}>
        <svg className={'mr-[7px]'} width="24" height="24" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19 10.9998H7.14L10.77 6.63979C10.9397 6.43557 11.0214 6.17229 10.997 5.90786C10.9726 5.64344 10.8442 5.39953 10.64 5.22979C10.4358 5.06005 10.1725 4.97839 9.90808 5.00277C9.64365 5.02715 9.39974 5.15557 9.23 5.35979L4.23 11.3598C4.19636 11.4075 4.16628 11.4576 4.14 11.5098C4.14 11.5598 4.14 11.5898 4.07 11.6398C4.02467 11.7544 4.00094 11.8765 4 11.9998C4.00094 12.1231 4.02467 12.2451 4.07 12.3598C4.07 12.4098 4.07 12.4398 4.14 12.4898C4.16628 12.5419 4.19636 12.5921 4.23 12.6398L9.23 18.6398C9.32402 18.7527 9.44176 18.8434 9.57485 18.9057C9.70793 18.9679 9.85309 19 10 18.9998C10.2337 19.0002 10.4601 18.9189 10.64 18.7698C10.7413 18.6858 10.825 18.5827 10.8863 18.4664C10.9477 18.35 10.9855 18.2227 10.9975 18.0918C11.0096 17.9608 10.9957 17.8287 10.9567 17.7031C10.9176 17.5775 10.8542 17.4608 10.77 17.3598L7.14 12.9998H19C19.2652 12.9998 19.5196 12.8944 19.7071 12.7069C19.8946 12.5194 20 12.265 20 11.9998C20 11.7346 19.8946 11.4802 19.7071 11.2927C19.5196 11.1051 19.2652 10.9998 19 10.9998Z"
            fill="white" />
        </svg>
        <span>Back to Users List</span></Button>
      <div>
        {user ? <div>
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
            <div>
        <div className={'mt-[30px] mb-[35px]'}>
          <Tabs tabsSettings={tabsSettings} openActiveTab={openActiveTab} />
        </div>
          {activeTab==='Uploaded photos'&&<div>Uploaded photos</div>}
          {/*{activeTab==='Payments'&&<div><Table rows={} columns={}/></div>}*/}
          {/*{activeTab==='Followers'&&<div><Table rows={rowTableFollow} columns={}/></div>}*/}
          {/*{activeTab==='Following'&&<div><Table rows={rowTableFollow} columns={}/></div>}*/}
            </div>
            {activeTab!=="Uploaded photos"&&<Pagination elementCount={8} onPageChange={() => {}} />}
          </div>
          : <div className={'text-4xl'}>The user was not found</div>}
      </div>
    </>
  )
}

