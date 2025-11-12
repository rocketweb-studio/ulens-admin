import { CustomTable, Input } from '@rocketweb-studio/ulens-ui-kit'
import type { Column } from '@rocketweb-studio/ulens-ui-kit/dist/components/CustomTable/types'
import { UserAvatar } from '@/entities/userAvatar/ui/UserAvatar'
import { useState } from 'react'
import { useQuery } from '@apollo/client/react'
import { getPaymentsForAdminQuery } from '@/shared/graphql/queries'
import { useDebounce } from '@/shared/hooks'

export type Payment = {
  id: number
  userName: string
  fullName: string
  dateAdded: string
  amount: number
  subscription: string
  paymentMethod: string
  userId: string
  currency: string
}

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
    key: 'userName',
    title: 'User Name',
    width: '200px',
    sortable: true,
    render: (value) => <span>{value}</span>,
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
  const [pageSize, setPageSize] = useState<number>(10)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const debouncedSearchTerm = useDebounce(search, 1000)
  const { data, loading } = useQuery(getPaymentsForAdminQuery, {
    variables: { input: { pageSize: pageSize, pageNumber: currentPage, search: debouncedSearchTerm } },
  })
  const totalCount = data?.getPaymentsForAdmin.totalCount || 0

  const payments = data?.getPaymentsForAdmin.items.map(
    (payment): Payment => ({
      id: payment.id,
      fullName: `${payment.user.firstName} ${payment.user.lastName}`,
      dateAdded: new Date(payment.createdAt).toDateString(),
      amount: payment.amount,
      subscription: payment.interval,
      paymentMethod: payment.provider,
      userId: payment.user.id,
      currency: payment.currency,
      userName: payment.user.userName,
    }),
  )

  return (
    <section>
      <Input
        className={'mb-9'}
        value={search}
        placeholder={'Search'}
        onChange={(event) => {
          console.log(event.target.value)
          setSearch(event.target.value)
        }}
      />
      <CustomTable
        data={payments || ([] as Payment[])}
        columns={paymentColumns}
        paginated
        currentPage={currentPage}
        elementCount={totalCount}
        onPageChange={(page) => setCurrentPage(page)}
        onPageSizeChange={(pageSize) => setPageSize(pageSize)}
        pageSize={pageSize}
      ></CustomTable>
    </section>
  )
}
