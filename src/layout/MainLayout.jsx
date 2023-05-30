import React from 'react';
import Home from '../pages/home/Home';
import Footer from '../pages/shared/Footer';
import NavBar from '../pages/shared/navbar/NavBar';

const MainLayout = () => {
    return (
        <main>
            <NavBar></NavBar>
            <Home></Home>
            <Footer></Footer>
        </main>
    );
};

export default MainLayout;