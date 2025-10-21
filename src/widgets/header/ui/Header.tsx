import { PATH } from "@/shared";
import {IconArrowIosDownOutline, IconFlagUnitedKingdom} from "@rocketweb-studio/ulens-ui-kit";
import {Link} from "react-router";

export const Header = () => {
  return (
    <header className="h-[60px] border-b border-[var(--color-dark-300)] px-[60px] py-3">

      <div className='flex justify-between items-center' >
        <div>
          <span className='large '>Ulens</span>
          <span className='small_text'>Super</span>
          <span className='semi_bold_small_text'>Admin</span>
        </div>

        <div className='flex gap-2'> ссылки времено для навигации - <Link to={PATH.main}>main</Link>
          <Link to={PATH.userList}>users</Link>
          <Link to={PATH.statistics}>statistics</Link>
          <Link to={PATH.paymentsList}>payments</Link>
          <Link to={PATH.postsList}>posts</Link>
        </div>

        <div className='regular_text_16 h-[36px] border-1 border-[var(--color-dark-300)] flex items-center p-[12px]'>
          <IconFlagUnitedKingdom/><span className='pl-[12px] pr-[28px]'>English</span><IconArrowIosDownOutline/>
        </div>
      </div>
    </header>
  );
};


// <div>
//   <h1>Header</h1>
//   <div className="flex flex-row gap-2 ">
//     <h2>ссылки в хедере временно - </h2>
//     <Link to={PATH.main}>main</Link>
//     <Link to={PATH.userList}>users</Link>
//     <Link to={PATH.statistics}>statistics</Link>
//     <Link to={PATH.paymentsList}>payments</Link>
//     <Link to={PATH.postsList}>posts</Link>
//   </div>
// </div>