import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Media from "../pages/Media/Media";
import Home from '../pages/Home/Home/Home'
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/media',
          element:<PrivateRoute><Media/></PrivateRoute>,
          loader: async()=>fetch("http://localhost:5000/post")
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:'/login',
          element:<Login/>
        }
      ]
    },

  ]);

  export default router