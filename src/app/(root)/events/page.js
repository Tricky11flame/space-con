import Navbar from "@/components/Navbar";

import EventCard from "@/components/EventCard";
const Page = () => {
  return (
    <>
    <Navbar/>
    <div className="fixed w-full"><img src="/background/home-bg-blur.png" alt="" className="-z-50 w-full" /></div>
    <div className="fixed flex justify-center w-full"><img src="/background/home-bg.png" alt="" className="-z-49 w-full" loading="lazy" /></div>
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
