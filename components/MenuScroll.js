import React, { useEffect } from "react";

import styles from "../styles/MenuScroll.module.css";

import "swiper/swiper-bundle.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// register Swiper custom elements
// register();

// SwiperCore.use([Autoplay, Pagination]);
const data = [
  {
    title: " Paneer  Veg Teriyaki Meal Bowl",
    src: "https://toneopeats.com/public/food_images/Paneer_Veg_Teriyaki_Meal.png",
    kcal: "431",
  },
  {
    title: "  Paneer Kadhai Meal Bowl",
    src: "https://toneopeats.com/public/food_images/Paneer_Kadhai_M.png",
    kcal: "465",
  },
  {
    title: " Veg Makhanwala Meal Bowl",
    src: "https://toneopeats.com/public/food_images/Veg_Makkhanwala_Meal.png",
    kcal: "407",
  },
  {
    title: " Asian Stir-Fried Veg Meal Bowl",
    src: "https://toneopeats.com/public/food_images/Asian_Stir_Fried_Veg_Meal-removebg-preview.png",
    kcal: "419",
  },
  {
    title: " Veg Paprika Meal Bowl",
    src: "https://toneopeats.com/public/food_images/Veg_Paprika_Meal.png",
    kcal: "316",
  },
  {
    title: "Chicken Veg Teriyaki Meal Bowl",
    src: "https://toneopeats.com/public/food_images/Chicken___Veg_Teriyaki_Meal.png",
    kcal: "427",
  },
  {
    title: "Chicken Kadhai Meal Bowl",
    src: "https://toneopeats.com/public/food_images/Chicken_Kadhai_Meal.png",
    kcal: "442",
  },
  {
    title: "Chicken Veg Paprika Meal Bowl",
    src: "https://toneopeats.com/public/food_images/Chicken_Mushroom_pepper_Meal.png",
    kcal: "440",
  },
  {
    title: "Chicken Mushroom Pepper Meal Bowl",
    src: "https://toneopeats.com/public/food_images/Paneer_Veg_Teriyaki_Meal.png",
    kcal: "420",
  },
  {
    title: "Asian Stir-Fried Chicken  Veg Meal Bowl",
    src: "https://toneopeats.com/public/food_images/Asian_Stir_Fried_Chicken_Veg_Meal.png",
    kcal: "485",
  },
  {
    title: "Twisted Greek Salad Bowl",
    src: "https://toneopeats.com/public/food_images/Twisted_Greek_Salad_Bowl_1-removebg-preview.webp",
    kcal: "276",
  },
  {
    title: "Caesar Salad Bowl",
    src: "https://toneopeats.com/public/food_images/Caesar_Salad_Bowl-removebg-preview.webp",
    kcal: "323",
  },
  {
    title: "Glow Fit Salad Bowl",
    src: "https://toneopeats.com/public/food_images/Glow_Fit_Salad_Bowl-removebg-preview.webp",
    kcal: "329",
  },
  {
    title: "Hummus Salad Bowl",
    src: "https://toneopeats.com/public/food_images/Falafel___Hummus_Salad_Bowl_1-removebg-preview.webp",
    kcal: "347",
  },
  {
    title: "Chicken Protein Power Bowl",
    src: "https://toneopeats.com/public/food_images/Chicken_Protein_Power_Bowl_1-removebg-preview.webp",
    kcal: "228",
  },
  {
    title: "Caesar Salad With Cajun Chicken",
    src: "https://toneopeats.com/public/food_images/Caesar_Salad_Bowl_With_Cajun_Chicken_1-removebg-preview.webp",
    kcal: "256",
  },
  {
    title: "Chicken Quinoa Salad Bowl",
    src: "https://toneopeats.com/public/food_images/Quinoa___Sweet_Potato_Salad_Bowl1-removebg-preview.webp",
    kcal: "315",
  },
  {
    title: "Greek Chicken Salad Bowl",
    src: "https://toneopeats.com/public/food_images/Greek_Chicken_Salad_Bowl_1-removebg-preview.webp",
    kcal: "334",
  },
  {
    title: "Grilled Paneer Makhani",
    src: "https://toneopeats.com/public/food_images/Grilled_Paneer__tofu_Makhani_with_brown_rice-removebg-preview.webp",
    kcal: "468",
  },
  {
    title: " Grilled Tofu Makhani",
    src: "https://toneopeats.com/public/food_images/Grilled_Paneer__tofu_Makhani_with_brown_rice-removebg-preview.webp",
    kcal: "427",
  },
  {
    title: "Grilled Teriyaki Paneer",
    src: "https://toneopeats.com/public/food_images/Grilled_Teriyaki_Paneer__tofu_with_brown_rice-removebg-preview.webp",
    kcal: "431",
  },
  {
    title: " Grilled Teriyaki Tofu",
    src: "https://toneopeats.com/public/food_images/Grilled_Teriyaki_Paneer__tofu_with_brown_rice-removebg-preview.webp",
    kcal: "380",
  },
  {
    title: " Grilled Malai Paneer",
    src: "https://toneopeats.com/public/food_images/Grilled_Malai_Paneer_tofu_with_Brown_Rice-removebg-preview.webp",
    kcal: "468",
  },
  {
    title: "Grilled Malai Tofu",
    src: "https://toneopeats.com/public/food_images/Grilled_Malai_Paneer_tofu_with_Brown_Rice-removebg-preview.webp",
    kcal: "404",
  },
  {
    title: " Grilled Malai Paneer",
    src: "https://toneopeats.com/public/food_images/Grilled_Peri_Peri_Paneer__tofu_with_brown_rice-removebg-preview.webp",
    kcal: "468",
  },
  {
    title: "Grilled Peri Peri Paneer",
    src: "https://toneopeats.com/public/food_images/Grilled_Malai_Paneer_tofu_with_Brown_Rice-removebg-preview.webp",
    kcal: "469",
  },

  {
    title: " Grilled Peri Peri Tofu",
    src: "https://toneopeats.com/public/food_images/Grilled_Peri_Peri_Paneer__tofu_with_brown_rice-removebg-preview.webp",
    kcal: "399",
  },
  {
    title: "Grilled Paneer with Mint Sauce",
    src: "https://toneopeats.com/public/food_images/Grilled_Paneer___tofu_with_Mint_Sauce_Brown_rice-removebg-preview.webp",
    kcal: "430",
  },
  {
    title: "Grilled Tofu with Mint Sauce",
    src: "https://toneopeats.com/public/food_images/Grilled_Paneer___tofu_with_Mint_Sauce_Brown_rice-removebg-preview.webp",
    kcal: "330",
  },
  {
    title: "Grilled Chicken Makhani",
    src: "https://toneopeats.com/public/food_images/Grilled_Chicken_Makhani_with_brown_rice-removebg-preview.webp",

    kcal: "457",
  },
  {
    title: "Grilled Malai Chicken",
    src: "https://toneopeats.com/public/food_images/Grilled_Malai_Chicken_with_Brown_Rice-removebg-preview.webp",
    kcal: "461",
  },
  {
    src: "https://toneopeats.com/public/food_images/Grilled_Paneer___tofu_with_Mint_Sauce_Brown_rice-removebg-preview.webp",
    title: "Grilled Paneer with Mint Sauce",
    kcal: "430",
  },
  {
    title: "Grilled Tofu with Mint Sauce",
    src: "https://toneopeats.com/public/food_images/Grilled_Paneer___tofu_with_Mint_Sauce_Brown_rice-removebg-preview.webp",
    kcal: "330",
  },
  {
    src: "https://toneopeats.com/public/food_images/Grilled_Chicken_Makhani_with_brown_rice-removebg-preview.webp",
    title: "Grilled Chicken Makhani",
    kcal: "457",
  },
  {
    src: "https://toneopeats.com/public/food_images/Grilled_Malai_Chicken_with_Brown_Rice-removebg-preview.webp",
    title: "Grilled Malai Chicken",
    kcal: "461",
  },
  {
    src: "https://toneopeats.com/public/food_images/Grilled_Teriyaki_Chicken_Brown_Rice-removebg-preview.webp",
    title: "Grilled Teriyaki Chicken",
    kcal: "443",
  },
  {
    src: "https://toneopeats.com/public/food_images/Grilled_Cajun_Chicken_brown_rice-removebg-preview.webp",
    title: "Grilled Cajun Chicken",
    kcal: "454",
  },
  {
    src: "https://toneopeats.com/public/food_images/Grilled_Chicken_with_Mint_Sauce_Brown_Rice-removebg-preview.webp",
    title: "Grilled Chicken with Mint Sauce",
    kcal: "386",
  },
  {
    src: "https://toneopeats.com/public/food_images/Grilled_Peri_Peri_Chicken_Brown_Rice-removebg-preview.webp",
    title: "Grilled Peri Peri Chicken",
    kcal: "455",
  },
  {
    src: "https://toneopeats.com/public/food_images/Grilled_Masala_Fish_with_brown_rice-removebg-preview.webp",
    title: "Grilled Masala Fish",
    kcal: "349",
  },
  {
    src: "https://toneopeats.com/public/food_images/Grilled_Peri_Peri_Chicken_Brown_Rice-removebg-preview.webp",
    title: "Grilled Peri Peri Fish",
    kcal: "363",
  },
  {
    src: "https://toneopeats.com/public/food_images/Grilled_Fish_with_Mint_Sauce_and_Brown_Rice-removebg-preview.webp",
    title: "Grilled Fish with Mint Sauce",
    kcal: "309",
  },
  {
    src: "https://toneopeats.com/public/food_images/Grilled_Paneer___tofu_with_Mint_Sauce_Brown_rice-removebg-preview.webp",
    title: "Grilled Paneer with Mint Sauce",
    kcal: "430",
  },
  {
    src: "https://toneopeats.com/public/food_images/Grilled_Paneer___tofu_with_Mint_Sauce_Brown_rice-removebg-preview.webp",
    title: "Grilled Tofu with Mint Sauce",
    kcal: "330",
  },
  {
    src: "https://toneopeats.com/public/food_images/Grilled_Chicken_Makhani_with_brown_rice-removebg-preview.webp",
    title: "Grilled Chicken Makhani",
    kcal: "457",
  },
  {
    src: "https://toneopeats.com/public/food_images/Grilled_Malai_Chicken_with_Brown_Rice-removebg-preview.webp",
    title: "Grilled Malai Chicken",
    kcal: "461",
  },
  {
    src: "https://toneopeats.com/public/food_images/Grilled_Teriyaki_Chicken_Brown_Rice-removebg-preview.webp",
    title: "Grilled Teriyaki Chicken",
    kcal: "443",
  },
  {
    src: "https://toneopeats.com/public/food_images/Grilled_Cajun_Chicken_brown_rice-removebg-preview.webp",
    title: "Grilled Cajun Chicken",
    kcal: "454",
  },
  {
    src: "https://toneopeats.com/public/food_images/Grilled_Chicken_with_Mint_Sauce_Brown_Rice-removebg-preview.webp",
    title: "Grilled Chicken with Mint Sauce",
    kcal: "386",
  },
  {
    src: "https://toneopeats.com/public/food_images/Grilled_Peri_Peri_Chicken_Brown_Rice-removebg-preview.webp",
    title: "Grilled Peri Peri Chicken",
    kcal: "455",
  },
  {
    src: "https://toneopeats.com/public/food_images/Grilled_Masala_Fish_with_brown_rice-removebg-preview.webp",
    title: "Grilled Masala Fish",
    kcal: "349",
  },
  {
    src: "https://toneopeats.com/public/food_images/Grilled_Peri_Peri_Chicken_Brown_Rice-removebg-preview.webp",
    title: "Grilled Peri Peri Fish",
    kcal: "363",
  },
  {
    src: "https://toneopeats.com/public/food_images/Grilled_Fish_with_Mint_Sauce_and_Brown_Rice-removebg-preview.webp",
    title: "Grilled Fish with Mint Sauce",
    kcal: "309",
  },
  {
    src: "https://toneopeats.com/public/food_images/Grilled_Teriyaki_Fish_with_Brown_rice-removebg-preview.webp",
    title: "Grilled Teriyaki Fish",
    kcal: "353",
  },
  {
    src: "https://toneopeats.com/public/food_images/Berry_Berry_Blast_Smoothie_Bowl_2-removebg-preview.webp",
    title: "Berry Berry Blast Smoothie Bowl",
    kcal: "495",
  },
  {
    src: "https://toneopeats.com/public/food_images/Power_House_Smoothie_Bowl-removebg-preview.webp",
    title: "Power House Smoothie Bowl",
    kcal: "491",
  },
  {
    src: "https://toneopeats.com/public/food_images/Mango_Black_Magic_Smoothie_Bowl-removebg-preview.webp",
    title: "Mango Black Magic Smoothie Bowl",
    kcal: "462",
  },
  {
    src: "https://toneopeats.com/public/food_images/Beat_The_Beet_Smoothie_Bowl.webp",
    title: "Beat The Beet Smoothie Bowl",
    kcal: "470",
  },
  {
    src: "https://toneopeats.com/public/food_images/Mango_Thunder_Smoothie_Bowl-removebg-preview.webp",
    title: "Mango Thunder Smoothie Bowl",
    kcal: 400,
  },
  {
    src: "https://toneopeats.com/public/food_images/Blooming_Red_Juice-removebg-preview.webp",
    title: "ABC Juice",
    kcal: 303,
  },
  {
    src: "https://toneopeats.com/public/food_images/Immune_Booster_Juice-removebg-preview.webp",
    title: "Immune Booster Juice",
    kcal: 220,
  },
  {
    src: "https://toneopeats.com/public/food_images/Pink_Chia_Juice-removebg-preview.webp",
    title: "Pink Chia Juice",
    kcal: 187,
  },
  {
    src: "https://toneopeats.com/public/food_images/Blooming_Red_Juice-removebg-preview.webp",
    title: "Blooming Red Juice",
    kcal: 293,
  },
  {
    src: "https://toneopeats.com/public/food_images/Green_Love_Juice-removebg-preview.webp",
    title: "Green Love Juice",
    kcal: 136,
  },
  {
    src: "https://toneopeats.com/public/food_images/Immune_Booster_Juice-removebg-preview.webp",
    title: "Forever Young Juice",
    kcal: 315,
  },
];

