import React from "react";
import styles from "../styles/Bannerstatic.module.css";

const Bannerstatic = () => {
  return (
    <div className={styles.banner_container}>
      <div className="col-lg-12">
        <img
          src="https://toneopeats.com/public/img/Coming_Soonf.jpg"
          // style={{
          //   width: "70%",
          //   alignItems: "center",
          //   marginLeft: "15%",
          //   boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
          //   marginTop: "5%",
          // }}
          className={styles.fixedbanner}
        />
      </div>
    </div>
  );
};

export default Bannerstatic;
