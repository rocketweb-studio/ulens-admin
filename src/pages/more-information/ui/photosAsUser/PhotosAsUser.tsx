import { useState, useEffect, useMemo } from 'react'
import { useQuery } from '@apollo/client/react'
import { getPhotosFromPostsForAdminQuery } from '@/shared/graphql/queries'
import { Pagination } from '@rocketweb-studio/ulens-ui-kit'

interface ImageItem {
  url: string
  postId: string
}

export const PhotosAsUser = ({ userId, userName }: { userId: string | null, userName: string }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(12)
  const [allPosts, setAllPosts] = useState<any[]>([])
  const [hasMore, setHasMore] = useState(true)

  const { data, loading, error, fetchMore } = useQuery(getPhotosFromPostsForAdminQuery, {
    variables: {
      input: {
        endCursorPostId: null,
        pageSize: 50, // Начальный размер загрузки
        search: ""
      }
    }
  })

  // Инициализация данных
  useEffect(() => {
    if (data?.getAllPostsForAdmin) {
      const posts = data.getAllPostsForAdmin.items || []
      setAllPosts(posts)
      setHasMore(data.getAllPostsForAdmin.pageInfo.hasNextPage)
    }
  }, [data])

  // Фильтруем посты по userId
  const actualUserPosts = useMemo(() => {
    return allPosts.filter((post) => post.ownerId === userId)
  }, [allPosts, userId])

  // Собираем все изображения с безопасной проверкой
  const allImages = useMemo(() => {
    return actualUserPosts.flatMap((post): ImageItem[] => {
      // Безопасная проверка на наличие images.medium
      const images = post.images?.medium || []
      return images.map((img: any) => ({
        url: img.url,
        postId: post.id
      }))
    })
  }, [actualUserPosts])

  // Рассчитываем пагинированные изображения
  const paginatedImages = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize
    return allImages.slice(startIndex, startIndex + pageSize)
  }, [allImages, currentPage, pageSize])

  const totalImages = allImages.length

  // Функция для загрузки дополнительных данных
  const loadMorePosts = async () => {
    if (!hasMore || loading) return

    const lastPost = allPosts[allPosts.length - 1]
    if (!lastPost?.id) return

    await fetchMore({
      variables: {
        input: {
          endCursorPostId: lastPost.id,
          pageSize: 50,
          search: ""
        }
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev

        const newItems = fetchMoreResult.getAllPostsForAdmin.items || []
        const newHasMore = fetchMoreResult.getAllPostsForAdmin.pageInfo.hasNextPage

        setHasMore(newHasMore)

        return {
          getAllPostsForAdmin: {
            ...fetchMoreResult.getAllPostsForAdmin,
            items: [...prev.getAllPostsForAdmin.items, ...newItems]
          }
        }
      }
    })
  }

  // Обработчик изменения страницы
  const handlePageChange = ({ page }: { page: number, pageSize: number }) => {
    setCurrentPage(page)

    // Если приближаемся к концу доступных данных и есть еще данные на сервере, загружаем
    const maxVisibleIndex = page * pageSize
    const remainingLocalItems = totalImages - maxVisibleIndex

    if (remainingLocalItems < pageSize * 2 && hasMore && !loading) {
      loadMorePosts()
    }
  }

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize)
    setCurrentPage(1)
  }

  // Загрузка дополнительных данных при монтировании, если нужно
  useEffect(() => {
    if (totalImages === 0 && hasMore && !loading) {
      loadMorePosts()
    }
  }, [totalImages])

  console.log("userName: ", userName, " userId: ", userId)
  console.log("Total filtered posts: ", actualUserPosts.length)
  console.log("Total images: ", totalImages)
  console.log("Has more data: ", hasMore)

  if (loading && allPosts.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        Error: {error.message}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-600">
            {totalImages} image{totalImages !== 1 ? 's' : ''}
          </p>
        </div>
        {loading && allPosts.length > 0 && (
          <div className="text-sm text-blue-500">
            Loading more...
          </div>
        )}
      </div>

      {totalImages === 0 ? (
        <div className="text-center py-12 rounded-lg">
          <p className="text-gray-500">No images found for this user</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {paginatedImages.map((img, index) => (
              <div
                key={`${img.postId}-${img.url}-${index}`}
                className="group relative pb-[100%] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={`${import.meta.env.VITE_MEDIA_URL}${img.url}`}
                  alt={`Photo ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Pagination
              pageSize={pageSize}
              onPageChange={handlePageChange}
              currentPage={currentPage}
              elementCount={totalImages}
              onPageSizeChange={handlePageSizeChange}
            />
          </div>
        </>
      )}
    </div>
  )
}
