import { createBrowserRouter } from 'react-router'
import { SignInPage } from '@/pages/sign-in'
import { UserList } from '@/pages/user-list'
import { ProjectLayout } from '@/pages/project-layout'
import { Statistics } from '@/pages/statistics'
import { RootLayout } from '@/pages/root-layout'
import { PaymentsList } from '@/pages/payments-list'
import { PostsList } from '@/pages/posts-list'
import { PATH } from '@/shared'

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { path: PATH.main, Component: SignInPage },
      {
        Component: ProjectLayout,
        children: [
          { path: PATH.userList, Component: UserList },
          { path: PATH.statistics, Component: Statistics },
          { path: PATH.paymentsList, Component: PaymentsList },
          { path: PATH.postsList, Component: PostsList },
        ],
      },
    ],
  },
])
