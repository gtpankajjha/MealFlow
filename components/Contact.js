import React from "react";
import styles from "../styles/Navbar.module.css";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${7710116627}`);
  };

  const handleDialerClick = () => {
    window.open(`tel:${7400989898}`);
  };

  return (
    <div className={styles.contact_container}>
      <div className={styles.contact_chip}>
        <button
          className={styles.contact_dialer}
          onClick={handleDialerClick}
          style={{ outline: "none" }}
        >
          <img
            style={{ height: "20px", width: "20px" }}
            src="https://toneopeats.com/public/img/call.svg"
          />
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
          <img
            style={{ height: "35px", width: "35px" }}
            src="https://toneopeats.com/public/img/whatsapp.png"
          />
        </button>
      </div>
    </div>
  );
};

export default Contact;
