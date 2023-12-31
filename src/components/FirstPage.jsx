"use client"
import { Router } from "next/router";
import React, { useState } from 'react';
import "../app/globals.css"
import Link from "next/link";
import Navbar from "./Navbar";

const FirstPage = ({bar=true}) => {
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisibility(prevState => !prevState);
  };

  return (
    <>
    <div className="bg-spaceCon-opbg text-white font-spaceCon min-h-screen">
      {bar?<Navbar/>:''}
      <div className="main">
      {/* Background Section */}
      <div className="fixed w-[100%]"><img src="bg-img-blur.jpg" alt="" className="-z-50 w-[100%]" /></div>
      <div className="fixed flex justify-center"><img src="bg-img.jpg" alt="" className="-z-49 w-[100%] " loading="lazy" /></div>
      <div className="fixed z-1 w-[45%]"><img src="bg-img-2.png" alt="" className="absolute -left-4 astronaut top-[160px] ml-16" /></div>

      {/* Text Section */}
      {bar?<section className=" z-40 flex flex-col items-center justify-center relative top-16 md:top-32 lg:top-64 lg:flex-row lg:justify-end">
        <div className="text-center md:text-right mx-4 md:mx-0 lg:text-right lg:mr-36">
          <h1 className="text-4xl font-extrabold mt-8 lg:mt-0 mb-4 p-4 px-6 rounded-2xl lg:text-7xl">Explore the Universe</h1>
          <p className="text-sm lg:text-lg mb-8 px-2 lg:pl-0 lg:pr-6">Discover the wonders of space with our amazing content.</p>
        </div>
      </section>:''}
    </div>
    </div>
    </>
  );
};

export default FirstPage;
