import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/bistro.png'

const Header = () => {

    const navInfo = <>
        <li><Link to='/'>Home</Link></li>
    </>

    return (
        <div style={{background: 'rgba(21, 21, 21, 0.5)'}} className="navbar fixed z-10 max-w-screen-xl text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                       { navInfo }
                    </ul>
                </div>
                <Link to='/' className="p-2"><img className='w-44' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navInfo}
                </ul>
            </div>
        </div>
    );
};

export default Header;