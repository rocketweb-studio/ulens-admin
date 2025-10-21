import {Outlet} from "react-router";

export const ProjectLayout = () => {
  return (
    <div>
      <h1>Project Layout</h1>
      <h2>SideBar in Project Layout</h2>
      <Outlet/>
    </div>
  );
};