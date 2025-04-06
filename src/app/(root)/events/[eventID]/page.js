import Navbar2 from "@/components/Navbar2";
import EventRegister from "@/components/EventRegister";
import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";
import RegistrationForm from "@/components/RegistrationForm";

export default function Page({ params }) {

    return (
        
        <>
        <Navbar/>
        <div className="fixed w-full"><img src="/background/home-bg-blur.png" alt="" className="-z-50 w-full" /></div>
        <div className="fixed flex justify-center w-full"><img src="/background/home-bg.png" alt="" className="-z-49 w-full" loading="lazy" /></div>
          <div className=" relative pt-24">
            <RegistrationForm/>
            {/* Add more EventCard components as needed */}
          </div>
        {/* <div className="w-[100%] flex justify-evenly py-10">
                <div className="">
                    <img src={event.posterUrl} alt="" />
                </div>
                <div>
                    <h1 className="text-4xl">{event.title}</h1>
                    <h2 className="text-2xl text-teal-300 mb-2 ">
                        <strong>Event ID:</strong>{params.eventId}
                    </h2>
                    <p className=" mb-2">
                        <strong>Event Date:</strong> {event.date}
                    </p>
                    <p className=" mb-2">
                        <strong>Registration Deadline:</strong> {event.registrationDeadline}
                    </p>
                    <p className=" mb-2">
                        <strong>Venue:</strong> {event.venue}
                    </p>
                    <p className=" mb-2">
                        <strong>Timing:</strong> {event.timing}
                    </p>
                    <p className=" mb-2">
                        <strong>Day:</strong> {event.day}
                    </p>
                    <div className="flex w-60 h-60 justify-center items-center">
                        <button class="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            Register For the event
                        </button>
                    </div>
                </div>
            </div > */}

        </>
    )
}