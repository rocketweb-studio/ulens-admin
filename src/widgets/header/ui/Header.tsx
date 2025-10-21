import {Link} from "react-router";
import {PATH} from "@/shared";

export const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <div className="flex flex-row gap-2 ">
        <h2>ссылки в хедере временно - </h2>
        <Link to={PATH.main}>main</Link>
        <Link to={PATH.userList}>users</Link>
        <Link to={PATH.statistics}>statistics</Link>
        <Link to={PATH.paymentsList}>payments</Link>
        <Link to={PATH.postsList}>posts</Link>
      </div>
    </div>
  );
};