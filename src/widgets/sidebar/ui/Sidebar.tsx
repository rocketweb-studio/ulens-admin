import {
  IconCreditCardOutline,
  IconImageOutline,
  IconPerson,
  IconTrendingUp,
  Sidebar,
} from '@rocketweb-studio/ulens-ui-kit'
import { Link, Navigate, useLocation } from 'react-router'
import { PATH } from '@/shared'

export const SidebarWidget = () => {
  const location = useLocation()

  const accessToken = localStorage.getItem('adminAccessToken')
  if (!accessToken) {
    return <Navigate to={PATH.main} replace />
  }

  const sidebarLinks = [
    {
      icon: IconPerson,
      title: 'Users list',
      href: PATH.userList,
      isActive: PATH.userList === location.pathname,
    },
    {
      icon: IconTrendingUp,
      title: 'Statistics',
      href: PATH.statistics,
      isActive: PATH.statistics === location.pathname,
    },
    {
      icon: IconCreditCardOutline,
      title: 'Payments list',
      href: PATH.paymentsList,
      isActive: PATH.paymentsList === location.pathname,
    },
    {
      icon: IconImageOutline,
      title: 'Posts list',
      href: PATH.postsList,
      isActive: PATH.postsList === location.pathname,
    },
  ]

  return (
    <div className='min-w-[220px] '>
      <div className='fixed border-r border-[var(--color-dark-300)]  h-screen'>
        <Sidebar sidebarLinks={sidebarLinks} LinkComponent={Link} />
      </div>
    </div>
  )
}
