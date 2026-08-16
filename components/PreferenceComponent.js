import React from "react";

const PreferenceComponent = ({
  title,
  prefrenceOptions,
  prefrenceItem,
  prefrenceHandler,
}) => {
  return (
    <div className="flex flex-col min-[768px]:flex-row items-center justify-center gap-2 min-[768px]:gap-[15px]">
      <div className="text-mealflow-text dark:text-mealflow-white text-[14px] min-[768px]:text-[15px] leading-[1.4] font-semibold whitespace-nowrap">
        {title}
        <span className="text-red-600 ml-[3px]">*</span>
      </div>

      <div className="flex items-center m-0 p-0">
        {prefrenceOptions.map((item, index) => {
          const isSelected = Boolean(prefrenceItem?.[item]);

          return (
            <button
              type="button"
              key={item}
              onClick={() => prefrenceHandler(item)}
              className={`min-w-[100px] h-[38px] px-[18px] py-[7px] border font-medium text-[13px] min-[768px]:text-[14px] cursor-pointer outline-none box-border transition-colors duration-200 focus:outline-none focus-visible:outline-none focus:ring-0 ${isSelected ? "bg-[#80B53B] border-[#80B53B] text-white" : "bg-mealflow-white dark:bg-mealflow-darkCard border-mealflow-border dark:border-mealflow-borderDark text-mealflow-text dark:text-mealflow-white hover:bg-[#F8FBF5] dark:hover:bg-mealflow-navy hover:border-[#80B53B]" } ${index === 0 ? "rounded-l-[5px]" : ""} ${index === prefrenceOptions.length - 1 ? "rounded-r-[5px]" : ""}`}
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