import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Media from "../pages/Media/Media";
import Home from '../pages/Home/Home/Home'

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
          element:<Media/>,
          loader: async()=>fetch("http://localhost:5000/post")
        }
      ]
    },

  ]);

  export default router