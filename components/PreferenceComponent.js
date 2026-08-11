import React from "react";
import styles from "../styles/Preference.module.css";

const PrefrenceComponent = ({
  title,
  prefrenceOptions,
  prefrenceItem,
  prefrenceHandler,
}) => (
  <div className={styles.qtninnerul_li}>
    <div className={styles.qtnTitle}>
      {title}
      <span style={{ color: "#ed1111", marginLeft: "3px" }}>*</span>
    </div>
    <div className={styles.option_container}>
      {prefrenceOptions.map((item, index) => (
        <button
          key={index}
          //   className={`${styles.cat_label_input_span} ${
          //     prefrenceItem[item] ? styles.selected : ""
          //   }`}
          className={styles.cat_label_input_span}
          style={{
            color: prefrenceItem[item] ? "#fff" : "black",
            backgroundColor: prefrenceItem[item] ? " #80B53B" : "white",
            outline: "none",
          }}
          onClick={() => prefrenceHandler(item)}
        >
          <span
            // className={`${styles.item_container_text} ${
            //   prefrenceItem[item] ? styles.selected_text : ""
            // }`}
            style={{
              color: prefrenceItem[item] ? "#fff" : "black",
              border: "none",
            }}
          >
            {item}
          </span>
        </button>
      ))}
    </div>
  </div>
);

export default PrefrenceComponent;
