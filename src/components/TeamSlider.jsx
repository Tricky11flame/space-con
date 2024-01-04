import React, { useState } from 'react';
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const TeamSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
    ]
  };

  const [toggle , setToggle] = useState(0);

  function updateToggle(id){
    setToggle(id);
  }

  const nav = ["All" , "Lead" , "Tech" , "Content" , "Pr" , "Design"]

  return (

     <div className='lg:p-20 md:p-16 p-10 w-full z-100 bg-spaceGif text-white flex flex-col'>

      <div className='flex justify-center w-full items-center'>
        <div className=''>
          <h1 className='uppercase font-black text-center font-spaceCon block py-0 px-4 nav4 transition-all duration-300 hover:scale-110 text-[60px]'>The Team</h1>
        </div>
      </div>

      <ul className='flex justify-between md:px-24 lg:mt-8 mt-6 pb-10'>
        {nav.map((item, index) => (
          <li key={index} onClick={() => updateToggle(index)} className='
          py-0 px-4 nav4 transition-all duration-300 uppercase hover:scale-110] cursor-pointer' style={{marginRight: "10px"}}>{item}</li>
        ))} 
      </ul>

      {/* All team members */}
      <div className='bg-opacity-30 backdrop-blur-lg bg-gray-700 bg-clip-padding backdrop-filter rounded-xl '>    
      {toggle === 0 && (
  <SlickSlider {...settings}>
    {cardData.map((cardData, index) => (
      <div className='w-[300px] h-[300px] m-[20px] overflow-hidden shadow-lg group shadow-indigo-500/40 rounded-xl flex justify-center align-middle relative'>
        <img src={cardData.img} className='w-[100%] h-[100%] p-4 overflow-hidden shadow-lg group shadow-indigo-500/40 rounded-xl flex justify-center items-center relative object-cover' alt="" />

          {/* details appears on hover */}

        <div className='absolute bg-spaceGif w-[100%] h-[100%] bottom-0 flex justify-center group-hover:opacity-100 align-middle bg-black shadow-md rounded-xl delay-150 opacity-0  duration-500'>
          <div className='my-auto'>
          <h3 className='text-[23px] font-[500]  text-white mt-[10px]'>{cardData.name}</h3>
          <h3 className='text-[12px] font-light text-center '>{cardData.designation}</h3>

          <div>
             <ul className='flex justify-center mt-5 text-[25px]'>
                <li><FaGithub className='text-[#5D3587] mr-3'/></li>
                <li><FaInstagram className='text-[#5D3587] mr-3'/></li>
                <li><FaLinkedin className='text-[#5D3587] mr-3'/></li>
             </ul>
          </div>
          </div>
        </div>
      </div>
    ))}
  </SlickSlider>
)}

</div>

      {/* Design members and here */}

    </div>
  )
}

export default TeamSlider;



const cardData  = [
  {
     img : './team/tech.png',
     name : 'Ayush Jha',
     designation : "President",
     linkedin : "#",
     instagram : "#",
  },

  {
    img : './team/content.png',
    name : 'Ayush Jha',
    designation : "President",
    linkedin : "#",
    instagram : "#",
 },
{
img : './team/design.png',
name : 'Ayush Jha',
designation : "President",
linkedin : "#",
instagram : "#",
},

{
  img : './team/tech.png',
  name : 'Ayush Jha',
  linkedin : "#",
  designation : "President",
  instagram : "#",
},

{
  img : './team/design.png',
  name : 'Ayush Jha',
  linkedin : "#",
  designation : "President",
  instagram : "#",
  },

  {
    img : './team/content.png',
    name : 'Ayush Jha',
    designation : "President",
    linkedin : "#",
    instagram : "#",
    },

    {
      img : './team/design.png',
      name : 'Ayush Jha',
      designation : "President",
      linkedin : "#",
      instagram : "#",
   },
    {
      img : './team/tech.png',
      name : 'Ayush Jha',
      designation : "President",
      linkedin : "#",
      instagram : "#",
      },
];
