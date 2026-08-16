import React, { useEffect, useState } from "react";
import API_URL from "./useApi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const IMAGE_URL = "https://toneop.s3.ap-south-1.amazonaws.com/";

const MenuScroll = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);

        const response = await fetch(`${API_URL}/api/menu`);

        if (!response.ok) {
          throw new Error("Failed to fetch menu");
        }

        const json = await response.json();
        const menuData = Array.isArray(json.data) ? json.data : [];

        const foodItems = menuData.flatMap((category) =>
          (category.food || []).map((food) => {
            const firstServing = food.food_serving?.[0];

            return {
              id: `${category.id}-${food.id}`,
              title: food.name,
              src: food.image ? `${IMAGE_URL}${food.image}` : "",
              kcal: firstServing?.kcal ?? 0,
            };
          })
        );

        const validFoodItems = foodItems.filter((item) => item.src);

        setData(validFoodItems);
        setError("");
      } catch (error) {
        console.error("Menu carousel error:", error);
        setError("Unable to load menu");
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 3 },
    mobileLarge: { breakpoint: { max: 768, min: 480 }, items: 2 },
    mobile: { breakpoint: { max: 480, min: 0 }, items: 1 },
  };

  /* =========================
     LOADING STATE
  ========================= */

  if (loading) {
    return (
      <section className="bg-transparent px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
              Fresh & Healthy
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              Explore Our <span className="text-orange-500">Menu</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base dark:text-slate-400">
              Delicious meals prepared with quality ingredients for your
              healthy lifestyle.
            </p>
          </div>

          <div className="flex min-h-[280px] items-center justify-center rounded-3xl border border-slate-200 bg-white/90 shadow-xl shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-black/20">
            <div className="flex flex-col items-center gap-4">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-orange-500 dark:border-slate-700 dark:border-t-orange-500" />

              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Loading our menu...
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* =========================
     ERROR / EMPTY STATE
  ========================= */

  if (error || data.length === 0) {
    return (
      <section className="bg-transparent px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
              Fresh & Healthy
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              Explore Our <span className="text-orange-500">Menu</span>
            </h2>
          </div>

          <div className="flex min-h-[280px] items-center justify-center rounded-3xl border border-slate-200 bg-white px-6 shadow-xl shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-2xl dark:bg-orange-500/10">
                🍽️
              </div>

              <p className="font-semibold text-slate-700 dark:text-slate-200">
                {error || "No menu items available"}
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Please try again later.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /*
   * Duplicate items so the carousel continues smoothly
   * even when the API returns a smaller number of items.
   */
  const carouselData =
    data.length < 5 ? [...data, ...data, ...data] : [...data, ...data];

  /* =========================
     MAIN MENU
  ========================= */

  return (
    <section className="relative bg-transparent px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADING */}

        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
            Fresh & Healthy
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Explore Our <span className="text-orange-500">Menu</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base dark:text-slate-400">
            Delicious meals prepared with quality ingredients and designed to
            fit your healthy lifestyle.
          </p>
        </div>

        {/* CAROUSEL CONTAINER */}

        <div className="rounded-3xl border border-slate-200 bg-white/90 px-2 py-6 shadow-xl shadow-slate-200/40 sm:px-5 sm:py-8 lg:px-8 dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-black/20">
          <Carousel
            swipeable
            draggable
            responsive={responsive}
            itemClass="px-2 sm:px-3"
            containerClass="pb-2"
            autoPlay
            autoPlaySpeed={2500}
            arrows
            infinite
            pauseOnHover
            showDots={false}
          >
            {carouselData.map((item, index) => (
              <div key={`${item.id}-${index}`} className="h-full py-2">
                <div className="group flex h-full min-h-[310px] flex-col items-center rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-lg dark:border-slate-800 dark:bg-slate-800/60 dark:hover:border-orange-500/40 dark:hover:bg-slate-800">
                  {/* FOOD IMAGE */}

                  <div className="flex h-48 w-full items-center justify-center overflow-hidden rounded-xl bg-white dark:bg-slate-900">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="h-44 w-44 object-contain transition-transform duration-500 group-hover:scale-110"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  {/* FOOD DETAILS */}

                  <div className="mt-4 flex w-full flex-1 flex-col items-center text-center">
                    <h3 className="line-clamp-2 text-sm font-bold leading-5 text-slate-800 sm:text-base dark:text-white">
                      {item.title}
                    </h3>

                    <div className="mt-auto pt-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
                        {item.kcal} Kcal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default MenuScroll;