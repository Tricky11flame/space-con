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
      <div className="fixed w-full h-full bg-no-repeat"><img src="/background/home-bg-blur.png" alt="" className="-z-50 w-full h-full" /></div>
      <div className="fixed flex justify-center bg-no-repeat bg-contain overflow-hidden w-full h-[100svh]"><img src="/background/home-bg.png" alt="" className="-z-49 max-w-5xl lg:min-w-full h-[100svh]" loading="lazy" /></div>
      <div className="fixed z-1 w-[45%]"><img src="/background/astronaut.png" alt="" className="absolute -left-4 astronaut top-[160px] ml-16" /></div>

      {/* Text Section */}
      {bar?<section className=" z-40 flex flex-col items-center justify-center relative top-24 md:top-24 lg:top-24 lg:flex-row lg:justify-end">
        <div className="md:text-right mx-4 md:mx-0 lg:text-right lg:mr-11">
          <h2 className="text-2sxl font-medium mt-8 lg:mt-0 mb-4 p-4 px-6 rounded-2xl lg:text-5xl font-lemonmilk">Explore Cosmos</h2>
          <p className="text-sm lg:text-md mb-8 px-2 lg:pl-0 lg:pr-6 font-lemonmilk">Discover the wonders of universe with us</p>
          {/* <p className=" font-spaceCon">space</p>
          <p className="font-akira">akira</p>
          <p className="font-deathstar">death</p>
          <p className="font-ethnocentric">ethno</p>
          <p className="font-lemonmilk">lemon</p>
          <p className="font-montserrat">MONT</p> */}
        </div>
      </section>:''}
    </div>
    </div>
    </>
  );
};

export default FirstPage;
