export const Header = () => {
  return (
    <header className="h-[60px] border-b border-[var(--color-dark-300)] px-15 py-3">

        <div className='flex justify-between items-center'>

          <div>
            <span className='large '>Ulens</span>
            <span className='small_text'>Super</span>
            <span className='semi_bold_small_text'>Admin</span>
          </div>
          <div>
            <select name="" id="">
              <option value="">English</option>
              <option value="">Russian</option>
            </select>
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