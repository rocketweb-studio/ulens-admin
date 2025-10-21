import { Header } from "@/widgets/header";
import {Outlet} from "react-router";

export const RootLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  );
};