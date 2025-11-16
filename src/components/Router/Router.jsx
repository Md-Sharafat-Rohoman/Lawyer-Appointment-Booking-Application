import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import MyBookings from '../Pages/MyBookings/MyBookings';
import Blogs from '../Pages/Blogs/Blogs';
import ContactUs from '../Pages/ContactUs/ContactUs';
import ErrorHandlar from '../Pages/ErrorHandlar/ErrorHandlar';
import SingleDataDetails from '../Banner/SingleDataDetails/SingleDataDetails';




const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                loader: ()=> fetch('json.json') ,
                Component: Home
            },
            {
                path: '/SingleDataDetails/:id',
                loader: ()=> fetch('json.json') ,
                Component: SingleDataDetails
            },
            {
                path: '/my-bookings',
                loader: ()=> fetch('json.json') ,
                Component: MyBookings
            },
            {
                path: '/blogs',
                Component: Blogs
            },
            {
                path: '/contactUs',
                Component: ContactUs
            },
            {
                path: "*",
                Component: ErrorHandlar
            }
        ]
    }
])

export default router;