import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-mealflow-light dark:bg-mealflow-dark">
      {/* ABOUT US */}
      <section className="bg-mealflow-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16 dark:bg-mealflow-dark">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-10 text-center text-3xl font-extrabold tracking-tight text-mealflow-text sm:text-4xl lg:text-5xl dark:text-mealflow-white">
            About Us
          </h1>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* IMAGE */}
            <div className="flex justify-center lg:justify-start lg:-ml-10">
              <div className="relative w-full max-w-[550px] overflow-hidden rounded-[24px] border border-mealflow-border bg-mealflow-light p-2 shadow-mealflow dark:border-mealflow-borderDark dark:bg-mealflow-darkCard">
                <img
                  src="/images/about-mealflow.png"
                  alt="MealFlow healthy meals"
                  className="h-auto w-full rounded-[18px] object-cover"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="text-mealflow-text dark:text-mealflow-white">
              <p className="text-2xl font-bold leading-tight text-mealflow-text dark:text-mealflow-white">
                Healthy food made simple.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-mealflow-muted dark:text-mealflow-mutedDark">
                MealFlow is a meal subscription platform designed to make
                healthy and delicious food convenient for everyday life.
                Choose meals based on your preferences and receive them
                directly at your doorstep.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-mealflow-muted dark:text-mealflow-mutedDark">
                We focus on balanced meals, quality ingredients, convenient
                ordering, and flexible subscription plans so you can spend
                less time worrying about what to eat.
              </p>

              <h5 className="mt-8 text-3xl font-bold text-[#80B53B] sm:text-[37px]">
                Why MealFlow?
              </h5>

              <p className="mt-3 text-[15px] leading-7 text-mealflow-muted dark:text-mealflow-mutedDark">
                MealFlow makes it easier to build a consistent eating routine
                without compromising on taste or convenience.
              </p>

              <div className="mt-7 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-mealflow-text dark:text-mealflow-white">
                    You Choose, We Prepare
                  </h3>

                  <p className="mt-2 text-[15px] leading-7 text-mealflow-muted dark:text-mealflow-mutedDark">
                    Select your preferred meals, food preferences, and
                    subscription options. We prepare your meals according to
                    your selection.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-mealflow-text dark:text-mealflow-white">
                    Fresh &amp; Balanced Meals
                  </h3>

                  <p className="mt-2 text-[15px] leading-7 text-mealflow-muted dark:text-mealflow-mutedDark">
                    Our meals are planned with quality ingredients and balanced
                    portions to support a healthier everyday lifestyle.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-mealflow-text dark:text-mealflow-white">
                    Your Convenience, Our Priority
                  </h3>

                  <p className="mt-2 text-[15px] leading-7 text-mealflow-muted dark:text-mealflow-mutedDark">
                    From selecting your meals to receiving them at your
                    doorstep, MealFlow keeps the entire experience simple and
                    convenient.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-mealflow-border bg-mealflow-light px-4 py-12 sm:px-6 lg:px-8 lg:py-16 dark:border-mealflow-borderDark dark:bg-mealflow-dark">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-10 text-center text-3xl font-extrabold tracking-tight text-mealflow-text sm:text-4xl lg:text-5xl dark:text-mealflow-white">
            How It Works?
          </h1>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* IMAGE */}
            <div className="flex justify-center">
              <div className="w-full max-w-[550px] overflow-hidden rounded-[24px] border border-mealflow-border bg-mealflow-white p-2 shadow-mealflow dark:border-mealflow-borderDark dark:bg-mealflow-darkCard">
                <img
                  src="/images/mealflow-how-it-works.webp"
                  alt="How MealFlow works"
                  className="h-auto w-full rounded-[18px] object-cover"
                />
              </div>
            </div>

            {/* STEPS */}
            <div>
              <div className="space-y-4">
                {[
                  "Select your food and time preference.",
                  "Choose your preferred meal package.",
                  "Select a subscription plan that suits you.",
                  "Enter your delivery and contact details.",
                  "Complete your payment securely.",
                  "Receive your meals at your selected location.",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-start gap-4 rounded-2xl border border-mealflow-border bg-mealflow-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#80B53B] hover:shadow-mealflow dark:border-mealflow-borderDark dark:bg-mealflow-darkCard dark:hover:border-[#80B53B]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#80B53B] text-sm font-bold text-white">
                      {index + 1}
                    </span>

                    <p className="pt-1 text-[15px] leading-6 text-mealflow-text dark:text-mealflow-mutedDark">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              {/* INDIVIDUAL MEALS */}
              <div className="mt-10">
                <p className="text-[22px] font-bold text-mealflow-text dark:text-mealflow-white">
                  Ordering individual meals
                </p>

                <div className="mt-5 space-y-4">
                  {[
                    "Select the meal you want to order.",
                    "Choose your preferred payment option.",
                    "Complete your order and receive your meal at your selected location.",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="flex items-start gap-4 rounded-2xl border border-mealflow-border bg-mealflow-white p-4 dark:border-mealflow-borderDark dark:bg-mealflow-darkCard"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mealflow-orange text-xs font-bold text-white">
                        {index + 1}
                      </span>

                      <p className="pt-1 text-[15px] leading-6 text-mealflow-text dark:text-mealflow-mutedDark">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;