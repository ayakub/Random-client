import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contex/AuthProvidor';
import logo from '../../../assests/logo.png'

const Header = () => {
    const { user } = useContext(AuthContext)
    const menuItem = <>
        <li>
            <Link to='/'>Home</Link>
        </li>

        <li><Link to='/login'>Login</Link></li>
    </>
    return (
        <div className="navbar bg-secondary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-2xl font-semibold text-primary">
                        {menuItem}
                    </ul>
                </div>
                <Link className=" normal-case text-xl"><span className='flex items-center'><img style={{ width: '60px' }} src={logo} alt="" /><span className='text-primary'>Random</span></span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-2xl font-semibold text-primary">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn btn-primary">Get started</Link>
            </div>
        </div>
    );
};

export default Header;