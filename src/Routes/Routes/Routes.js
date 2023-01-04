import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import CategoryDetails from '../../Pages/Home/CategoryDetails/CategoryDetails';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Shared/Login/Login/Login';
import SignUp from '../../Pages/Shared/Login/SignUp/SignUp';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <CategoryDetails></CategoryDetails>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/category/${params.id}`)
                }
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

export default router;