import React from 'react'
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

const TeamSliders = () => {   
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed:0,
    cssEase: "linear",
    arrows: false,
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
    <div className='m-auto xl:px-16 sm:px-10 px-8 md:px-10'>
      <div className='mt-20 bg-opacity-30 backdrop-blur-lg bg-gray-700 bg-clip-padding backdrop-filter'>
      <SlickSlider {...settings}>

         {data.map((d) => (
           <Link key={d.title} href={d.registrationLink} className='flex flex-col justify-center items-center text-black'>
            <div className='flex flex-col justify-center items-center p-5'>
              <div className='w-[240px] h-[240px]'>
                <img src={d.posterUrl} className='rounded-xl' />
              </div>
              <div className='gap-4 p-4 flex flex-col justify-center items-center align-middle'>
                <p className='text-xl font-semibold text-white'>{d.title}</p>
              </div>
            </div>
          </Link>
         ))}

         </SlickSlider>
      </div>
    </div>
  )
}

export default TeamSliders

const data = [
  {
    title: "Tech Team",
    posterUrl: "team/tech.png", // Use the imported image
    registrationLink: "/teams/tech",
  },
  {
    title: "Logistics Team",
    posterUrl: "team/logistics.png", // Use the imported image
    registrationLink: "/teams/logi",
  },
  {
    title: "Event Management Team",
    posterUrl: "team/event-management.png", // Use the imported image
    registrationLink: "/teams/em",
  },
  {
    title: "Production Team",
    posterUrl: "team/production.png", // Use the imported image
    registrationLink: "/teams/tech",
  },
  {
    title: "Content Team",
    posterUrl: "team/content.png", // Use the imported image
    registrationLink: "/teams/content",
  },

  {
    title: "PR Team",
    posterUrl: "team/pr.png", // Use the imported image
    registrationLink: "/teams/pr",
  },

  {
    title: "Sponsorship Team",
    posterUrl: "team/sponsorship.png", // Use the imported image
    registrationLink: "/teams/sponi",
  },
  {
    title: "Design Team",
    posterUrl: "team/design.png",
    registrationLink: "/teams/design"
  },

  // Add more events here
];
