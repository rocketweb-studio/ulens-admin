import { useQuery } from '@apollo/client/react'
import { getPhotosFromPostsForAdminQuery } from '@/shared/graphql/queries'

export const PhotosAsUser = ({userId,userName}:{userId:string|null,userName:string}) => {
  const {data}=useQuery(getPhotosFromPostsForAdminQuery,{variables:{
      input: {
        endCursorPostId: 'cursor',
        pageSize: 12,
        search: ""
      }
    }
  })
  console.log("userName: ",userName,"  userId: ",userId)
  const actualUser= data?.getAllPostsForAdmin?.items?.find((el)=>el.userName === userName)
  console.log("actualUser",actualUser)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      { actualUser?.images?.medium?.map((img, urlIndex) => {
          return <div key={`${urlIndex}`} className="relative pb-[100%] rounded-lg overflow-hidden">
            <img
              src={`${import.meta.env.VITE_MEDIA_URL}${img.url}`}
              alt={`Photo ${urlIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        })}
    </div>
  )
}

