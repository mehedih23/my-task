import React from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/NavLogo.png'
import CustomLink from './CustomLink';

const Navbar = () => {
    const menuItems = <>
        <li className='mx-1'>
            <CustomLink to='/' className='font-bold text-secondary'>Home</CustomLink>
        </li>
        <li className='mx-1'>
            <CustomLink to='features' className='font-bold text-secondary'>Features</CustomLink>
        </li>
        <li className='mx-1'>
            <CustomLink to='community' className='font-bold text-secondary'>Community</CustomLink>
        </li>
        <li className='mx-1'>
            <CustomLink to='pricing' className='font-bold text-secondary'>Pricing</CustomLink>
        </li>
        <li className='mx-1'>
            <CustomLink to='faq' className='font-bold text-secondary'>FAQ</CustomLink>
        </li>
        <li className='mx-1'>
            <CustomLink to='blog' className='font-bold text-secondary'>Blog</CustomLink>
        </li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="Brand Logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className='btn btn-sm rounded-full bg-accent text-primary border-2 hover:text-accent'>
                    <Link to='login'>Login</Link>
                </button>
                <div className="dropdown dropdown-hover dropdown-left">
                    <label tabIndex="0" className="m-2">
                        <div className="avatar">
                            <div className="w-8 rounded-full ring ring-offset-base-100 ring-offset-2">
                                <img src="https://placeimg.com/192/192/people" alt='user' />
                            </div>
                        </div>
                    </label>
                    <ul tabIndex="0" className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-52">
                        <li><Link to='item1' className='font-bold text-secondary'>Item 1</Link></li>
                        <li><Link to='item2' className='font-bold text-secondary'>Item 2</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar