"use client"
// src/app/(root/)page.js
// import Footer from '@/components/Footer';
import FirstPage from '@/components/FirstPage';
import Footer from '@/components/Footer';
import ProgSlider from '@/components/ProgSlider';
import Sliders from '@/components/Sliders';
import TeamSliders from '@/components/TeamSlider';
// import Sliders from '@/components/Sliders';

export default function Home(){
  return (<>
    <FirstPage  />
    {/* <Footer/> */}
    {/* <StyledSlider/> */}
    <Sliders/>
    </>
  )
}

// const Home = () => {
//   return (
//     <body class="bg-black text-white font-spaceCon h-[2000px]">
//     {/* <!-- Navbar --> */}
//     <nav class="flex items-center justify-between p-0 fixed w-[100%] py-4 z-50 border-b-2">
//         {/* <!-- Logo --> */}
//         <div class="flex items-center ml-4">
//             <img src="asset/SpaceConLogo.svg" alt="Logo" class="h-16 w-16 mr-2"/>
//         </div>

//         {/* <!-- Hamburger Menu (Mobile) --> */}
//         <div class="lg:hidden mr-4">
//             <button id="toggle-menu" class="text-white focus:outline-none">
//                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg">
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7">
//                     </path>
//                 </svg>
//             </button>
//         </div>

//         {/* <!-- Menu Items (Desktop) --> */}
//         <div class="hidden lg:flex space-x-6 text-lg ml-16">
//             <a href="#events" class="nav transition-all duration-300 hover:scale-110">EVENTS</a>
//             <a href="#schedule" class="nav transition-all duration-300 hover:scale-110">SCHEDULE</a>
//             <a href="#team" class="nav transition-all duration-300 hover:scale-110">OUR TEAM</a>
//             <a href="#about" class="nav transition-all duration-300 hover:scale-110">ABOUT US</a>
//         </div>

//         {/* <!-- Sign Up/Login Buttons (Desktop) --> */}
//         <div class="hidden lg:flex mr-8 space-x-6 text-lg">
//             <button
//                 class="btn py-1 px-4 rounded-3xl bg-spaceCon-secondary uppercase transition-all duration-500 hover:bg-spaceCon-tertiary shadow-3xl hover:scale-110">Sign
//                 Up</button>
//             <button
//                 class="btn py-1 px-4 rounded-3xl bg-spaceCon-secondary uppercase transition-all duration-500 hover:bg-spaceCon-tertiary shadow-3xl hover:scale-110">Login</button>
//         </div>
//     </nav>

//     {/* <!-- Mobile Menu --> */}
//     <div id="mobile-menu" class="lg:hidden hidden bg-gray-700/40 text-center w-[100%] mt-[80px] fixed z-50">
//         <a href="#events" class="block py-2 px-4 nav-link hover:bg-purple-700 border-b-2">EVENTS</a>
//         <a href="#schedule" class="block py-2 px-4 nav-link hover:bg-purple-700 border-b-2">SCHEDULE</a>
//         <a href="#team" class="block py-2 px-4 nav-link hover:bg-purple-700 border-b-2">OUR TEAM</a>
//         <a href="#about" class="block py-2 px-4 nav-link hover:bg-purple-700 border-b-2">ABOUT US</a>
//         <div class="flex justify-center p-2 gap-16">
//             <button class="btn hover:bg-transparent bg-spaceCon-tertiary px-2 rounded-xl uppercase shadow-3xl">Sign
//                 Up</button>
//             <button
//                 class="btn hover:bg-transparent bg-spaceCon-tertiary px-2 rounded-xl uppercase shadow-3xl">Login</button>
//         </div>
//     </div>

//     {/* <!-- Background Section --> */}
//     <div class="fixed w-[100%]"><img src="asset/bg-img-blur.png" alt="" class="-z-50 w-[100%] "/></div>
//     {/* <!-- <div class="fixed"><img src="asset/bgv-1.gif" alt="" class="-z-50 w-[100%] h-screen" "></div> --> */}

//     <div class="fixed flex justify-center">
//       <img src="asset/bg-img.png" alt="" class="-z-49 w-[100%]" loading="lazy"/></div>
    
//     <div class="fixed z-1 w-[45%]"><img src="asset/bg-img-2.png" alt="" class="absolute -left-4 astronaut top-[160px] ml-16"/>

//     {/* <!-- <div class="fixed"><img src="asset/bg-img-3.png" alt="" class="satelite fixed bottom-0 left-0 w-[50%]"></div> --> */}
//     </div>

//     {/* <!-- Text Section --> */}
//     <section class="flex items-center justify-end relative top-64">
//         <div class="text-right mr-36">
//             <h1 class="text-7xl font-extrabold mb-4 p-4 px-6 rounded-2xl">Explore the Universe</h1>
//             <p class="text-lg mb-8 pr-6">Discover the wonders of space with our amazing content.</p>
//         </div>
//     </section>
//     </body>
//     );
// };

// export default Home;

    {/* // <div>
    //   <div className="mx-4 my-8">
    //     <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
    //     {/* Sliding card holder for events 
    //     <EventCard />
    //     <EventCard />
    //   </div>
    //   <div className="mx-4 my-8">
    //     <h2 className="text-2xl font-bold mb-4">Fun Programmes</h2>
    //      Sliding card holder for fun programmes 
    //     <ProgramCard />
    //     <ProgramCard />
    //   </div>
    // </div> */}