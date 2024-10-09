import upcomingEvents from "./UpcomingEvents";

export default function Upcoming() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <h1 className="py-4 lg:py-12 px-4 text-center text-2xl lg:text-4xl font-extrabold">
        Upcoming Sunshine Events
      </h1>
      <hr className="h-px mt-1 border-0 bg-gray-700"></hr>
      {upcomingEvents.map((event, index) => (
        <div className="grid grid-cols-6 blocksy" id={`${index}`} key={index}>
          <div className="col-span-1 \lg:col-span-1 flex flex-col">
            <div className="h-6 flex justify-center">
              <div className="h-full w-2 lg:w-5 bg-gray-800"></div>
            </div>
            <div className="p-6 text-center">
              <p className="text-sm lg:text-lg font-bold">{event.date}</p>
              <p className="text-xs lg:text-base">{event.day}</p>
            </div>
            <div className="flex-grow flex justify-center">
              <div className="h-full w-2 lg:w-5 bg-gray-800"></div>
            </div>
          </div>
          <div className="pt-36 lg:pt-12 pb-28 lg:px-12 col-span-4 lg:col-span-5 flex flex-col justify-center">
            <div className="text-lg lg:text-3xl font-extrabold">
              {event.name}
            </div>
            <div className="mt-12 text-xs lg:text-base">
              {event.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
