import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const NavBar = () => {
    const { user, logout } = useContext(AuthContext)
    const handleLogOut = () => {
        logout()
        .then(() => {})
        .catch(err => console.log(err))
    }
    return (
        <div className='bg-gradient-to-r from-indigo-500 via-emerald-500 to-pink-500'>
            <div className="navbar max-w-7xl mx-auto text-white text-xl">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl">Second Deal</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
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
            </div>
        </div>
    );
};

export default NavBar;