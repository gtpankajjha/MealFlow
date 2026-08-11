import React from "react";
import styles from "../styles/Preference.module.css";

const Foodprefer = ({ prefrenceOptions, prefrenceItem, prefrenceHandler }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    {prefrenceOptions.map((item, index) => {
      let buttonText;
      if (item === "Veg") {
        buttonText = "Veg";
      } else {
        buttonText = "Non-Veg";
      }
      return (
        <div style={{ marginLeft: "10px" }} key={index}>
          {" "}
          <button
            key={index}
            className={styles.button_con}
            style={{
              color: prefrenceItem[item] ? "#fff" : "black",
              backgroundColor: prefrenceItem[item] ? "#80B53B" : "white",
              outline: "none",
            }}
            onClick={() => prefrenceHandler(item)}
          >
            <span
              style={{
                color: prefrenceItem[item] ? "#fff" : "black",
                border: "none",
              }}
            >
              {buttonText}
            </span>
          </button>
        </div>
      );
    })}
  </div>
);

export default Foodprefer;
