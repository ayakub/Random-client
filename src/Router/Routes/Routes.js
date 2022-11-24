import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main';
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
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    }
])