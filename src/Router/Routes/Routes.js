import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import Main from "../../layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import CatagoriesPost from "../../Pages/Catagories/CatagoriesPost/CatagoriesPost";
import CatagoriesItem from "../../Pages/CatagoriesItem/CatagoriesItem";
import AllBuyer from "../../Pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import AllUser from "../../Pages/Dashboard/AllUser/AllUser";
import MyOrders from "../../Pages/Dashboard/My Orders/MyOrders";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/Signup/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRouter from "../PrivateRoute/PrivateRouter";
import SellerRoute from "../SellerRoute/SellerRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://reused-product-sell-server-ayakub.vercel.app/catagoryname"
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addproduct",
        element: <CatagoriesPost></CatagoriesPost>,
      },
      {
        path: "/catagoriesItem/:id",
        element: <CatagoriesItem></CatagoriesItem>,
        loader: ({ params }) =>
          fetch(
            `https://reused-product-sell-server-ayakub.vercel.app/catagoriesItem/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <DashboardLayout></DashboardLayout>
      </PrivateRouter>
    ),
    children: [
      {
        path: "/dashboard/addproduct",
        element: (
          //<SellerRoute>
          <CatagoriesPost></CatagoriesPost>
          //</SellerRoute>
        ),
      },
      {
        path: "/dashboard/alluser",
        element: (
          //<AdminRoute>
          <AllUser></AllUser>
          //</AdminRoute>
        ),
      },
      {
        path: "/dashboard/allseller",
        element: (
          //<AdminRoute>
          <AllSeller></AllSeller>
          //</AdminRoute>
        ),
      },
      {
        path: "/dashboard/allbuyer",
        element: (
          //<AdminRoute>
          <AllBuyer></AllBuyer>
          //</AdminRoute>
        ),
      },
      {
        path: "/dashboard/myorder",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/myproduct",
        element: (
          // <SellerRoute>
          <MyProduct></MyProduct>
          // </SellerRoute>
        ),
      },
    ],
  },
  { path: "*", element: <Error></Error> },
]);