const MenuScroll = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [data.length]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 3,
    },
    tab: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section
        className={styles.sm_section}
        style={{ backgroundColor: " #F8FBF5" }}
      >
        <div>
          <div className={styles.sm_Head}>
            <h2 className={styles.sm_Head_h2}>
              Our <span style={{ color: "#80B53B" }}>Menu</span>
            </h2>
          </div>
          <div className={styles.swiper_container}>
            <div
              style={{
                display: "flex",
                overflow: "auto",
                // zIndex: "1",
                // position: "relative",
                scrollbarWidth: "none",
              }}
            >
              <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                // containerClass="-mx-[10px]"
                itemClass="px-[10px]"
                containerClass={styles.swiper_multi}
                autoPlay={true}
                autoPlaySpeed={2000}
                arrows={false}
                selectedIndex={currentIndex}
              >
                {data.concat(data).map((item, index) => {
                  return (
                    <div key={index} className={styles.swiper_slide}>
                      <div className={styles.ms_div}>
                        <img
                          className={styles.ms_Div_img}
                          style={{
                            height: "200px",
                            width: "200px",
                            objectFit: "contain",
                            resizeMode: "contain",
                          }}
                          src={item.src}
                        />
                        <label className={styles.ms_Div_label}>
                          {item.title}
                        </label>
                        <span className={styles.ms_Div_span}>
                          Kcal-
                          <span style={{ color: "#80B53B" }}>
                            {item.kcal}
                          </span>{" "}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuScroll;
