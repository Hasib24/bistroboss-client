import React from 'react';
import Home from '../pages/home/Home';
import Footer from '../pages/shared/Footer';
import NavBar from '../pages/shared/navbar/NavBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <main>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </main>
    );
};

export default MainLayout;