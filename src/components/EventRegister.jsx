export default function EventRegister({eventIdno ,
    event = {
        title: "Obilvion Event",
        posterUrl: "obsteria.png",
        date: "January 1, 2023",
        registrationDeadline: "December 15, 2022",
        venue: "Moksha Ground",
        timing: "1:00 PM - 2:00 PM",
        day: "Monday",
        eventId: 1003293,
    },
}) {
    
    return (
        <div className="w-[100%] flex justify-evenly py-10">
            <div className="w-[40%]">
                <img src={event.posterUrl} alt="" />
            </div>

            <div>
                <h1 className="text-4xl">{event.title}</h1>
                <h2 className="text-2xl text-teal-300 mb-2 ">
                    <strong>Event ID:</strong>{eventIdno}
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
        </div>
    )
}