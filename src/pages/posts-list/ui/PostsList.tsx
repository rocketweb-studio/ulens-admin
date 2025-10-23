import {Input} from "@rocketweb-studio/ulens-ui-kit";
import {Post} from "@/entities/post/ui/Post.tsx";

export const PostsList = () => {
  return (
    <section className='pt-[60px] px-[25px] '>
      <Input placeholder={'Search'}/>
      <div>
        <Post/>
      </div>
    </section>
  );
};