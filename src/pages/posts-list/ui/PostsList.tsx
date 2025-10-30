import {Input} from "@rocketweb-studio/ulens-ui-kit";
import {Post, type PostData} from "@/entities/post/ui/Post.tsx";
import {useQuery, useSubscription} from "@apollo/client/react";
import {useEffect, useRef, useState} from "react";
import {getPostsSubscription} from "@/shared/graphql/subscription";
import {getAllPostsForAdminQuery} from "@/shared/graphql/queries";

type PostsData = PostData[]

export const PostsList = () => {
  const [postsData, setPostsData] = useState<PostsData>([]);
  const observerTarget = useRef<HTMLDivElement>(null);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

  const {data, loading, fetchMore} = useQuery(getAllPostsForAdminQuery, {
    variables: {input: {endCursorPostId: '', pageSize: 5, search: '' }}
  });
  const {data: dataSubs} = useSubscription(getPostsSubscription);

  // Подписка - новые посты добавляются В НАЧАЛО автоматически
  useEffect(() => {
    if (dataSubs?.newPostAdded) {
      setPostsData((prevState) => [dataSubs.newPostAdded, ...prevState]);
    }
  }, [dataSubs]);


  const loadMore = async (endPostId: string) => {
    if (hasNextPage) {
      try {
        const result = await fetchMore({
          variables: {
            input: {
              endCursorPostId: endPostId,
              pageSize: 5
            }
          }
        });

        if (result.data?.getAllPostsForAdmin?.items) {
          const newPosts = result.data.getAllPostsForAdmin.items;
          setPostsData((prevState) => [...prevState, ...newPosts]);
          setHasNextPage(result.data?.getAllPostsForAdmin?.pageInfo.hasNextPage)
        }
      } catch (error) {
        console.error('Error loading more posts:', error);
      }
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !loading && postsData[postsData.length - 1].id) {
            let endPostId = postsData[postsData.length - 1].id
            loadMore(endPostId);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '30px' // Начинаем загрузку за 100px до конца
      }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
      observer.disconnect();
    };
  }, [postsData]);

  useEffect(() => {
    if (data?.getAllPostsForAdmin?.items) {
      setPostsData(data.getAllPostsForAdmin.items);
    }
  }, [data]);

  if (loading && !postsData.length) {
    return <div className={'flex justify-center mt-30'}>Loading data...</div>;
  }

  return (
    <section>
      <Input placeholder={'Search by user name'}/>
      <div className='flex flex-wrap gap-[12px]'>
        {postsData.map(el => (
          <Post key={el.id} postItem={el}/>
        ))}
      </div>

      {/* Элемент-триггер для Intersection Observer */}
      <div ref={observerTarget} className='py-4 text-center'>
      </div>
    </section>
  );
};
