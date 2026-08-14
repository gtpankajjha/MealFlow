import React from "react";
import styles from "../styles/Preference.module.css";

const PreferenceComponent = ({
  title,
  prefrenceOptions,
  prefrenceItem,
  prefrenceHandler,
}) => {
  return (
    <div className={styles.preferenceGroup}>

      <div className={styles.preferenceTitle}>
        {title}
        <span className={styles.requiredStar}>*</span>
      </div>

      <div className={styles.preferenceOptions}>
        {prefrenceOptions.map((item) => {
          const isSelected = Boolean(prefrenceItem?.[item]);

          return (
            <button
              type="button"
              key={item}
              className={`${styles.preferenceOption} ${
                isSelected
                  ? styles.preferenceOptionActive
                  : ""
              }`}
              onClick={() => prefrenceHandler(item)}
            >
              {item === "NonVeg" ? "Non-Veg" : item}
            </button>
          );
        })}
      </div>

    </div>
  );
};

export default PreferenceComponent;