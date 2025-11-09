type Props = {
  width?: number
  height?: number
  avatarOwner?: string | null
  userName: string
  mode: 'fill' | 'size'
}
export const UserAvatar = ({ userName = '', mode, avatarOwner, height = 0, width = 0 }: Props) => {
  const viewMode = mode === 'fill' ? { fill: true, style: { objectFit: 'cover' as const } } : { height, width }
  return (
    <>
      {avatarOwner ?
        <img
          className='w-[36px] h-[36px] rounded-[50%] object-cover'
          src={`${import.meta.env.VITE_MEDIA_URL}${avatarOwner}`}
          alt={'avatar'}
          {...viewMode}
        />
      : <div
          className='rounded-full object-cover bg-[var(--color-light-900)] flex items-center justify-center'
          style={{ height, width }}
        >
          {String(userName).slice(0, 2).toUpperCase()}
        </div>
      }
    </>
  )
}
