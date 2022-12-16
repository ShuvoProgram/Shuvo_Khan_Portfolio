import React from 'react';
import { Outlet } from 'react-router-dom';
import GoToTop from '../Pages/Shared/GoToTop/GoToTop';
import Navber from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <GoToTop />
        </div>
    );
};

export default Main;