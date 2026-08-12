import React from "react";
import styles from "../styles/Preference.module.css";

const Foodprefer = ({
  prefrenceOptions,
  prefrenceItem,
  prefrenceHandler,
}) => {
  return (
    <div className={styles.preferenceContainer}>
      {prefrenceOptions.map((item) => {
        const isSelected = prefrenceItem[item];

        const buttonText =
          item === "Veg" ? "Veg" : "Non-Veg";

        return (
          <button
            type="button"
            key={item}
            className={`${styles.preferenceButton} ${
              isSelected
                ? styles.preferenceButtonActive
                : ""
            }`}
            onClick={() =>
              prefrenceHandler(item)
            }
          >
            {buttonText}
          </button>
        );
      })}
    </div>
  );
};

export default Foodprefer;