import { Input } from '@rocketweb-studio/ulens-ui-kit'
import { Post, type PostData } from '@/entities/post/ui/Post.tsx'
import { useQuery, useSubscription } from '@apollo/client/react'
import { useEffect, useRef, useState } from 'react'
import { getPostsSubscription } from '@/shared/graphql/subscription'
import { getAllPostsForAdminQuery } from '@/shared/graphql/queries'
import { useDebounce, useModal } from '@/shared/hooks'
import { UserBan } from '@/features/user-ban'

type PostsData = PostData[]

export const PostsList = () => {
  const [search, setSearch] = useState('')
  const debouncedSearchTerm = useDebounce(search, 1000)
  const [postsData, setPostsData] = useState<PostsData>([])
  const observerTarget = useRef<HTMLDivElement>(null)
  const [hasNextPage, setHasNextPage] = useState<boolean>(true)
  const { isOpen: isBanModalOpen, closeModal: closeBanModal, openModal: openBanModal } = useModal()
  const [currentUserId, setCurrentUserId] = useState<string>('')
  const [currentUserName, setCurrentUserName] = useState<string>('')
  const [currentUserBlockStatus, setCurrentUserBlockStatus] = useState<boolean>(false)

  const { data, loading, fetchMore } = useQuery(getAllPostsForAdminQuery, {
    variables: { input: { endCursorPostId: '', pageSize: 5, search: debouncedSearchTerm } },
  })
  const { data: dataSubs } = useSubscription(getPostsSubscription)

  const buttonBlockClickHandler = (id: string, userName: string, blockedStatus: boolean) => {
    setCurrentUserName(userName)
    setCurrentUserId(id)
    setCurrentUserBlockStatus(blockedStatus)
    openBanModal()
  }

  console.log(debouncedSearchTerm)
  // Подписка - новые посты добавляются В НАЧАЛО автоматически
  useEffect(() => {
    if (dataSubs?.newPostAdded) {
      const newPost =
        dataSubs?.newPostAdded.userName.toLowerCase().includes(search.toLowerCase()) ? dataSubs.newPostAdded : null
      if (newPost) setPostsData((prevState) => [newPost, ...prevState])
    }
  }, [dataSubs])

  const loadMore = async (endPostId: string) => {
    if (hasNextPage) {
      try {
        const result = await fetchMore({
          variables: {
            input: {
              endCursorPostId: endPostId,
              pageSize: 5,
              search: debouncedSearchTerm,
            },
          },
        })

        if (result.data?.getAllPostsForAdmin?.items) {
          const newPosts = result.data.getAllPostsForAdmin.items
          setPostsData((prevState) => [...prevState, ...newPosts])
          setHasNextPage(result.data?.getAllPostsForAdmin?.pageInfo.hasNextPage)
        }
      } catch (error) {
        console.error('Error loading more posts:', error)
      }
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !loading && postsData[postsData.length - 1].id) {
          let endPostId = postsData[postsData.length - 1].id
          loadMore(endPostId)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '30px', // Начинаем загрузку за 100px до конца
      },
    )

    if (observerTarget.current) {
      observer.observe(observerTarget.current)
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current)
      }
      observer.disconnect()
    }
  }, [postsData])

  useEffect(() => {
    if (data?.getAllPostsForAdmin?.items) {
      setHasNextPage(data?.getAllPostsForAdmin.pageInfo.hasNextPage)
      setPostsData(data.getAllPostsForAdmin.items)
    }
  }, [data, debouncedSearchTerm])

  return (
    <section>
      <Input value={search} placeholder={'Search by user name'} onChange={(event) => setSearch(event.target.value)} />

      {loading && !postsData.length ?
        <div className={'flex justify-center mt-30'}>Loading data...</div>
      : <>
          <div className='flex flex-wrap gap-[12px]'>
            {postsData.map((el) => (
              <Post key={el.id} postItem={el} onUserAction={buttonBlockClickHandler} />
            ))}
          </div>

          {/* Элемент-триггер для Intersection Observer */}
          <div ref={observerTarget} className='py-4 text-center'></div>
        </>
      }
      <UserBan
        isOpen={isBanModalOpen}
        onClose={closeBanModal}
        userId={currentUserId}
        isBlocked={currentUserBlockStatus}
        userName={currentUserName}
      />
    </section>
  )
}
