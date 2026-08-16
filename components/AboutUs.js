import React from "react";
import styles from "../styles/AboutUs.module.css";

const AboutUs = () => {
  return (
    <div>
      <section className={styles.banner_section}>
        <div className={styles.container}>
          <h1 className={styles.header_text}>About Us</h1>

          <div className={styles.top_image_con}>
            <div
              className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-"
              style={{ marginLeft: "-40px" }}
            >
              <img
                className={styles.bannerimg_top}
                src="/images/about-mealflow.png"
                alt="MealFlow healthy meals"
              />
            </div>

            <div className={styles.top_summary}>
              <p
                style={{
                  color: "#000",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                Healthy food made simple.
              </p>

              <p style={{ color: "#000" }}>
                MealFlow is a meal subscription platform designed to make
                healthy and delicious food convenient for everyday life.
                Choose meals based on your preferences and receive them
                directly at your doorstep.
              </p>

              <p style={{ color: "#000" }}>
                We focus on balanced meals, quality ingredients, convenient
                ordering, and flexible subscription plans so you can spend
                less time worrying about what to eat.
              </p>

              <h5
                style={{
                  color: "#80b53b",
                  fontWeight: "700",
                  fontSize: "37px",
                }}
              >
                Why MealFlow?
              </h5>

              <p style={{ color: "#000" }}>
                MealFlow makes it easier to build a consistent eating routine
                without compromising on taste or convenience.
              </p>

              <h3 style={{ color: "#000" }}>You Choose, We Prepare</h3>

              <p style={{ color: "#000" }}>
                Select your preferred meals, food preferences, and subscription
                options. We prepare your meals according to your selection.
              </p>

              <h3 style={{ color: "#000" }}>Fresh & Balanced Meals</h3>

              <p style={{ color: "#000" }}>
                Our meals are planned with quality ingredients and balanced
                portions to support a healthier everyday lifestyle.
              </p>

              <h3 style={{ color: "#000" }}>Your Convenience, Our Priority</h3>

              <p style={{ color: "#000" }}>
                From selecting your meals to receiving them at your doorstep,
                MealFlow keeps the entire experience simple and convenient.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.banner_section}>
        <div className={styles.container}>
          <h1 className={styles.bannerhead}>How It Works?</h1>

          <div className={styles.image_flex}>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-">
              <img
                className={styles.bannerimg}
                src="/images/mealflow-how-it-works.webp"
                alt="How MealFlow works"
              />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-">
              <ul
                className={styles.bannerBullet}
                style={{ listStyleType: "none" }}
              >
                <li>
                  <p>Select your food and time preference.</p>
                </li>

                <li>
                  <p>Choose your preferred meal package.</p>
                </li>

                <li>
                  <p>Select a subscription plan that suits you.</p>
                </li>

                <li>
                  <p>Enter your delivery and contact details.</p>
                </li>

                <li>
                  <p>Complete your payment securely.</p>
                </li>

                <li>
                  <p>Receive your meals at your selected location.</p>
                </li>
              </ul>

              <p
                style={{
                  color: "#000",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                Ordering individual meals
              </p>

              <ul
                className={styles.bannerBullet}
                style={{ listStyleType: "none" }}
              >
                <li>
                  <p>Select the meal you want to order.</p>
                </li>

                <li>
                  <p>Choose your preferred payment option.</p>
                </li>

                <li>
                  <p>Complete your order and receive your meal at your
                    selected location.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;