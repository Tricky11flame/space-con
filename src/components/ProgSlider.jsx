import React from 'react'
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProgSlider = () => {
  const settings = {
    arrows: false,
    rtl: true,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
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



  return (
    <div className='m-auto xl:px-16 sm:px-10 px-8 md:px-10'>
      <div className='mt-20 bg-opacity-30 backdrop-blur-lg bg-gray-700 bg-clip-padding backdrop-filter'>
        <SlickSlider {...settings}>

          {data.map((d) => (
            <div key={d.title} className='flex flex-col justify-center items-center text-black '>
              <div className='flex flex-col justify-center items-center p-5'>
                <div className='w-[240px] h-[240px]'>
                  <img src={d.posterUrl} className='rounded-xl' />
                </div>

                <div className='gap-4 p-4 flex flex-col justify-center items-center align-middle'>
                  <p className='text-xl font-semibold text-white'>{d.title}</p>
                  <p className='text-white'>{d.description}</p>
                  <div className='bg-spaceCon-tertiary text-white text-lg px-6 py-1 rounded-md'>{d.day}</div>
                  <div className=' bg-spaceCon-tertiary text-white text-lg px-6 py-1 rounded-md'>{d.time}</div>
                </div>
              </div>
            </div>
          ))}

        </SlickSlider>
      </div>
    </div>
  )
}

export default ProgSlider

const data = [
  {
    title: "Sponsorship 1",
    description: "Description for Sponsorship 1",
    posterUrl: "sponsors/president-a.png", // Use the imported image
    day: "Day1",
    time: "12:00 pm",
  },
  {
    title: "Sponsorship 2",
    description: "Description for Sponsorship 2",
    posterUrl: "sponsors/president-k.png", // Use the imported image
    day: "Day1",
    time: "12:00 pm",
  },
  {
    title: "Sponsorship 3",
    description: "Description for Sponsorship 3",
    posterUrl: "sponsors/president-a.png", // Use the imported image
    day: "Day1",
    time: "12:00 pm",
  },
  {
    title: "Sponsorship 4",
    description: "Description for Sponsorship 4",
    posterUrl: "sponsors/president-k.png", // Use the imported image
    day: "Day1",
    time: "12:00 pm",
  },

  {
    title: "Sponsorship 5",
    description: "Description for Sponsorship 5",
    posterUrl: "sponsors/president-a.png", // Use the imported image
    day: "Day1",
    time: "12:00 pm",
  },

  {
    title: "Sponsorship 6",
    description: "Description for Sponsorship 6",
    posterUrl: "sponsors/president-k.png", // Use the imported image
    day: "Day1",
    time: "12:00 pm",
  },

  {
    title: "Sponsorship 7",
    description: "Description for Sponsorship 7",
    posterUrl: "sponsors/president-a.png", // Use the imported image
    day: "Day1",
    time: "12:00 pm",
  },
  // Add more Sponsorship here
];
