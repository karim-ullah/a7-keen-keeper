import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router';import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>

            <Footer></Footer>


            
        </div>

    

    );
};

export default MainLayout;