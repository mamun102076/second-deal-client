import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../Pages/hooks/useAdmin';
import useBuyer from '../Pages/hooks/useBuyer';
import useSeller from '../Pages/hooks/useSeller';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    const [isSeller] = useSeller(user?.email)
    const menuItem = <>
        {
            isBuyer && <li><Link className='font-bold text-primary text-xl' to="/dashboard/myorders">My Orders</Link></li>
        }
        {
            isSeller &&
            <>
                <li><Link className='font-bold text-primary text-xl' to="/dashboard/addproduct">Add A Product</Link></li>
                <li><Link className='font-bold text-primary text-xl' to="/dashboard/myproducts">My Products</Link></li>
            </>
        }
        {
            isAdmin &&
            <>
                <li><Link className='font-bold text-primary text-xl' to="/dashboard/allbuyers">All Buyers</Link></li>
                <li><Link className='font-bold text-primary text-xl' to="/dashboard/allsellers">All Sellers</Link></li>
                <li><Link className='font-bold text-primary text-xl' to="/dashboard/makeadmin">Make Admin</Link></li>
            </>
        }
    </>
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="w-full navbar bg-base-300">
                        <div className="flex-none hidden lg:block md:block mx-auto">
                            <ul className="menu menu-horizontal">
                                {menuItem}
                            </ul>
                        </div>
                    </div>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-48 bg-base-100">
                        {menuItem}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;