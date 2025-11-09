import { CustomTable, Input } from '@rocketweb-studio/ulens-ui-kit'
import type { Column } from '@rocketweb-studio/ulens-ui-kit/dist/components/CustomTable/types'
import { UserAvatar } from '@/entities/userAvatar/ui/UserAvatar'
import { useState } from 'react'
export type Payment = {
  id: string
  fullName: string
  dateAdded: string
  amount: number
  subscription: string
  paymentMethod: 'Stripe' | 'PayPal'
  userId: string
  currency: string
}

const mockPayments: Payment[] = [
  {
    id: '1',
    fullName: 'Ivan Yakymenko',
    dateAdded: '2022-12-12',
    amount: 508,
    subscription: '1 day',
    paymentMethod: 'Stripe',
    userId: 'user_1',
    currency: 'USD',
  },
  {
    id: '2',
    fullName: 'Kirill Mikulich',
    dateAdded: '2022-12-12',
    amount: 508,
    subscription: '7 days',
    paymentMethod: 'PayPal',
    userId: 'user_2',
    currency: 'USD',
  },
  {
    id: '3',
    fullName: 'Anton Antonov',
    dateAdded: '2022-12-12',
    amount: 508,
    subscription: '7 days',
    paymentMethod: 'Stripe',
    userId: 'user_3',
    currency: 'USD',
  },
  {
    id: '4',
    fullName: 'Oleg Olegovich',
    dateAdded: '2022-12-12',
    amount: 508,
    subscription: '7 days',
    paymentMethod: 'Stripe',
    userId: 'user_4',
    currency: 'USD',
  },
  {
    id: '5',
    fullName: 'Anna Votakaya',
    dateAdded: '2022-12-12',
    amount: 508,
    subscription: '7 days',
    paymentMethod: 'PayPal',
    userId: 'user_5',
    currency: 'USD',
  },
  {
    id: '6',
    fullName: 'Nikilay Kelya',
    dateAdded: '2022-12-12',
    amount: 508,
    subscription: '7 days',
    paymentMethod: 'Stripe',
    userId: 'user_6',
    currency: 'USD',
  },
  {
    id: '7',
    fullName: 'Maria Ivanova',
    dateAdded: '2022-12-11',
    amount: 254,
    subscription: '1 day',
    paymentMethod: 'PayPal',
    userId: 'user_7',
    currency: 'USD',
  },
  {
    id: '8',
    fullName: 'Sergey Petrov',
    dateAdded: '2022-12-10',
    amount: 1016,
    subscription: '30 days',
    paymentMethod: 'Stripe',
    userId: 'user_8',
    currency: 'USD',
  },
  {
    id: '9',
    fullName: 'Elena Sidorova',
    dateAdded: '2022-12-09',
    amount: 508,
    subscription: '7 days',
    paymentMethod: 'PayPal',
    userId: 'user_9',
    currency: 'USD',
  },
  {
    id: '10',
    fullName: 'Dmitry Kozlov',
    dateAdded: '2022-12-08',
    amount: 1524,
    subscription: '90 days',
    paymentMethod: 'Stripe',
    userId: 'user_10',
    currency: 'USD',
  },
  {
    id: '8',
    fullName: 'Sergey Petrov',
    dateAdded: '2022-12-10',
    amount: 1016,
    subscription: '30 days',
    paymentMethod: 'Stripe',
    userId: 'user_8',
    currency: 'USD',
  },
  {
    id: '9',
    fullName: 'Elena Sidorova',
    dateAdded: '2022-12-09',
    amount: 508,
    subscription: '7 days',
    paymentMethod: 'PayPal',
    userId: 'user_9',
    currency: 'USD',
  },
  {
    id: '10',
    fullName: 'Dmitry Kozlov',
    dateAdded: '2022-12-08',
    amount: 1524,
    subscription: '90 days',
    paymentMethod: 'Stripe',
    userId: 'user_10',
    currency: 'USD',
  },
]

const paymentColumns: Column<Payment>[] = [
  {
    key: 'fullName',
    title: 'Full Name',
    width: '200px',
    sortable: true,
    render: (value: string) => (
      <div className={'flex gap-x-3 items-center'}>
        <UserAvatar userName={value} mode={'size'} width={36} height={36}></UserAvatar>
        <span>{value}</span>
      </div>
    ),
  },
  {
    key: 'dateAdded',
    title: 'Date added',
    width: '120px',
    sortable: true,
    render: (value: string) => new Date(value).toLocaleDateString('en-GB'),
  },
  {
    key: 'amount',
    title: 'Amount, $',
    width: '100px',
    sortable: true,
    render: (value: number) => `$${value}`,
  },
  {
    key: 'subscription',
    title: 'Subscription',
    width: '100px',
    sortable: true,
  },
  {
    key: 'paymentMethod',
    title: 'Payment Method',
    width: '120px',
    sortable: true,
    render: (value: 'Stripe' | 'PayPal') => <span>{value}</span>,
  },
]

export const PaymentsList = () => {
  const [search, setSearch] = useState('')

  return (
    <section>
      <Input
        className={'mb-9'}
        value={search}
        placeholder={'Search'}
        onChange={(event) => setSearch(event.target.value)}
      />
      <CustomTable data={mockPayments} columns={paymentColumns} paginated></CustomTable>
    </section>
  )
}
