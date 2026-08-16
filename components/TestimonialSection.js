import React from "react";

const testimonialData = [
  {
    name: "Suchita Sharma",
    image: "https://toneopeats.com/public/img/User 2.png",
    description:
      "Their delicious and nutritious meals make it easy to avoid junk food. With their exceptional quality, timely delivery, and wide variety of options, ToneOpEats is my go-to choice for healthy eating.",
  },
  {
    name: "Rohit Singh Rajput",
    image: "https://toneopeats.com/public/img/User 1.png",
    description:
      "Ankit's healthy smile says it all! With ToneOpEats, he's not only enjoying delicious and premium meals, but also feeling great about his overall health.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-[70px] text-center mb-[60px] mt-[60px] bg-[#F8FBF5] dark:bg-mealflow-dark">
      <div>
        <h2 className="text-mealflow-text dark:text-mealflow-white">
          Testimonial
          <span className="text-[#80B53B]"> #healthysmiles</span>
        </h2>

        <br />
        <br />

        <div className="relative w-full h-full z-[1] flex box-content">
          <div className="shrink-0 w-full h-full relative">
            <div className="flex flex-row justify-evenly overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {testimonialData.map((testimonial, index) => (
                <div key={index} className="flex flex-row justify-evenly shrink-0">
                  <div>
                    <img
                      src={testimonial.image}
                      className="h-[270px] w-full p-[5%] object-cover"
                      alt={`User ${index + 1}`}
                    />
                  </div>

                  <div>
                    <p className="relative left-[35px] w-[200px] text-left text-[#3A3A3A] dark:text-mealflow-mutedDark mt-[12%]">
                      {testimonial.description}
                    </p>

                    <p className="relative w-[200px] text-mealflow-text dark:text-mealflow-white">
                      <b>{testimonial.name}</b>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;