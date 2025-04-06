"use client"
import React, { useState } from "react";
import { event } from "@/app/(root)/data" ;
const SchedulePage = () => {
  const [selectedDay, setSelectedDay] = useState("Day 1");

  // Dummy data for events

  const events = event;

  // Filter events based on selected day
  const filteredEvents = events.filter((event) => event.type.toLowerCase().includes(selectedDay.toLowerCase()));

  return (
    <div className="pt-24 z-1">  
    <div className="pl-8 relative">
      <button
        className={` bg-black text-white px-4 py-2 rounded-md mr-4 ${
          selectedDay === "Day 1" ? "bg-opacity-80 border-blue-400 border-2" : "bg-opacity-50"
        }`}
        onClick={() => setSelectedDay("Day 1")}
      >
        Day 1
      </button>
      <button
        className={` bg-black text-white px-4 py-2 rounded-md ${
          selectedDay === "Day 2" ? "bg-opacity-80 border-blue-400 border-2 " : "bg-opacity-50"
        }`}
        onClick={() => setSelectedDay("Day 2")}
      >
        Day 2
      </button>
    </div>
      <div className="flex flex-wrap justify-center mt-8">
    
        {events.map((event, index) => (
          <div key={index} className="event-card mb-8 mx-4 border-4 rounded-[0.85rem] border-spaceCon-quaternary pb-0.5 bg-spaceCon-primary bg-opacity-20 backdrop-blur-lg bg-clip-padding backdrop-filter">
            <img src={event.image} alt={event.name} className="w-[400px] h-[400px] rounded-xl rounded-b-none" />
            <div className="mt-4 p-4 pt-0">
              <h2 className="text-2xl font-semibold mb-2 text-spaceCon-quaternary">{event.name}</h2>
              <div className="text-spaceCon-quaternary mb-2">
                <strong>Time:</strong> {event.time}
              </div>
              <div className="text-spaceCon-quaternary mb-2">
                <strong>Location:</strong> {event.location}
              </div>
              <button className="bg-spaceCon-primary border-2 border-spaceCon-primary text-white px-4 py-2 rounded-md transition-all duration-200 hover:bg-transparent hover:border-2 hover:border-spaceCon-tertiary">Register</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;
