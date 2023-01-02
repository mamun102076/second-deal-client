import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="navbar bg-base-100">
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