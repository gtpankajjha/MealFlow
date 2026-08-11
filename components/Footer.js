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
    <div>
      {" "}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <a className={styles.footerLogo}>
            <img
              src="https://toneopeats.com/public/img/logo.png"
              className={styles.footerLogo_img}
            />
          </a>
          <div className={styles.row}>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-">
              <div className={styles.footerCol}>
                <label className={styles.footerCol_label}>Our Address</label>
                <p className={styles.copyPara_p}>
                  {` EM-Kitchen-5/East Building, Rani Kamlapati
                   Railway Station, Habib Ganj, Bhopal, Madhya
                                Pradesh 462023`}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-">
              <div className={styles.footerCol}>
                <label className={styles.footerCol_label}>Opening Hours</label>
                <p className={styles.copyPara_p}>
                  Mon - Sun 10:00 AM - 11:30 PM
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-">
              <div className={styles.footerCol}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label className={styles.footerCol_label}>Contact Us</label>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <a className={styles.copyPara_p}>
                      Email : info@toneopeats.com
                    </a>
                    <a className={styles.copyPara_p}>Phone: 7400989898</a>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#e1e1e1",
            height: "1px",
            width: "100%",
            marginTop: "2%",
          }}
        ></div>
        <div style={{ flexDirection: "column" }}>
          <div className={styles.menuSocial}>
            <a
              href="https://www.instagram.com/toneopofficial"
              target="_blank"
              // className={styles.menuSocial_a}
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className={styles.socialicon}
              />
            </a>

            <a href="https://www.facebook.com/toneopfitness" target="_blank">
              <FontAwesomeIcon
                icon={faFacebookF}
                className={styles.socialicon}
              />
            </a>

            <a href="https://twitter.com/OfficialToneop" target="_blank">
              <FontAwesomeIcon icon={faTwitter} className={styles.socialicon} />
            </a>

            <a
              href="https://www.linkedin.com/company/toneopfitness"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className={styles.socialicon}
              />
            </a>

            <a
              href="https://www.youtube.com/channel/UCkGuRDxNbUIVZgxpv41YOlg"
              target="_blank"
            >
              <FontAwesomeIcon icon={faYoutube} className={styles.socialicon} />
            </a>
          </div>
          <div>
            <p className={styles.copyPara}>
              © Copyright All rights reserved by TONEOPEATS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
