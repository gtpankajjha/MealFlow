import React from "react";

const Foodprefer = ({
  prefrenceOptions,
  prefrenceItem,
  prefrenceHandler,
}) => {
  return (
    <div className="flex items-center justify-center m-0 p-0">
      {prefrenceOptions.map((item, index) => {
        const isSelected = Boolean(prefrenceItem?.[item]);

        const buttonText = item === "Veg" ? "Veg" : "Non-Veg";

        return (
          <button
            type="button"
            key={item}
            onClick={() => prefrenceHandler(item)}
            className={`min-w-[90px] h-[36px] px-4 py-2 border font-medium text-[13px] min-[768px]:text-[14px] cursor-pointer outline-none transition-all duration-200 focus:outline-none focus:ring-0 ${
              isSelected
                ? "bg-[#80B53B] border-[#80B53B] text-white"
                : "bg-mealflow-white dark:bg-mealflow-darkCard border-mealflow-border dark:border-mealflow-borderDark text-mealflow-text dark:text-mealflow-white hover:border-[#80B53B] hover:bg-[#F8FBF5] dark:hover:bg-mealflow-navy"
            } ${index === 0 ? "rounded-l-[5px]" : ""} ${
              index === prefrenceOptions.length - 1 ? "rounded-r-[5px]" : ""
            }`}
          >
            {buttonText}
          </button>
        );
      })}
    </div>
  );
};

export default Foodprefer;