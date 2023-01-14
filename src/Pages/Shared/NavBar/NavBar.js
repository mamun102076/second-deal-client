import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const NavBar = () => {
    const { user, logout } = useContext(AuthContext)
    const handleLogOut = () => {
        logout()
            .then(() => { })
            .catch(err => console.log(err))
    }
    return (
        <div className='bg-gradient-to-r from-indigo-500 via-emerald-500 to-pink-500'>
            <div className="navbar max-w-7xl mx-auto text-white text-xl">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Second Deal.com</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
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
                    </ul>
                </div>
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default NavBar;