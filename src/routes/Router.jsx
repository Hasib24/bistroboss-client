import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../layout/MainLayout";
import Menu from "../pages/menu/Menu";
import Orderfood from "../pages/order/Orderfood";
import Login from "../pages/login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: "/",
          element:<Home></Home>
        },
        {
          path: "/menu",
          element:<Menu></Menu>
        },
        {
          path: "/order/:category",
          element:<Orderfood></Orderfood>
        },
        {
          path: "/login",
          element:<Login></Login>
        }
      ]
    },
  ]);

export default router;