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
      <nav className="flex items-center justify-between p-0 fixed w-[100%] z-50 border-b-2 border-slate-950 bg-opacity-50 backdrop-blur-lg bg-gray-700 bg-clip-padding backdrop-filter ">
        {/* Logo */}
        <Link href="/" className="flex items-center ml-4">
          <img src="../../SpaceConLogo.svg" alt="Logo" className="h-12 w-12 m-2 rounded-2xl my-4 " />
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <div className="lg:hidden mr-4">
          <button id="toggle-menu" className="text-white focus:outline-none" onClick={toggleMobileMenu}>
            {/* Hamburger SVG */} HELLLOOO 
          </button>
        </div>

        {/* Menu Items (Desktop) */}
        <div className="hidden lg:flex space-x-6 text-lg ml-16">
            <a href="events" className="nav4 transition-all duration-300 hover:scale-110">EVENTS</a>
            <a href="schedule" className="nav4 transition-all duration-300 hover:scale-110">SCHEDULE</a>
            <a href="about" className="nav4 transition-all duration-300 hover:scale-110">ABOUT US</a>
            <Link className="nav4 transition-all duration-300 hover:scale-110" href="/signup"><button>SignUp</button></Link>
            <Link className="nav4 transition-all duration-300 hover:scale-110" href="/login"><button>LogIn</button></Link>
        </div>

        {/* Sign Up/Login Buttons (Desktop) */}
        <div className="hidden lg:flex mr-8 space-x-6 text-lg">
        </div>        
      </nav>
      </div>
      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${isMobileMenuVisible ? '' : 'hidden'} bg-gray-700/40 text-center w-[100%] mt-[80px] fixed z-50`}
      >
        <a href="events" className="block py-2 px-4 nav-link hover:bg-purple-700 border-b-2">EVENTS</a>
        <a href="schedule" className="block py-2 px-4 nav-link hover:bg-purple-700 border-b-2">SCHEDULE</a>
        <a href="about" className="block py-2 px-4 nav-link hover:bg-purple-700 border-b-2">ABOUT US</a>
        <div className="flex justify-center p-2 gap-16">
          <button className="btn hover:bg-transparent bg-spaceCon-tertiary px-2 rounded-xl uppercase shadow-3xl">SignUp</button>
          <button className="btn hover:bg-transparent bg-spaceCon-tertiary px-2 rounded-xl uppercase shadow-3xl">Login</button>
        </div>
      </div>
      </>
      )
    }
export default Navbar