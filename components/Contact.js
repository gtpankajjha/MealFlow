import React from "react";
import styles from "../styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${70000000000}`);
  };

  const handleDialerClick = () => {
    window.open(`tel:${70000000000}`);
  };

  return (
    <div className={styles.contact_container}>
      <div className={styles.contact_chip}>
        <button
          className={styles.contact_dialer}
          onClick={handleDialerClick}
          style={{ outline: "none" }}
        >
          <FontAwesomeIcon icon={faPhone} />
        </button>
        <button
          style={{
            border: "none",
            backgroundColor: "#fff",
            height: "35px",
            width: "35px",
            borderRadius: "30px",
            marginLeft: "5px",
            marginTop: "6px",
            outline: "none",
          }}
          onClick={handleWhatsAppClick}
        >
            <FontAwesomeIcon icon={faWhatsapp} />
        </button>
      </div>
    </div>
  );
};

export default Contact;
