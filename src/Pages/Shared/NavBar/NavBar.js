import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-500 via-emerald-500 to-pink-500'>
            <div className="navbar max-w-7xl mx-auto text-white text-xl">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl">Second Deal</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;