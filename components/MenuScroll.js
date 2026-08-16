import React, { useEffect, useState } from "react";

import styles from "../styles/MenuScroll.module.css";
import API_URL from "./useApi";
import "swiper/swiper-bundle.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const IMAGE_URL =
  "https://toneop.s3.ap-south-1.amazonaws.com/";

const MenuScroll = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch menu");
        }

        const json = await response.json();

        /*
         * API response:
         *
         * {
         *   success: true,
         *   count: ...,
         *   data: [
         *     {
         *       id: 15,
         *       name: "...",
         *       image: "...",
         *       food: [...]
         *     }
         *   ]
         * }
         */

        const menuData = json.data || [];

        /*
         * Convert category -> food[] into one
         * flat array for the carousel.
         */
        const foodItems = menuData.flatMap((category) =>
          (category.food || []).map((food) => {
            const firstServing = food.food_serving?.[0];

            return {
              id: `${category.id}-${food.id}`,
              title: food.name,
              src: food.image
                ? `${IMAGE_URL}${food.image}`
                : "",
              kcal: firstServing?.kcal ?? 0,
            };
          })
        );

        /*
         * Only show items which have an image.
         *
         * This prevents blank carousel cards if some
         * food records don't have images yet.
         */
        const validFoodItems = foodItems.filter(
          (item) => item.src
        );

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
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 5,
    },

    tablet: {
      breakpoint: {
        max: 1024,
        min: 767,
      },
      items: 3,
    },

    tab: {
      breakpoint: {
        max: 767,
        min: 464,
      },
      items: 2,
    },

    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
    },
  };

  /*
   * Loading state
   */
  if (loading) {
    return (
      <section
        className={styles.sm_section}
        style={{ backgroundColor: "#F8FBF5" }}
      >
        <div>
          <div className={styles.sm_Head}>
            <h2 className={styles.sm_Head_h2}>
              Our{" "}
              <span style={{ color: "#80B53B" }}>
                Menu
              </span>
            </h2>
          </div>

          <div className={styles.swiper_container}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "250px",
                width: "100%",
              }}
            >
              <span>Loading menu...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /*
   * Error / empty state
   */
  if (error || data.length === 0) {
    return (
      <section
        className={styles.sm_section}
        style={{ backgroundColor: "#F8FBF5" }}
      >
        <div>
          <div className={styles.sm_Head}>
            <h2 className={styles.sm_Head_h2}>
              Our{" "}
              <span style={{ color: "#80B53B" }}>
                Menu
              </span>
            </h2>
          </div>

          <div className={styles.swiper_container}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "250px",
                width: "100%",
              }}
            >
              <span>
                {error || "No menu items available"}
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section
        className={styles.sm_section}
        style={{ backgroundColor: "#F8FBF5" }}
      >
        <div>
          {/* =========================
              SECTION HEADING
          ========================= */}
          <div className={styles.sm_Head}>
            <h2 className={styles.sm_Head_h2}>
              Our{" "}
              <span style={{ color: "#80B53B" }}>
                Menu
              </span>
            </h2>
          </div>

          {/* =========================
              CAROUSEL
          ========================= */}
          <div className={styles.swiper_container}>
            <div
              style={{
                display: "flex",
                overflow: "auto",
                scrollbarWidth: "none",
              }}
            >
              <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                itemClass="px-[10px]"
                containerClass={styles.swiper_multi}
                autoPlay={true}
                autoPlaySpeed={2000}
                arrows={false}
                infinite={true}
                pauseOnHover={false}
              >
                {data.concat(data).map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className={styles.swiper_slide}
                  >
                    <div className={styles.ms_div}>
                      {/* FOOD IMAGE */}
                      <img
                        className={styles.ms_Div_img}
                        style={{
                          height: "200px",
                          width: "200px",
                          objectFit: "contain",
                          display: "block",
                          margin: "0 auto",
                        }}
                        src={item.src}
                        alt={item.title}
                        onError={(event) => {
                          event.currentTarget.style.display =
                            "none";
                        }}
                      />

                      {/* FOOD NAME */}
                      <label className={styles.ms_Div_label}>
                        {item.title}
                      </label>

                      {/* KCAL */}
                      <span className={styles.ms_Div_span}>
                        Kcal-
                        <span
                          style={{
                            color: "#80B53B",
                          }}
                        >
                          {item.kcal}
                        </span>
                      </span>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuScroll;