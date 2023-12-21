// src/pages/events.js
import Navbar from '../../../components/Navbar';
import EventCard from '../../../components/EventCard';

const Page = () => {
  return (
      <div className="mx-4 my-8">
        <h2 className="text-2xl font-bold mb-4">All Events</h2>
        {/* Sliding card holder for all events */}
        <EventCard />
        <EventCard />
        <EventCard />
        {/* Add more EventCard components as needed */}
      </div>
  );
};

export default Page;
