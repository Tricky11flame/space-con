import React from 'react'
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'
import { SpaceIcon } from 'lucide-react';
import "../app/globals.css"

const Sliders = () => {   
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed:0,
    cssEase: "linear",
    rtl:true,
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



  return (
    <>
    <div className='flex justify-center bg-spaceGif w-full items-center'>
      <div className=''>
        <h1 className='uppercase font-black text-center font-spaceCon block py-1 px-4 nav4 transition-all duration-300 hover:scale-110 text-[60px]'> Events</h1>
      </div>
      </div>
    
    <div className='m-auto xl:px-16 sm:px-10 px-8 lg:px-10 md:px-10'>

      <div className='mt-10 bg-opacity-30 backdrop-blur-lg bg-gray-700 bg-clip-padding backdrop-filter rounded-xl'>
        
      
      <SlickSlider {...settings}>
    {cardData.map((cardData, index) => (
      <div className=' p-4 m-[20px] overflow-hidden shadow-lg group shadow-indigo-500/40 rounded-xl flex justify-center items-center relative'>
        <img src={cardData.posterUrl} className='min-w-[250px] rounded-lg min-h-[250px] object-cover' alt="" />
        

          {/* details appears on hover */}

        <div className="absolute left-0 w-[100%] h-[100%] items-center p-5 bottom-0 flex justify-center group-hover:opacity-100 align-middle shadow-md rounded-xl bg-black delay-150 opacity-0  duration-500">
          <div>
            <img className='w-[300px] h-[300px] relative object-cover' src="https://i.pinimg.com/originals/cf/ec/88/cfec8819d8376a57c86e3c6e53ed618e.gif" alt=""  style={{background : "rgba(0 , 0, 0, 0.75)"}}/>
          </div>
          <div className='my-auto absolute flex flex-col items-center justify-center'>
          <p className='text-xl font-semibold uppercase font-spaceCon'>{cardData.title}</p>
                <p className='text-center pt-4 text-sm px-3 items-center'>{cardData.description}</p>
                <button className='bg-spaceCon-tertiary mt-6 text-white text-lg px-6 py-1 rounded-md'><a href={cardData.registrationLink}>Register</a></button>
          </div>
        </div>
      </div>
    ))}
  </SlickSlider>
      </div>
    </div>

    </>
  )
}

export default Sliders


const cardData = [
  {
    title: "Smriti Irani",
    description: "Smriti Zubin Irani is an Indian politician and former actress.",
    posterUrl: "https://sp-admin.moodi.org/get_event_image?img=1702243692846.jpeg", // Use the imported image
    registrationLink: "#",
  },
  {
    title: "Electro-Funk Nite",
    description: "Akash Ahuja is a New York-based Indian musical artist.",
    posterUrl: "https://sp-admin.moodi.org/get_event_image?img=1702807736263.png", // Use the imported image
    registrationLink: "https://example.com/register2",
  },
  {
    title: "Pop Nite",
    description: "Renowned for their versatility, Salim and Sulaiman Merchant stand among India's",
    posterUrl: "https://sp-admin.moodi.org/get_event_image?img=1702223157191.png", // Use the imported image
    registrationLink: "#",
  },
  {
    title: "Euphonic Nite",
    description: "Mohit Chauhan, a renowned playback singer in the Indian film industry, ",
    posterUrl: "https://sp-admin.moodi.org/get_event_image?img=1702587080356.png", // Use the imported image
    registrationLink: "#",
  },

  {
    title: "Lost Stories",
    description: "Lost Stories, envisioned by an artist, is a captivating visual masterpiece that encapsulates the anthology's essence.",
    posterUrl: "https://sp-admin.moodi.org/get_event_image?img=1702368420500.png", // Use the imported image
    registrationLink: "#",
  },

  {
    title: "Bhaskar Collectives",
    description: "Anand Bhaskar Collectives is an entity, possibly a musical group led by Anand Bhaskar, a ",
    posterUrl: "https://sp-admin.moodi.org/get_event_image?img=1702807038287.png", // Use the imported image
    registrationLink: "#",
  },

  {
    title: "Electro-Funk Nite",
    description: "Jay Sean is a highly acclaimed British R&B singer and songwriter. Having won multiple awards, ",
    posterUrl: "https://sp-admin.moodi.org/get_event_image?img=1702212892081.png", // Use the imported image
    registrationLink: "#",
  },
  // Add more events here
];
