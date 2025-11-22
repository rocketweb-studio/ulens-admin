import { UserAvatar } from '@/entities/userAvatar/ui/UserAvatar.tsx'
import { timeAgo } from '@/shared/utils/timeAgo.ts'
import { Button, CustomSwiper, IconBlock, IconUnblock } from '@rocketweb-studio/ulens-ui-kit'
import type { ImageModel, PostModel } from '@/shared/graphql/generated/graphql.ts'

export type PostData = Pick<PostModel, 'id' | 'createdAt' | 'description' | 'avatarOwner' | 'userName'> & {
  images: {
    medium: Array<Pick<ImageModel, 'url'>>
  }
  ownerId: string
  isOwnerBlocked: boolean
}

type Props = {
  postItem: PostData
  onUserAction?: (id: string, userName: string, blockedStatus: boolean) => void
}

export const Post = ({ postItem, onUserAction }: Props) => {
  return (
    <div className='flex flex-col gap-[12px] w-[240px]'>
      <CustomSwiper
        slides={postItem.images.medium.map((image, index) => ({
          id: index,
          content: (
            <img
              key={postItem.id}
              className='w-[240px] h-[240px] object-cover'
              src={`${import.meta.env.VITE_MEDIA_URL}${image.url}`}
              alt='post photo'
            />
          ),
        }))}
      />
      <div className='flex items-center justify-between '>
        <div className='flex items-center gap-[12px] '>
          <UserAvatar userName={'yr'} avatarOwner={postItem.avatarOwner} mode={'size'} width={36} height={36} />
          <span>{postItem.userName}</span>
        </div>
        <Button
          variant={'text-white'}
          onClick={() => onUserAction?.(postItem.ownerId, postItem.userName, postItem.isOwnerBlocked || false)}
        >
          {!postItem.isOwnerBlocked ?
            <IconBlock />
          : <IconUnblock />}
        </Button>
      </div>
      <p className='small_text text-[var(--color-light-900)]'>{timeAgo(postItem.createdAt)}</p>
      <p className='regular_text_14 w-[235px] h-[72px] overflow-hidden line-clamp-3'>{postItem.description}</p>
    </div>
  )
}
