// // src/pages/events.js
// import Navbar from '../../../components/Navbar';
// import EventCard from '../../../components/EventCard';
import Navbar from "@/components/Navbar";

import EventCard from "@/components/EventCard";
const Page = () => {
  return (
    <>
    <Navbar/>
    <div className="fixed w-[100%]"><img src="bg-img-blur.jpg" alt="" className="-z-50 w-[100%]" /></div>
    <div className="fixed flex justify-center"><img src="bg-img.jpg" alt="" className="-z-49 w-[100%] " loading="lazy" /></div>
      <div className="flex flex-wrap md:space-x-6 justify-center items-center py-40">
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        {/* Add more EventCard components as needed */}
      </div>
    </>
  );
};

export default Page;
