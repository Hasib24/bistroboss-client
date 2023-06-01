import React from 'react';
import Home from '../pages/home/Home';
import Footer from '../pages/shared/Footer';
import NavBar from '../pages/shared/navbar/NavBar';
import { Outlet, useLocation } from 'react-router-dom';

const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login')
    console.log(noHeaderFooter);
    return (
        <main>
            {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer>}
        </main>
    );
};

export default MainLayout;