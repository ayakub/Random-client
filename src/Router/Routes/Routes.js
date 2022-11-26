import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import Main from '../../layouts/Main';
import CatagoriesPost from '../../Pages/Catagories/CatagoriesPost/CatagoriesPost';
import CatagoriesItem from '../../Pages/CatagoriesItem/CatagoriesItem';
import Error from '../../Pages/Error/Error';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login/Login';
import SignUp from '../../Pages/Login/Signup/SignUp';

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
        element: <DashboardLayout></DashboardLayout>,
        children: [
            { path: '/dashboard/addproduct', element: <CatagoriesPost></CatagoriesPost> }
        ]
    },
    { path: '*', element: <Error></Error> }
])