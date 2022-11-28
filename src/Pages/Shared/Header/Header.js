import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contex/AuthProvidor';
import logo from '../../../assests/logo.png'

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    const menuItem = <>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/blog'>Blog</Link>
        </li>
        <li>
            <Link to='/dashboard'>Dashboard</Link>
        </li>

        {user?.email ?
            <>
                <li><button onClick={handleLogOut}>Sign out</button></li>
            </>
            :
            <li><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div className="navbar bg-secondary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  font-semibold text-primary">
                        {menuItem}
                    </ul>
                </div>
                <Link className=" normal-case text-xl"><span className='flex items-center'><img style={{ width: '60px' }} src={logo} alt="" /><span className='text-primary'>Random</span></span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0  font-semibold text-primary">
                    {menuItem}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>

    );
};

export default Header;