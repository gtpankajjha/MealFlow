import React from "react";
import styles from "../styles/Days_subcription.module.css";

const Input = ({ inputItem, handleChange, userData }) => {
  const { label, type, placeholder, name, maxlength } = inputItem;
  return (
    <div>
      <div
        className="text-black text-base font-urbanist font-bold mb-2"
        style={{ color: "#000" }}
      >
        {label}
        <span className="text-red-700" style={{ color: "red" }}>
          &nbsp; *
        </span>
      </div>
      <div>
        <input
          type={type}
          placeholder={placeholder}
          //   className="w-full p-3 border focus:border-gray-300 rounded-lg"
          className={styles.input_design}
          name={name}
          value={userData[name]}
          onChange={handleChange}
          maxlength={maxlength}
        />
      </div>
    </div>
  );
};

export default Input;
