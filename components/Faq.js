import React, { useState } from "react";

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
];

const Faq = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);
  const [openQuestionItem, setOpenQuestionItem] = useState(null);

  const toggleAnswer = (index) => {
    setOpenQuestionIndex(index === openQuestionIndex ? null : index);
  };

  const toggleAnswerSecond = (item) => {
    setOpenQuestionItem(item === openQuestionItem ? null : item);
  };

  return (
    <div className="w-full min-h-screen box-border mt-[40px] bg-mealflow-light px-4 py-10 text-mealflow-text transition-colors duration-300 dark:bg-mealflow-dark dark:text-white sm:px-6 lg:mt-[70px] lg:px-8 lg:py-16">
      {/* HEADER */}

      <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-14">
        <h3 className="m-0 text-3xl font-bold text-mealflow-text dark:text-white sm:text-4xl">
          FAQ
        </h3>

        <h4 className="mx-auto mt-4 max-w-3xl text-base font-semibold leading-7 text-mealflow-text dark:text-slate-200 sm:text-lg">
          We don’t just deliver, we also prepare….. the food that makes you
          feel good and stay healthy!
        </h4>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-mealflow-muted dark:text-mealflow-mutedDark sm:text-base">
          MealFlow brings the bowl of health &amp; fitness to your doorstep to
          make you reach the healthier self you envisioned.
        </p>
      </div>

      {/* FAQ CARDS */}

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {/* FIRST COLUMN */}

        <div className="w-full overflow-hidden rounded-mealflow border border-mealflow-border bg-mealflow-white shadow-mealflow dark:border-mealflow-borderDark dark:bg-mealflow-darkCard dark:shadow-none">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border-b border-mealflow-border last:border-b-0 dark:border-mealflow-borderDark"
            >
              <button
                type="button"
                onClick={() => toggleAnswer(index)}
                className="flex w-full items-center justify-between gap-4 border-0 bg-transparent px-5 py-5 text-left text-sm font-semibold text-mealflow-text outline-none transition-colors duration-200 hover:bg-mealflow-light focus:outline-none dark:text-white dark:hover:bg-mealflow-navy sm:px-6 sm:text-base"
              >
                <span>{faq.question}</span>

                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg transition-transform duration-200 ${
                    openQuestionIndex === index
                      ? "rotate-45 bg-mealflow-orange text-white"
                      : "bg-mealflow-orangeLight text-mealflow-orange dark:bg-orange-500/10 dark:text-orange-400"
                  }`}
                >
                  +
                </span>
              </button>

              {openQuestionIndex === index && (
                <p className="m-0 px-5 pb-5 text-sm leading-7 text-mealflow-muted dark:text-mealflow-mutedDark sm:px-6">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* SECOND COLUMN */}

        <div className="w-full overflow-hidden rounded-mealflow border border-mealflow-border bg-mealflow-white shadow-mealflow dark:border-mealflow-borderDark dark:bg-mealflow-darkCard dark:shadow-none">
          {faqSecond.map((faq, item) => (
            <div
              key={item}
              className="border-b border-mealflow-border last:border-b-0 dark:border-mealflow-borderDark"
            >
              <button
                type="button"
                onClick={() => toggleAnswerSecond(item)}
                className="flex w-full items-center justify-between gap-4 border-0 bg-transparent px-5 py-5 text-left text-sm font-semibold text-mealflow-text outline-none transition-colors duration-200 hover:bg-mealflow-light focus:outline-none dark:text-white dark:hover:bg-mealflow-navy sm:px-6 sm:text-base"
              >
                <span>{faq.question}</span>

                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg transition-transform duration-200 ${
                    openQuestionItem === item
                      ? "rotate-45 bg-mealflow-orange text-white"
                      : "bg-mealflow-orangeLight text-mealflow-orange dark:bg-orange-500/10 dark:text-orange-400"
                  }`}
                >
                  +
                </span>
              </button>

              {openQuestionItem === item && (
                <p className="m-0 px-5 pb-5 text-sm leading-7 text-mealflow-muted dark:text-mealflow-mutedDark sm:px-6">
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