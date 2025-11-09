import { Outlet } from 'react-router'
import { SidebarWidget } from '@/widgets/sidebar'

export const ProjectLayout = () => {
  return (
    <div className='flex '>
      <SidebarWidget />

      <div className='grow pt-[60px] px-[25px]'>
        <Outlet />
      </div>
    </div>
  )
}
