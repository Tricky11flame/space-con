"use client"
import { Router } from "next/router";
import React, { useState } from 'react';
import "../app/globals.css"

const FirstPage = () => {
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisibility(prevState => !prevState);
  };

  return (
    <>
    <div className="bg-spaceCon-opbg text-white font-spaceCon min-h-screen">
      {/* Navbar */}
      <div className=" ">
      <nav className="flex items-center justify-between p-0 fixed w-[100%] z-50 border-b-2 border-slate-950 bg-opacity-80 backdrop-blur-lg bg-gray-700 bg-clip-padding backdrop-filter ">
        {/* Logo */}
        <div className="flex items-center ml-4">
          <img src="SpaceConLogo.svg" alt="Logo" className="h-12 w-12 m-2 rounded-2xl my-4 " />
        </div>

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
            <a href="teams" className="nav4 transition-all duration-300 hover:scale-110">OUR TEAM</a>
            <a href="about" className="nav4 transition-all duration-300 hover:scale-110">ABOUT US</a>
        </div>

        {/* Sign Up/Login Buttons (Desktop) */}
        <div className="hidden lg:flex mr-8 space-x-6 text-lg">
          {/* Buttons */}
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
        <a href="teams" className="block py-2 px-4 nav-link hover:bg-purple-700 border-b-2">OUR TEAM</a>
        <a href="about" className="block py-2 px-4 nav-link hover:bg-purple-700 border-b-2">ABOUT US</a>
        <div className="flex justify-center p-2 gap-16">
          <button className="btn hover:bg-transparent bg-spaceCon-tertiary px-2 rounded-xl uppercase shadow-3xl">SignUp</button>
          <button className="btn hover:bg-transparent bg-spaceCon-tertiary px-2 rounded-xl uppercase shadow-3xl">Login</button>
        </div>
      </div>

      <div>
      {/* Background Section */}
      <div className="fixed w-[100%]"><img src="bg-img-blur.jpg" alt="" className="-z-50 w-[100%]" /></div>
      <div className="fixed flex justify-center"><img src="bg-img.jpg" alt="" className="-z-49 w-[100%] " loading="lazy" /></div>
      <div className="fixed z-1 w-[45%]"><img src="bg-img-2.png" alt="" className="absolute -left-4 astronaut top-[160px] ml-16" /></div>

      {/* Text Section */}
      <section className=" z-40 flex flex-col items-center justify-center relative top-16 md:top-32 lg:top-64 lg:flex-row lg:justify-end">
        <div className="text-center md:text-right mx-4 md:mx-0 lg:text-right lg:mr-36">
          <h1 className="text-4xl font-extrabold mt-8 lg:mt-0 mb-4 p-4 px-6 rounded-2xl lg:text-7xl">Explore the Universe</h1>
          <p className="text-sm lg:text-lg mb-8 px-2 lg:pl-0 lg:pr-6">Discover the wonders of space with our amazing content.</p>
        </div>
      </section>
    </div>
    </div>
    </>
  );
};

export default FirstPage;
