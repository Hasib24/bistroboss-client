import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../layout/MainLayout";
import Menu from "../pages/menu/Menu";
import Orderfood from "../pages/order/Orderfood";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import PrivateRoutes from "./PrivateRoutes";
import Private from "../pages/private/Private";

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
          path: "/private",
          element: <PrivateRoutes><Private></Private></PrivateRoutes>
        },
        {
          path: "/order/:category",
          element:<Orderfood></Orderfood>
        },
        {
          path: "/login",
          element:<Login></Login>
        },
        {
          path: "/register",
          element:<Register></Register>
        }
      ]
    },
  ]);

export default router;