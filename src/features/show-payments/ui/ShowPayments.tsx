import { useQuery } from '@apollo/client/react'
import { getUserPaymentsQuery } from '@/shared/graphql/queries'
import { CustomTable } from '@rocketweb-studio/ulens-ui-kit'
import type { Column } from '@rocketweb-studio/ulens-ui-kit/dist/components/CustomTable/types'
import { formattedDateDDMMYYYY } from '@/shared/utils/formattedDate'

type Props = {
  userId: string
}

type Payment = {
  dateOfPayment: string | number
  endSubscription: string | number
  amount: number
  subscriptionType: string
  paymentType: string
}

const columns: Column<Payment>[] = [
  {
    key: 'dateOfPayment',
    title: 'Date of Payment',
    width: '120px',
    render: (value) => <span>{value}</span>,
  },
  {
    key: 'endSubscription',
    title: 'End date of subscription',
    width: '120px',
    render: (value) => <span>{value}</span>,
  },
  {
    key: 'amount',
    title: 'Amount, $',
    width: '120px',
    render: (value: number) => `$${value}`,
  },
  {
    key: 'subscriptionType',
    title: 'Subscription Type',
    width: '120px',
    render: (value) => <span>{value}</span>,
  },
  {
    key: 'paymentType',
    title: 'Payment Type',
    width: '120px',
    render: (value) => <span>{value}</span>,
  },
]

export const ShowPayments = ({ userId }: Props) => {
  const { data, loading } = useQuery(getUserPaymentsQuery, {
    variables: {
      input: {
        userId: userId,
      },
    },
  })

  const dataForTable = data?.getUserPayments.items.map(
    (item): Payment => ({
      dateOfPayment: item.expiresAt ? formattedDateDDMMYYYY(item.expiresAt) : '',
      endSubscription: item.expiresAt ? formattedDateDDMMYYYY(item.expiresAt) : '',
      amount: item.amount,
      subscriptionType: item.interval,
      paymentType: item.provider,
    }),
  )

  return (
    <div>
      {loading && !data?.getUserPayments.items.length ?
        <div>Loading...</div>
      : <CustomTable data={dataForTable || []} columns={columns} paginated></CustomTable>}
    </div>
  )
}
