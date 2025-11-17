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
  const actualUser= data?.getAllPostsForAdmin?.items?.filter((el)=>el.ownerId === userId)
  console.log("actualUser",actualUser)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      { actualUser?.map((post, index) => {
        const images=post.images.medium
        return (images.map(img=>{
          return <div key={`${index}`} className="relative pb-[100%] rounded-lg overflow-hidden">
            <img
              src={`${import.meta.env.VITE_MEDIA_URL}${img.url}`}
              alt={`Photo ${index}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>}))
        })}
    </div>
  )
}

