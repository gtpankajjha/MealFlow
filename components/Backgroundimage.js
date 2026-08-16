import React from "react";
import BannerForm from "./BannerForm";

const Backgroundimage = () => {
  const bannerImage = "https://toneop.s3.ap-south-1.amazonaws.com/toneop_eats/foodv2/Web_PANEER_TIKKA_makhani_result.webp";

  const benefits = [
    "Every dish is prepared in olive oil",
    "No added sugar, color or preservatives",
    "Designed as per calorie requirements",
    "Nutrition and portions planned by expert dieticians",
    "High protein and low carb food",
    "Made with fresh and best quality ingredients",
    "Flexibility of plans",
    "On-time doorstep delivery",
  ];

  return (
    <div className="bg-mealflow-white dark:bg-mealflow-dark">
      <BannerForm />

      <section className="relative overflow-hidden bg-mealflow-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20 dark:bg-mealflow-dark">
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-mealflow-orange/10 blur-3xl dark:bg-mealflow-orange/5" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#38B4A8]/10 blur-3xl dark:bg-[#38B4A8]/5" />

        <div className="relative mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mb-10 max-w-3xl sm:mb-14 lg:mb-16">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-mealflow-orange sm:text-sm">
              Healthy • Delicious • Fresh
            </p>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-mealflow-text sm:text-5xl lg:text-6xl dark:text-mealflow-white">
              Health &amp; Taste
              <span className="block bg-gradient-to-r from-mealflow-orange to-[#38B4A8] bg-clip-text text-transparent">
                At Your Doorstep
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-mealflow-muted sm:text-base dark:text-mealflow-mutedDark">
              Enjoy nutritious, delicious meals prepared with quality ingredients and delivered conveniently to your doorstep.
            </p>
          </div>

          {/* Main content */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="group relative mx-auto max-w-xl">
                {/* Image glow */}
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-mealflow-orange/20 to-[#38B4A8]/20 blur-2xl transition duration-500 group-hover:blur-3xl" />

                {/* Image card */}
                <div className="relative overflow-hidden rounded-[2rem] border border-mealflow-border bg-mealflow-white p-2 shadow-2xl shadow-slate-200/60 dark:border-mealflow-borderDark dark:bg-mealflow-darkCard dark:shadow-black/30">
                  <img
                    src={bannerImage}
                    alt="Healthy Meal"
                    className="h-[280px] w-full rounded-[1.5rem] object-cover transition duration-700 group-hover:scale-105 sm:h-[380px] lg:h-[460px]"
                  />

                  {/* Image badge */}
                  <div className="absolute bottom-6 left-6 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md dark:border-mealflow-borderDark/60 dark:bg-mealflow-darkCard/90">
                    <p className="text-xs font-semibold uppercase tracking-wide text-mealflow-muted dark:text-mealflow-mutedDark">
                      MealFlow
                    </p>

                    <p className="mt-1 text-sm font-bold text-mealflow-text dark:text-mealflow-white">
                      Fresh &amp; Healthy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <p className="text-sm font-bold uppercase tracking-wider text-[#38B4A8]">
                  Why choose us?
                </p>

                <h2 className="mt-2 text-2xl font-bold text-mealflow-text sm:text-3xl dark:text-mealflow-white">
                  Better food. Better choices.
                </h2>

                <p className="mt-3 text-sm leading-6 text-mealflow-muted dark:text-mealflow-mutedDark">
                  We focus on making healthy eating simple, convenient and enjoyable.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="group flex items-start gap-3 rounded-2xl border border-mealflow-border bg-mealflow-light p-4 transition-all duration-300 hover:-translate-y-1 hover:border-mealflow-orange/40 hover:bg-mealflow-white hover:shadow-md dark:border-mealflow-borderDark dark:bg-mealflow-darkCard/70 dark:hover:border-mealflow-orange/30 dark:hover:bg-mealflow-darkCard"
                  >
                    {/* Check icon */}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-mealflow-orange to-[#38B4A8] text-sm font-bold text-white shadow-sm">
                      ✓
                    </span>

                    <p className="pt-0.5 text-sm font-medium leading-5 text-mealflow-text dark:text-mealflow-mutedDark">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom highlight */}
              <div className="mt-7 flex flex-wrap gap-3">
                <div className="rounded-full bg-mealflow-orangeLight px-4 py-2 text-xs font-bold text-mealflow-orange dark:bg-mealflow-orange/10 dark:text-mealflow-orange">
                  🥗 Healthy Meals
                </div>

                <div className="rounded-full bg-[#E8F8F6] px-4 py-2 text-xs font-bold text-[#26988E] dark:bg-[#38B4A8]/10 dark:text-[#38B4A8]">
                  🚚 Doorstep Delivery
                </div>

                <div className="rounded-full bg-mealflow-border px-4 py-2 text-xs font-bold text-mealflow-muted dark:bg-mealflow-borderDark dark:text-mealflow-mutedDark">
                  💚 Quality Ingredients
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Backgroundimage;