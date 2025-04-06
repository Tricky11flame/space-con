export default function EventCard({
  event = {
    title: "Sample Event",
    posterUrl: "events/obsteria.png",
    description:
      "Join us for an exciting and informative event where experts from various fields will share their insights. Explore cutting-edge technologies, engage in thought-provoking discussions, and connect with like-minded individuals. Don't miss this opportunity to broaden your horizons!",
    date: "January 1, 2023",
    registrationDeadline: "December 15, 2022",
    venue: "Virtual",
    timing: "3:00 PM - 5:00 PM",
    day: "Day 1",
  },
}) {
  return (
    <div className="flex flex-col mb-8 bg-spaceCon-secondary bg-opacity-30 backdrop-blur-lg text-white my-6 rounded-xl shadow-lg p-6 md:p-8 md:w-1/2 lg:w-1/3 sm:w-full">
      <img src={event.posterUrl} alt={event.title} className="w-full h-auto rounded-t-xl mb-4" />

      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold mb-2 text-spaceCon-quaternary">{event.title}</h2>
        <button className="bg-spaceCon-tertiary border-4 border-spaceCon-tertiary text-white px-4 py-1.5 mb-0.5 rounded-md transition-all duration-300 hover:bg-transparent ">
          <a href="events/1000323">Register</a>
        </button>
      </div>

      <p className="text-spaceCon-quaternary mb-2">
        <strong>Event Date:</strong> {event.date}
      </p>
      <p className="text-spaceCon-quaternary mb-2">
        <strong>Registration Deadline:</strong> {event.registrationDeadline}
      </p>
      <p className="text-spaceCon-quaternary mb-2">
        <strong>Venue:</strong> {event.venue}
      </p>
      <p className="text-spaceCon-quaternary mb-2">
        <strong>Timing:</strong> {event.timing}
      </p>
      <p className="text-spaceCon-quaternary mb-2">
        <strong>Day:</strong> {event.day}
      </p>
      <p className="text-spaceCon-quaternary">{event.description}</p>
    </div>
  );
}
