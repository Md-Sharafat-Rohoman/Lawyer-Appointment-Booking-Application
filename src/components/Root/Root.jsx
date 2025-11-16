import React from 'react';
import Navbar from '../Pages/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Footer/Footer';

const Root = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;