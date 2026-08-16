import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.row}>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className={styles.footerCol}>
              <label className={styles.footerCol_label}>Our Address</label>
              <p className={styles.copyPara_p}>
                2nd Floor, Select Citywalk, Saket, New Delhi, Delhi 110017
              </p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <div className={styles.footerCol}>
              <label className={styles.footerCol_label}>Opening Hours</label>
              <p className={styles.copyPara_p}>
                Mon - Sun 10:00 AM - 10:00 PM
              </p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <div className={styles.footerCol}>
              <label className={styles.footerCol_label}>Contact Us</label>
              <p className={styles.copyPara_p}>Email: hello@mealflow.com</p>
              <p className={styles.copyPara_p}>Phone: +91 98765 *****</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.menuSocial}>
        <a href="#" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} className={styles.socialicon} />
        </a>

        <a href="#" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebookF} className={styles.socialicon} />
        </a>

        <a href="#" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} className={styles.socialicon} />
        </a>

        <a href="#" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedinIn} className={styles.socialicon} />
        </a>

        <a href="#" aria-label="YouTube">
          <FontAwesomeIcon icon={faYoutube} className={styles.socialicon} />
        </a>
      </div>

      <div>
        <p className={styles.copyPara}>
          © 2026 MealFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;