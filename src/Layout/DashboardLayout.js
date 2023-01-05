import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const DashboardLayout = () => {
    const menuItem = <>
        <li><Link className='font-bold text-primary text-xl' to="/dashboard">My Orders</Link></li>
        <li><Link className='font-bold text-primary text-xl' to="/dashboard/addproduct">Add A Product</Link></li>
        <li><Link className='font-bold text-primary text-xl' to="/dashboard/myproducts">My Products</Link></li>
    </>
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="w-full navbar bg-base-300">
                        <div className="flex-none hidden lg:block mx-auto">
                            <ul className="menu menu-horizontal">
                                {menuItem}
                            </ul>
                        </div>
                    </div>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100">
                        {menuItem}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;