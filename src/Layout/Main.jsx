import { Outlet } from "react-router-dom";
import Navbar from './../pages/Home/Header/Navbar';


const Main = () => {
  return <>
  <Navbar/>
  <Outlet/>
  </>;
};

export default Main;
