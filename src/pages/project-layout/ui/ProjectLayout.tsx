import {Outlet} from "react-router";
import {SidebarWidget} from "@/widgets/sidebar";

export const ProjectLayout = () => {
  return (
    <div className='flex '>
      <SidebarWidget/>

      <div className='grow'>
        <Outlet/>
      </div>

    </div>
  );
};