import React, { useState } from 'react';
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    return (
        <div className='flex items-center justify-between py-3 font-light'>

            <Link to='/' className='text-white'>
                <p className='font-custom text-7xl tracking-wide bg-gradient-to-r from-yellow-500 to-yellow-900 bg-clip-text text-transparent'>K.P.I.T.T.E.R.</p>
            </Link>
            <ul className='hidden sm:flex gap-5 text-xl bg-black'>
                <NavLink to='/' className='flex flex-col items-center gap-1 text-white group'>
                    <p>HOME</p>
                    <hr className='w-full border-none h-[1.5px] bg-transparent group-hover:bg-yellow-600 group-hover:scale-x-100 scale-x-0 origin-left transition-all duration-500' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1 text-white group'>
                    <p>ABOUT</p>
                    <hr className='w-full border-none h-[1.5px] bg-transparent group-hover:bg-yellow-600 group-hover:scale-x-100 scale-x-0 origin-left transition-all duration-500' />
                </NavLink>
                <NavLink to='/allusers' className='flex flex-col items-center gap-1 text-white group'>
                    <p>ALL USERS</p>
                    <hr className='w-full border-none h-[1.5px] bg-transparent group-hover:bg-yellow-600 group-hover:scale-x-100 scale-x-0 origin-left transition-all duration-500' />
                </NavLink>
                <NavLink to='/auth' className='flex flex-col items-center gap-1 text-white group'>
                    <p>YOUR POSTS</p>
                    <hr className='w-full border-none h-[1.5px] bg-transparent group-hover:bg-yellow-600 group-hover:scale-x-100 scale-x-0 origin-left transition-all duration-500' />
                </NavLink>
                <NavLink to='/create' className='flex flex-col items-center gap-1 text-white group'>
                    <p>MAKE A POST</p>
                    <hr className='w-full border-none h-[1.5px] bg-transparent group-hover:bg-yellow-600 group-hover:scale-x-100 scale-x-0 origin-left transition-all duration-500' />
                </NavLink>
            </ul>

            <img onClick={() => setVisible(true)} src={assets.menu} className='flex items-center gap-7 w-9 cursor-pointer invert bg-white sm:hidden'
                     alt='Menu' />
            <div
                className={`fixed inset-0 z-50 bg-black text-white transition-transform transform ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex flex-col h-full'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img src={assets.dropdown} className='h-7 cursor-rotate-180 invert bg-white' alt="Dropdown" />
                        <p className='text-white text-lg'>BACK</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='flex justify-center text-lg py-2 pl-6 bg-red-800' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='flex justify-center text-lg py-2 pl-6 bg-orange-700' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='flex justify-center text-lg py-2 pl-6 bg-amber-600' to='/allusers'>ALL USERS</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='flex justify-center text-lg py-2 pl-6 bg-yellow-500 ' to='/auth'>YOUR POSTS</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='flex justify-center text-lg py-2 pl-6 bg-green-700 ' to='/create'>MAKE A POST</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
