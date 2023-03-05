import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const NavBar = () => {
    const { user, logout } = useContext(AuthContext)
    const location = useLocation()

    const handleLogOut = () => {
        logout()
            .then(() => { })
            .catch(err => console.log(err))
    }

    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {
            user?.uid ?
                <>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <button className='btn' onClick={handleLogOut}>Logout</button>
                </>
                :
                <li><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div className='bg-gradient-to-r from-indigo-500 via-emerald-500 to-pink-500'>
            <div className="navbar max-w-7xl mx-auto text-white text-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-lg font-extrabold">Second Deal.com</Link>
                </div>
                <div className="navbar-center hidden lg:flex md:flex ml-auto">
                    <ul className="menu menu-horizontal px-1">
                        {menuItem}
                    </ul>
                </div>
                {
                    location.pathname==='/dashboard' || location.pathname==='/dashboard/allbuyers' || location.pathname==='/dashboard/allsellers' || location.pathname==='/dashboard/makeadmin' ?
                    <div className="flex-none lg:hidden md:hidden ml-auto">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    :
                    ''
                }
            </div>
        </div>
    );
};

export default NavBar;