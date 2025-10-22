import { Header } from "@/widgets/header";
import {Outlet} from "react-router";
import {ToastContainer} from "react-toastify";

export const RootLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <ToastContainer position='bottom-right' autoClose={2000} closeOnClick pauseOnHover theme='light' />
    </div>
  );
};