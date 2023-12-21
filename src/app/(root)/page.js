// src/app/(root/)page.js
import React from 'react';
import EventCard from '../../components/EventCard';
import ProgramCard from '../../components/ProgramCard';

const Home = () => {
  return (
    <div>
      <div className="mx-4 my-8">
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        {/* Sliding card holder for events */}
        <EventCard />
        <EventCard />
      </div>
      <div className="mx-4 my-8">
        <h2 className="text-2xl font-bold mb-4">Fun Programmes</h2>
        {/* Sliding card holder for fun programmes */}
        <ProgramCard />
        <ProgramCard />
      </div>
    </div>
  );
};

export default Home;
