import {Input} from "@rocketweb-studio/ulens-ui-kit";
import {Post, type PostData} from "@/entities/post/ui/Post.tsx";
import {useQuery, useSubscription} from "@apollo/client/react";
import {useEffect, useState} from "react";
import { getPostsSubscription } from "@/shared/graphql/subscription";
import {getAllPostsForAdminQuery} from "@/shared/graphql/queries";

type PostsData = PostData[]

export const PostsList = () => {
  const {data, loading} = useQuery(getAllPostsForAdminQuery, {variables: {input: {endCursorPostId: '', pageSize: 2}}});
  const [postsData, setPostsData] = useState<PostsData>([]);
  const {data: dataSubs} = useSubscription(getPostsSubscription)
  console.log('s',dataSubs)

  useEffect(() => {
    if (data) {
      setPostsData((prevState)=>[...prevState,...data?.getAllPostsForAdmin.items])
    }
  }, [data]);

  useEffect(() => {
    if (dataSubs) {
      setPostsData((prevState => [dataSubs?.newPostAdded!, ...prevState]))
    }
  }, [dataSubs]);


  if (loading && !data) {
    return <div>Loading...</div>;
  }

  // setPostsData
  // const postsData = data?.getAllPostsForAdmin.items? data?.getAllPostsForAdmin.items : []
  // const postsData = dataSubs? [dataSubs.newPostAdded] : []
  // console.log(postsData.newPostAdded)

  console.log(data?.getAllPostsForAdmin.items);


  return (
    <section className='pt-[60px] px-[25px] '>
      <Input placeholder={'Search'}/>
      <div className='flex flex-wrap gap-[12px]'>
        {postsData.map(el => (
          <Post key={el.id} postItem={el}/>
        ))}
      </div>
    </section>
  );
};