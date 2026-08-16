import React, { useState } from "react";
import styles from "../styles/Faq.module.css";

const faqData = [
  {
    question: "How does it work?",
    answer:
      "MealFlow is a subscription model that offers healthy meals for lunch and dinner, as per your preference. To start with the MealFlow plan, visit MealFlow.com and take a subscription plan. Then, choose the meal type and complete the payment.",
  },
  {
    question: "Is MealFlow is a subscription meal service?",
    answer:
      "MealFlow provides you with 2 options. Subscription plans 3,7,14, and 30 days for one-time orders and Ala kart options to choose and try individual items from the menu.",
  },
  {
    question: "What if i want a weekly subscription?",
    answer:
      "To take the weekly subscription plan, you may select a 7 days subscription.",
  },
  {
    question: "How do i order/recive my meal?",
    answer:
      "To start with the MealFlow plan, visit MealFlow.com and take a subscription plan. Choose the meal type and complete the payment. Your plan will get activated from the next day of subscribing. You may also order from Ala Kart/Swiggy/Zomato for one-time delivery.",
  },
  {
    question: "Do i get choose my meals?",
    answer: "Yes, you can choose your meals.",
  },
  {
    question: "How MealFlow help to reduce weight?",
    answer:
      "Our meals are prepared with low fat and low calorie ingredients. We use only olive oil and strictly avoid any added sugars or preservatives. These meals provide you all the essential nutrients and keep you full for longer.",
  },
  {
    question: "What is a healthy meal?",
    answer:
      "Healthy meal is a combination of ingredients that provide you with all the essential nutrients while avoiding any harmful sugar, fat or chemicals.",
  },
  {
    question: "Are my meals Frozen",
    answer: "No, the meals are freshly prepared before delivery.",
  },
  // ...and so on for the rest of the questions
];

const faqSecond = [
  {
    question: "What are the price range of meals?",
    answer:
      "The subscription plan starts from Rs. 225 for 3 days. For more info, please visit-https://MealFlow.com/.",
  },
  {
    question: "Where is delivery available?",
    answer:
      "We currently deliver at all locations in Bhopal. We are soon opening in Indore as well.",
  },
  {
    question: "How much does delivery costs",
    answer:
      "MealFlow provides free delivery for all subscription plans. However, if you order through Ala Kart/Swiggy/Zomato, the delivery is charged per their respective policy.",
  },
  {
    question: "How long does it take for you to deliver my meal after payment?",
    answer:
      "Your plan gets activated from the next day of subscribing. However, if you order through Ala Kart/Swiggy/Zomato, the meals will be delivered in 1-1.5 hours.",
  },
  {
    question: "What if I need to cancel my order?",
    answer:
      "To cancel your subscription, please notify MealFlow 7 days in advance. The subscription amount will be refunded within 7-10 working days.",
  },
  {
    question: "Do you have dairy-free meals?",
    answer:
      "Yes, we have options in grills, juices and smoothies available, which do not include any dairy products.",
  },
  {
    question: "What is the shelf life of a meals?",
    answer:
      "Our meals are freshly prepared before delivery. It is suggested to consume meals under 2-3 hours to enjoy the best of them.",
  },

  // ...and so on for the rest of the questions
];
const Faq = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);
  const [openQuestionItem, setOpenQuestionItem] = useState(null);

  const toggleAnswer = (index) => {
    setOpenQuestionIndex(index === openQuestionIndex ? null : index);
  };

  const toggleAnswer_second = (item) => {
    setOpenQuestionItem(item === openQuestionItem ? null : item);
  };

  return (
    <div
      //   style={{
      //     marginTop: "4%",
      //     display: "flex",
      //     flexFlow: "column",
      //     alignItems: "center",
      //   }}
      className={styles.main}
    >
      <div className={styles.top_box}>
        <h3 className={styles.header_text}>FAQ</h3>
        <h4 className={styles.header_summary}>
          We don’t just deliver, we also prepare….. the food that makes you feel
          good and stay healthy!
        </h4>
        <p className={styles.text23}>
          MealFlow brings the bowl of health & fitness to your doorstep to
          make you reach the healthier self you envisioned.
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          {faqData.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleAnswer(index)}
                className={styles.button}
              >
                {faq.question}
              </button>
              {openQuestionIndex === index && (
                <p
                  className={styles.para}
                  style={{ color: "#000", margin: "15px" }}
                >
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className={styles.card}>
          {faqSecond.map((faq, item) => (
            <div key={item}>
              <button
                onClick={() => toggleAnswer_second(item)}
                className={styles.button}
              >
                {faq.question}
              </button>
              {openQuestionItem === item && (
                <p
                  className={styles.para}
                  style={{ color: "#000", margin: "15px" }}
                >
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
