import React from "react";
import styles from "../styles/Bannerstatic.module.css";

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
    <section
      className={styles.sm_section}
      style={{ backgroundColor: "#F8FBF5" }}
    >
      <div>
        <div>
          <h2 className={styles.h2}>
            Testimonial<span style={{ color: "#80B53B" }}> #healthysmiles</span>
          </h2>
        </div>
        <br />
        <br />
        <div>
          <div className={styles.swiper_wrapper}>
            <div className={styles.swiper_slide}>
              <div
                className={styles.display_container}
                style={{ overflowX: "auto" }}
              >
                {testimonialData.map((testimonial, index) => (
                  <div key={index} className={styles.display_container}>
                    <div>
                      <img
                        src={testimonial.image}
                        className={styles.test_image}
                        alt={`User ${index + 1}`}
                      />
                    </div>
                    <div>
                      <p className={styles.para}>{testimonial.description}</p>
                      <p className={styles.name}>
                        <b>{testimonial.name}</b>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
