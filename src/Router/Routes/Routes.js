import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import Main from '../../layouts/Main';
import Blog from '../../Pages/Blog/Blog';
import CatagoriesPost from '../../Pages/Catagories/CatagoriesPost/CatagoriesPost';
import CatagoriesItem from '../../Pages/CatagoriesItem/CatagoriesItem';
import AllBuyer from '../../Pages/Dashboard/AllBuyer/AllBuyer';
import AllSeller from '../../Pages/Dashboard/AllSeller/AllSeller';
import AllUser from '../../Pages/Dashboard/AllUser/AllUser';
import MyOrders from '../../Pages/Dashboard/My Orders/MyOrders';
import MyProduct from '../../Pages/Dashboard/MyProduct/MyProduct';
import Error from '../../Pages/Error/Error';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login/Login';
import SignUp from '../../Pages/Login/Signup/SignUp';
import PrivateRouter from '../PrivateRoute/PrivateRouter';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/catagoryname')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addproduct',
                element: <CatagoriesPost></CatagoriesPost>
            },
            {
                path: '/catagoriesItem/:id',
                element: <CatagoriesItem></CatagoriesItem>,
                loader: ({ params }) => fetch(`http://localhost:5000/catagoriesItem/${params.id}`)
            },
        ]


    },
    {
        path: '/dashboard',
        element: <PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
        children: [
            {
                path: '/dashboard/addproduct',
                element: <CatagoriesPost></CatagoriesPost>
            },
            {
                path: '/dashboard/alluser',
                element: <AllUser></AllUser>
            },
            {
                path: '/dashboard/allseller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AllBuyer></AllBuyer>
            },
            {
                path: '/dashboard/myorder',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/myproduct',
                element: <MyProduct></MyProduct>
            },
        ]
    },
    { path: '*', element: <Error></Error> }
])