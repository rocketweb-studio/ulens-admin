import {UserAvatar} from "@/entities/userAvatar/ui/UserAvatar.tsx";
import {timeAgo} from "@/shared/utils/timeAgo.ts";
import {IconBlock} from "@rocketweb-studio/ulens-ui-kit";

export const Post = () => {
  return (
    <div className='flex flex-col gap-[12px] w-[240px]'>
      <div className='w-[240px] h-[240px] bg-amber-950 '> photo</div>
      <div className='flex items-center justify-between '>
        <div className='flex items-center gap-[12px] '>
          <UserAvatar userName={'yr'} mode={'size'} width={36} height={36}/>
          <span> Имя </span>
        </div>
        <IconBlock className='cursor-pointer'/>
      </div>
      <p className='small_text text-[var(--color-light-900)]'>{timeAgo(new Date().toString())}</p>
      <p className='regular_text_14 w-[235px] h-[72px] overflow-hidden line-clamp-3'>Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Blanditiis ducimus eligendi, eos esse est eum hic neque odio odit omnis pariatur
        quo recusandae repellat unde, ut vero, voluptas voluptatem voluptates!</p>
    </div>
  );
};