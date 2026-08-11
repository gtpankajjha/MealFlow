import React from "react";
import styles from "../styles/AboutUs.module.css";
import Bannerstatic from "./Bannerstatic";

const AboutUs = () => {
  return (
    <div>
      <section className={styles.banner_section}>
        <div className={styles.container}>
          <h1 className={styles.header_text}>About Us</h1>
          <div
            // style={{
            //   display: "flex",
            //   justifyContent: "space-between",
            //   flexDirection: "row-reverse",
            //   marginLeft: "9%",
            // }}
            className={styles.top_image_con}
          >
            <div
              className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col- pull-right resPadZero"
              style={{ marginLeft: "-40px" }}
            >
              <img
                className={styles.bannerimg_top}
                src="	https://toneopeats.com/public/img/aboutImg.png"
                // style={{ backgroundColor: "red" }}
              />
            </div>

            <div
              //   className="ol-lg-6 col-md-6 col-sm-12 col- resPadZero"
              className={styles.top_summary}
            >
              <p
                style={{ color: "#000", fontSize: "24px", fontWeight: "bold" }}
              >
                Health & fitness aligns with what you eat.
              </p>
              <p style={{ color: "#000" }}>
                {`ToneOpEats is an online food delivery service that provides
                healthy and delicious food while maintaining nutrition and
                portion control according to your health goal. It intends to
                assist you in coping with your eating habits and starting a
                healthier lifestyle.`}
              </p>
              <p style={{ color: "#000" }}>
                We ensure that we provide the best food possible and make it
                easy for you to order. ToneOpEats simplifies healthy eating by
                delivering food to your doorstep. It is the solution to all your
                diet-related problems.
              </p>
              <h5
                style={{
                  color: "#80b53b",
                  fontWeight: "700",
                  fontSize: "37px",
                }}
              >
                Why ToneOpEats ?
              </h5>
              <p style={{ color: "#000" }}>
                We ensure that we provide the best food possible and make it
                easy for you to order. ToneOpEats simplifies healthy eating by
                delivering food to your doorstep. It is the solution to all your
                diet-related problems.
              </p>
              <p style={{ color: "#000" }}>
                ToneOpEats offers a wide range of delicacies that make healthy
                eating easy. Here is why you will love ToneOpEats:
              </p>
              <h3 style={{ color: "#000" }}>You Choose, We Prepare</h3>
              <p style={{ color: "#000" }}>
                Keeping your food preference in mind, we provide healthier
                options which go well with your diet plans.
              </p>
              <h3 style={{ color: "#000" }}>You Deserve The Best</h3>
              <p style={{ color: "#000" }}>
                Our dishes are curated by professional chefs and are monitored
                by expert dietitians. They ensure to maintain the proper
                nutrients to reach your health goal.
              </p>
              <h3 style={{ color: "#000" }}>Your Health, Our Priority</h3>
              <p style={{ color: "#000" }}>
                We provide food options to complement your weight loss, weight
                gain and gym diet plans. We also cater according to your medical
                conditions and food allergies.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.banner_section}>
        <div className={styles.container}>
          <h1 className={styles.bannerhead}>How It Works ?</h1>
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
                  <p
                    style={{
                      backgroundImage:
                        "url('https://toneopeats.com/public/img/workicon/dinner.png')",
                    }}
                  >
                    Select the diet and time preference.
                  </p>
                </li>
                <li>
                  <p
                    style={{
                      backgroundImage:
                        "url('https://toneopeats.com/public/img/workicon/package-new.png')",
                    }}
                  >
                    Select the package type.
                  </p>
                </li>
                <li>
                  <p
                    style={{
                      backgroundImage:
                        "url('https://toneopeats.com/public/img/workicon/subscription-new.png')",
                    }}
                  >
                    Select your subscription plan.
                  </p>
                </li>
                <li>
                  <p
                    style={{
                      backgroundImage:
                        "url('https://toneopeats.com/public/img/workicon/resume.png')",
                    }}
                  >
                    Click on proceed and fill in your details.
                  </p>
                </li>
                <li>
                  <p
                    style={{
                      backgroundImage:
                        "url('https://toneopeats.com/public/img/workicon/operation.png')",
                    }}
                  >
                    Pay using the available payment options.
                  </p>
                </li>
                <li>
                  <p
                    style={{
                      backgroundImage:
                        "url('https://toneopeats.com/public/img/workicon/clock.png')",
                    }}
                  >
                    Your plan will be activated after 48 hours.
                  </p>
                </li>
                <p
                  style={{
                    color: "#000",
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                >
                  To order through À la carte/Swiggy/Zomato
                </p>
                <li>
                  <p
                    style={{
                      backgroundImage:
                        "url('https://toneopeats.com/public/img/workicon/dinner.png')",
                    }}
                  >
                    Select the meal you want to order.
                  </p>
                </li>
                <li>
                  <p
                    style={{
                      backgroundImage:
                        "url('https://toneopeats.com/public/img/workicon/cashless-payment.png')",
                    }}
                  >
                    Pay using the available options.
                  </p>
                </li>
                <li>
                  <p
                    style={{
                      backgroundImage:
                        "url('	https://toneopeats.com/public/img/workicon/delivery-man.png')",
                    }}
                  >
                    Your meal will be delivered as per the standard delivery
                    time.
                  </p>
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
