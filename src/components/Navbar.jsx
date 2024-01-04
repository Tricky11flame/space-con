"use client"
import React, { useState } from 'react';
import "../app/globals.css"
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisibility(prevState => !prevState);
  };

  return (
    <>
      {/* Navbar */}
      <div className="navigation-bar-full text-white font-spaceCon">
        <nav className="flex items-center justify-between p-0 fixed w-full z-50 border-b-2 border-white bg-opacity-50 backdrop-blur-lg bg-gray-700 bg-clip-padding backdrop-filter ">
          {/* Logo */}
          <Link href="/" className="flex items-center ml-4">
            <img src="../../SpaceConLogo.svg" alt="Logo" className="h-12 w-12 m-2 rounded-2xl my-4 " />
          </Link>

          {/* Hamburger Menu (Mobile) */}
          <div className="lg:hidden mr-8">
            <button id="toggle-menu" className="text-white focus:outline-none" onClick={toggleMobileMenu}>
              <img src="logo/burger-menu.svg" alt="" className='h-10' />
            </button>
          </div>

          {/* Menu Items (Desktop) */}
          <div className="hidden lg:flex space-x-6 text-lg ml-4">
            <Link href="/" className="nav4 transition-all duration-300 hover:scale-110">HOME</Link>
            <Link href="/events" className="nav4 transition-all duration-300 hover:scale-110">EVENTS</Link>
            <Link href="/schedule" className="nav4 transition-all duration-300 hover:scale-110">SCHEDULE</Link>
            <Link href="/about" className="nav4 transition-all duration-300 hover:scale-110">ABOUT US</Link>
          </div>

          {/* Sign up Login */}
          <div className='hidden lg:flex gap-5 text-lg mr-8'>

            <Link className="transition-all duration-300 hover:scale-110" href="/signup"><button className='px-3 py-1 rounded-3xl bg-spaceCon-tertiary transition-all duration-500 hover:border-2 hover:border-spaceCon-tertiary hover:bg-transparent'>SIGN UP</button></Link>
            <Link className="transition-all duration-300 hover:scale-110" href="/login"><button className='bg-spaceCon-tertiary px-3 py-1 rounded-3xl hover:bg-transparent hover:border-2 hover:border-spaceCon-tertiary'>LOGIN</button></Link>

          </div>
        </nav>
      </div>
      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${isMobileMenuVisible ? '' : 'hidden'} bg-gray-700/40 text-center w-[100%] mt-[80px] fixed z-50 backdrop-blur-lg`}
      >
        <a href="events" className="block py-2 px-4 nav-link hover:bg-purple-700 border-b-2">EVENTS</a>
        <a href="schedule" className="block py-2 px-4 nav-link hover:bg-purple-700 border-b-2">SCHEDULE</a>
        <a href="about" className="block py-2 px-4 nav-link hover:bg-purple-700 border-b-2">ABOUT US</a>
        <div className="flex justify-center p-2 gap-16">
          <button className="btn hover:bg-transparent bg-spaceCon-tertiary px-2 rounded-xl uppercase shadow-3xl"><Link href="/signup">SignUp</Link></button>
          <button className="btn hover:bg-transparent bg-spaceCon-tertiary px-2 rounded-xl uppercase shadow-3xl"><Link href="/login">Login</Link></button>
        </div>
      </div>
    </>
  )
}
export default Navbar