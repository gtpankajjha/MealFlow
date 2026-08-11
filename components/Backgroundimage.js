import React from "react";
import styles from "../styles/Background.module.css";
import Bannerstatic from "./Bannerstatic";
import BannerForm from "./BannerForm";

const Backgroundimage = () => {
  return (
    <div>
      <BannerForm />
      {/* <Bannerstatic /> */}
      <section className={styles.banner_section}>
        <div className={styles.container}>
          <h1
            className={styles.bannerhead}
            // style={{
            //   fontWeight: "700",
            //   fontSize: "60px",
            //   marginBottom: "45px",
            //   color: "black",
            // }}
          >
            Health & Taste At{" "}
            <span className={styles.bannerhead_span}>Your Doorstep</span>
          </h1>
          <div
            // style={{
            //   display: "flex",
            //   justifyContent: "space-between",
            //   flexDirection: "row-reverse",
            //   marginLeft: "9%",
            // }}
            className={styles.image_flex}
          >
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col- pull-right resPadZero">
              <img
                className={styles.bannerimg}
                src="https://toneopeats.com/public/img/bannerimg.webp"
              />
            </div>

            <div className="ol-lg-6 col-md-6 col-sm-12 col- resPadZero">
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
                  <p>Nutrition and portions planned by expert dieticians</p>
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
