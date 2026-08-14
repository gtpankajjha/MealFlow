import React from "react";
import styles from "../styles/Background.module.css";
import BannerForm from "./BannerForm";

const Backgroundimage = () => {
  // Working image source from the same S3 bucket
  const bannerImage =
    "https://toneop.s3.ap-south-1.amazonaws.com/toneop_eats/foodv2/Web_PANEER_TIKKA_makhani_result.webp";

  return (
    <div>
      <BannerForm />

      <section className={styles.banner_section}>
        <div className={styles.container}>

          {/* ================================
              BANNER TITLE
          ================================= */}
          <h1 className={styles.bannerhead}>
            Health &amp; Taste At{" "}
            <span className={styles.bannerhead_span}>
              Your Doorstep
            </span>
          </h1>

          {/* ================================
              BANNER CONTENT
          ================================= */}
          <div className={styles.image_flex}>

            {/* ================================
                BANNER IMAGE
            ================================= */}
            <div className={styles.bannerImageContainer}>
              <img
                className={styles.bannerimg}
                src={bannerImage}
                alt="Healthy meal"
              />
            </div>

            {/* ================================
                BANNER BENEFITS
            ================================= */}
            <div className={styles.bannerContent}>
              <ul
                className={styles.bannerBullet}
                style={{ listStyleType: "none" }}
              >
                <li>
                  <p>Every dish is prepared in olive oil</p>
                </li>

                <li>
                  <p>No added sugar, color or preservatives</p>
                </li>

                <li>
                  <p>Designed as per calorie requirements</p>
                </li>

                <li>
                  <p>
                    Nutrition and portions planned by expert dieticians
                  </p>
                </li>

                <li>
                  <p>High protein and low carb food</p>
                </li>

                <li>
                  <p>Made with fresh and best quality ingredients</p>
                </li>

                <li>
                  <p>Flexibility of plans</p>
                </li>

                <li>
                  <p>On-time doorstep delivery</p>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Backgroundimage;