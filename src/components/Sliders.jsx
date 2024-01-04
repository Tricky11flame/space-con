import React from 'react'
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
    <div className='m-auto xl:px-16 sm:px-10 px-8 md:px-10'>
      <div className='mt-20 bg-opacity-30 backdrop-blur-lg bg-gray-700 bg-clip-padding backdrop-filter'>
      <SlickSlider {...settings}>

         {data.map((d) => (
           <div key={d.title} className='flex flex-col justify-center items-center text-black  shadow-lg '>
            <div className=''>
            <div className='flex flex-col justify-center items-center p-5'>
              <div className='w-[240px] h-[240px]'>
                <img src={d.posterUrl} className='rounded-2xl h-[240px] w-[240px]' />
              </div>

              <div className='gap-4 p-4 flex flex-col justify-center items-center align-middle'>
                <p className='text-xl text-white font-semibold'>{d.title}</p>
                <p className='text-white'>{d.description}</p>
                <button className='bg-spaceCon-tertiary text-white text-lg px-6 py-1 rounded-md '><a href={d.registrationLink}>Register</a></button>
              </div>
            </div>
            </div>
          </div>
         ))}

         </SlickSlider>
      </div>
    </div>
  )
}

export default Sliders

const data = [
  {
    title: "Event 1",
    description: "Have you ever wondered what would have happened if the CERN Super Collider had somehow created a black hole ? Or what would Earth look like if an advanced Alien civilization had wreaked havoc upon our planet ? Does the very thought of us finding alien life or them finding us gives you goosebumps? If all these things keep you up at night, then show your skills to prove such make believe scenarios.",
    posterUrl: "/events/obsteria.png", // Use the imported image
    registrationLink: "/",
  },
  {
    title: "Event 2",
    description: "Have you ever wondered what would have happened if the CERN Super Collider had somehow created a black hole ? Or what would Earth look like if an advanced Alien civilization had wreaked havoc upon our planet ? Does the very thought of us finding alien life or them finding us gives you goosebumps? If all these things keep you up at night, then show your skills to prove such make believe scenarios.",
    posterUrl: "/events/ojingo.png", // Use the imported image
    registrationLink: "https://example.com/register2",
  },
  {
    title: "Event 3",
    description: "Have you ever wondered what would have happened if the CERN Super Collider had somehow created a black hole ? Or what would Earth look like if an advanced Alien civilization had wreaked havoc upon our planet ? Does the very thought of us finding alien life or them finding us gives you goosebumps? If all these things keep you up at night, then show your skills to prove such make believe scenarios.",
    posterUrl: "/events/sig.png", // Use the imported image
    registrationLink: "/",
  },
  {
    title: "Event 4",
    description: "Have you ever wondered what would have happened if the CERN Super Collider had somehow created a black hole ? Or what would Earth look like if an advanced Alien civilization had wreaked havoc upon our planet ? Does the very thought of us finding alien life or them finding us gives you goosebumps? If all these things keep you up at night, then show your skills to prove such make believe scenarios.",
    posterUrl: "/events/triathlon.png", // Use the imported image
    registrationLink: "/",
  },

  {
    title: "Event 5",
    description: "Have you ever wondered what would have happened if the CERN Super Collider had somehow created a black hole ? Or what would Earth look like if an advanced Alien civilization had wreaked havoc upon our planet ? Does the very thought of us finding alien life or them finding us gives you goosebumps? If all these things keep you up at night, then show your skills to prove such make believe scenarios.",
    posterUrl: "/events/cosmic-quest.png", // Use the imported image
    registrationLink: "/",
  },

  {
    title: "Event 6",
    description: "Have you ever wondered what would have happened if the CERN Super Collider had somehow created a black hole ? Or what would Earth look like if an advanced Alien civilization had wreaked havoc upon our planet ? Does the very thought of us finding alien life or them finding us gives you goosebumps? If all these things keep you up at night, then show your skills to prove such make believe scenarios.",
    posterUrl: "/events/fake-off.png", // Use the imported image
    registrationLink: "/",
  },

  {
    title: "Event 7",
    description: "Have you ever wondered what would have happened if the CERN Super Collider had somehow created a black hole ? Or what would Earth look like if an advanced Alien civilization had wreaked havoc upon our planet ? Does the very thought of us finding alien life or them finding us gives you goosebumps? If all these things keep you up at night, then show your skills to prove such make believe scenarios.",
    posterUrl: "/events/space-survival.png", // Use the imported image
    registrationLink: "/",
  },
  // Add more events here
];
