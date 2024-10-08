import React, { useState } from "react";

const testimonials: string | any[] = [
  {
    name: "Supraj B",
    occupation: "B.Tech",
    text: "Sunshine helped me a lot to adjust to campus life here. I also felt secure since I knew there will always be someone I could turn to.",
    image: "/experiences/SuprajB-comp.jpg",
  },
  {
    name: "Karthik Kanukollu",
    occupation: "B.Tech",
    text: "I first heard about Sunshine on the day I joined college; when we were introduced to our mentors. It is a very good initiative, as it gives new students someone in the college they can ask doubts, so they don't feel left out.",
    image: "/experiences/KarthikK-comp.jpg",
  },
  {
    name: "Sai Manasa Pappu",
    occupation: "B.Tech",
    text: "Yeah, my mentors are the ones whom I first consulted for most of the issues. Sunshine events had also been an opportunity to interact with many of my batch mates in my early days.",
    image: "/experiences/SaiM-comp.jpg",
  },
  {
    name: "Riddhi Sahare",
    occupation: "B.Tech",
    text: "At the time of registration I got to know about Sunshine. In starting days I used to feel so lonely because of less number of known people, at that time Sunshine really helped me.",
    image: "/experiences/RiddhiS-crop.jpg",
  },
  {
    name: "Dhanush Sahasra Bejjarapu",
    occupation: "B.Tech",
    text: "My mentors helped me a lot when I was struggling. So I see Sunshine as an opportunity to lead freshers in a right direction",
    image: "/experiences/DhanushS-crop.jpg",
  },
  {
    name: "Akshit Jain",
    occupation: "B.Tech",
    text: "It is a very good initiative as it helps people to open up to others, as they are exposed to a completely new environment and helps them to cope up with it.",
    image: "/experiences/AkshitJ-comp.jpg",
  },
  {
    name: "Harsh Jain Pincha",
    occupation: "B.Tech",
    text: "I feel Sunshine is a great initiative. It is the first family for a fresher away from home where they feel secure.",
    image: "/experiences/HarshJ-comp.jpg",
  },
  {
    name: "Athithiya Raj K",
    occupation: "B.Tech",
    text: "I came to IITH from so far. First day, it helped me recover from home sickness. I got to know many people and made many friends here which may not have been possible without Sunshine. If Sunshine was not there, I might have stayed reserved and alone staying all day in my room.",
    image: "/experiences/AthithiyaR-comp.jpg",
  },
  {
    name: "Radhika Deshpande",
    occupation: "Sunshine Student Head (2017 & 2018)",
    text: "We often give our happiness the back seat thinking that it will someday come in the future. But, we forget that happiness is to be designed for the present. If you give your dreams priority, you will never have time for fears, regrets and grudges.",
    image: "/experiences/Radhika_Deshpande-comp.jpg",
  },
];

const TestimonialCarousel = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleNext = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="container mx-auto px-3 md:px-6 pt-16 relative z-1 bg-gradient-to-b from-blue-500 to-white">
      <section className="mb-32 text-center">
        <h2 className="mb-12 text-3xl font-bold">What we hear</h2>

        <div className="mx-auto max-w-3xl">
          <div className="bg-blue-900 p-4 rounded-lg text-white">
            <img
              className="mx-auto mb-6 rounded-full shadow-lg w-24 h-24 object-cover"
              src={currentTestimonial.image}
              alt="avatar"
            />
            <h5 className="mb-2 text-lg font-bold">
              {currentTestimonial.name}
            </h5>
            <p className="mb-4 font-medium">{currentTestimonial.occupation}</p>
            <p className="mb-6 text-gray-300 lg:h-16">
              {currentTestimonial.text}
            </p>
          </div>
          <div className="mt-4 flex justify-between">
            <button
              className="text-blue-500 text-2xl hover:text-blue-900 focus:outline-none"
              onClick={handlePrev}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                />
              </svg>
            </button>
            <button
              className="text-blue-500 text-2xl hover:text-blue-900 focus:outline-none"
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialCarousel;
