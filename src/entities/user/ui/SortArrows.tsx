type Props = {
  active: boolean
  direction: 'ASC' | 'DESC'
}

export const SortArrows = ({ active, direction }: Props) => {
  const activeColor = '#fff'
  const inactiveColor = '#777'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 6 }}>
      <svg width='10' height='10' viewBox='0 0 24 24' style={{ marginBottom: -2 }}>
        <path d='M7 14l5-5 5 5' fill={direction === 'ASC' && active ? activeColor : inactiveColor} />
      </svg>

      <svg width='10' height='10' viewBox='0 0 24 24'>
        <path d='M7 10l5 5 5-5' fill={direction === 'DESC' && active ? activeColor : inactiveColor} />
      </svg>
    </div>
  )
}
