import { Button, Tabs } from '@rocketweb-studio/ulens-ui-kit'
import { Link, useLocation, useNavigate } from 'react-router'
import { useState } from 'react'
import { formattedDateDDMMYYYY } from '@/shared/utils/formattedDate.ts'
import { ShowPayments } from '@/features/show-payments'
import type { Column } from '@/widgets/table/TableRow.tsx'
import type { User } from '@/pages/user-list'
import { Table } from '@/widgets/table/Table.tsx'
import { useQuery } from '@apollo/client/react'
import {
  getPhotosFromPostsForAdminQuery,
  getUserFollowersQuery,
  getUserFollowingsQuery
} from '@/shared/graphql/queries'


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
  const {data:followers}=useQuery(getUserFollowersQuery,{
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
     pageSize: 12,
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
  // МОК ДАННЫЕ!!! для реальных данных в rowTableFollow вместо zzz подставить  dataTable
  // const xxx = [
  //   { id: "5666666", userName: "Mickel", createdAt: new Date(), firstName: "Michael", lastName: "Johnson" },
  //   { id: "fvdfdfdfv", userName: "ODODDO", createdAt: new Date(), firstName: "Oliver", lastName: "Davis" },
  //   { id: "JFDSKLFKL", userName: "dddOOORRa", createdAt: new Date(), firstName: "Daniel", lastName: "Roberts" },
  //   { id: "3e80ccc9-ab04-4a8d-b50d-c8686aec496f", userName: "John", createdAt: new Date(), firstName: "John", lastName: "Smith" },
  //   { id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", userName: "EmmaW", createdAt: new Date(), firstName: "Emma", lastName: "Wilson" },
  //   { id: "b2c3d4e5-f6g7-8901-bcde-f23456789012", userName: "LiamBrown", createdAt: new Date(), firstName: "Liam", lastName: "Brown" },
  //   { id: "c3d4e5f6-g7h8-9012-cdef-345678901234", userName: "SophiaT", createdAt: new Date(), firstName: "Sophia", lastName: "Taylor" },
  //   { id: "d4e5f6g7-h8i9-0123-defg-456789012345", userName: "NoahMiller", createdAt: new Date(), firstName: "Noah", lastName: "Miller" },
  //   { id: "e5f6g7h8-i9j0-1234-efgh-567890123456", userName: "OliviaDavis", createdAt: new Date(), firstName: "Olivia", lastName: "Davis" },
  //   { id: "f6g7h8i9-j0k1-2345-fghi-678901234567", userName: "WilliamGarcia", createdAt: new Date(), firstName: "William", lastName: "Garcia" },
  //   { id: "g7h8i9j0-k1l2-3456-ghij-789012345678", userName: "AvaRodriguez", createdAt: new Date(), firstName: "Ava", lastName: "Rodriguez" },
  //   { id: "h8i9j0k1-l2m3-4567-hijk-890123456789", userName: "JamesMartinez", createdAt: new Date(), firstName: "James", lastName: "Martinez" },
  //   { id: "i9j0k1l2-m3n4-5678-ijkl-901234567890", userName: "IsabellaHernandez", createdAt: new Date(), firstName: "Isabella", lastName: "Hernandez" },
  //   { id: "j0k1l2m3-n4o5-6789-jklm-012345678901", userName: "BenjaminLopez", createdAt: new Date(), firstName: "Benjamin", lastName: "Lopez" },
  //   { id: "k1l2m3n4-o5p6-7890-klmn-123456789012", userName: "MiaGonzalez", createdAt: new Date(), firstName: "Mia", lastName: "Gonzalez" },
  //   { id: "l2m3n4o5-p6q7-8901-lmno-234567890123", userName: "LucasWilson", createdAt: new Date(), firstName: "Lucas", lastName: "Wilson" },
  //   { id: "m3n4o5p6-q7r8-9012-mnop-345678901234", userName: "CharlotteAnderson", createdAt: new Date(), firstName: "Charlotte", lastName: "Anderson" },
  //   { id: "n4o5p6q7-r8s9-0123-nopq-456789012345", userName: "HenryThomas", createdAt: new Date(), firstName: "Henry", lastName: "Thomas" },
  //   { id: "o5p6q7r8-s9t0-1234-opqr-567890123456", userName: "AmeliaJackson", createdAt: new Date(), firstName: "Amelia", lastName: "Jackson" },
  //   { id: "p6q7r8s9-t0u1-2345-pqrs-678901234567", userName: "AlexanderWhite", createdAt: new Date(), firstName: "Alexander", lastName: "White" }
  // ];
  // const yyy = [
  //   { id: "sdfvsdvsd", userName: "John", createdAt: new Date(), firstName: "John", lastName: "Doe" },
  //   { id: "qwerty1234", userName: "SarahM", createdAt: new Date(), firstName: "Sarah", lastName: "Moore" },
  //   { id: "asdfgh5678", userName: "DavidK", createdAt: new Date(), firstName: "David", lastName: "King" },
  //   { id: "zxcvbn9012", userName: "LisaP", createdAt: new Date(), firstName: "Lisa", lastName: "Parker" },
  //   { id: "poiuyt3456", userName: "RobertL", createdAt: new Date(), firstName: "Robert", lastName: "Lee" },
  //   { id: "lkjhgf7890", userName: "JenniferW", createdAt: new Date(), firstName: "Jennifer", lastName: "Wright" },
  //   { id: "mnbvcx1234", userName: "ThomasH", createdAt: new Date(), firstName: "Thomas", lastName: "Harris" },
  //   { id: "qazwsx5678", userName: "NancyC", createdAt: new Date(), firstName: "Nancy", lastName: "Clark" },
  //   { id: "edcrfv9012", userName: "KevinS", createdAt: new Date(), firstName: "Kevin", lastName: "Scott" },
  //   { id: "tgbyhn3456", userName: "PatriciaG", createdAt: new Date(), firstName: "Patricia", lastName: "Green" },
  //   { id: "yhnujm7890", userName: "BrianA", createdAt: new Date(), firstName: "Brian", lastName: "Adams" },
  //   { id: "ikmjun1234", userName: "LindaB", createdAt: new Date(), firstName: "Linda", lastName: "Baker" },
  //   { id: "olpkiu5678", userName: "StevenN", createdAt: new Date(), firstName: "Steven", lastName: "Nelson" },
  //   { id: "awszxc9012", userName: "BarbaraC", createdAt: new Date(), firstName: "Barbara", lastName: "Carter" },
  //   { id: "qscwed3456", userName: "PaulM", createdAt: new Date(), firstName: "Paul", lastName: "Mitchell" },
  //   { id: "rfvtgb7890", userName: "SusanP", createdAt: new Date(), firstName: "Susan", lastName: "Perez" },
  //   { id: "yhnmki1234", userName: "MarkR", createdAt: new Date(), firstName: "Mark", lastName: "Roberts" },
  //   { id: "ujmikn5678", userName: "KarenT", createdAt: new Date(), firstName: "Karen", lastName: "Turner" },
  //   { id: "plokij9012", userName: "GeorgeP", createdAt: new Date(), firstName: "George", lastName: "Phillips" },
  //   { id: "wsxqaz3456", userName: "DonnaC", createdAt: new Date(), firstName: "Donna", lastName: "Campbell" }
  // ];
  // const zzz=activeTab==="Followers"?xxx:yyy


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
        <a href={profileLink} target='_blank' rel='noopener noreferrer' className={"border-b-[1px]"}>{/*className={s.link}*/}
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
              {activeTab === 'Uploaded photos' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {photos?.getAllPostsForAdmin?.items?.map((photo, photoIndex) =>
                    photo?.images?.medium?.map((img, urlIndex) => (
                      <div key={`${photoIndex}-${urlIndex}`} className="relative pb-[100%] rounded-lg overflow-hidden">
                        <img
                          src={`${import.meta.env.VITE_MEDIA_URL}${img.url}`}
                          alt={`${import.meta.env.VITE_MEDIA_URL}${img.url}`} /*{`Photo ${photoIndex + 1}`}*/
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))
                  )}
                </div>
              )}
              {activeTab === 'Payments' && (
                <div>
                  <ShowPayments userId={user.id} />
                </div>
              )}
              {activeTab === 'Followers' && <div><Table rows={rowTableFollow} columns={columnsTable}/></div>}
              {activeTab === 'Following' && <div><Table rows={rowTableFollow} columns={columnsTable}/></div>}
            </div>
            {/*{activeTab!=="Uploaded photos"&&<Pagination elementCount={8} onPageChange={() => {}} />}*/}
          </div>
          : <div className={'text-4xl'}>The user was not found</div>}
      </div>
    </>
  )
}

