import React, { useState } from "react";
import Foodprefer from "./Foodprefer";

const mealDietInitialData = {
  Veg: true,
  NonVeg: false,
};

const IMAGE_URL = "https://toneop.s3.ap-south-1.amazonaws.com/";

const MenuItemDetails = ({ item, mealItem }) => {
  const [mealDietSelectedItem, setMealDietSelectedItem] = useState(mealDietInitialData);
  const [selectedFood, setSelectedFood] = useState(null);

  const filteredItems =
    mealItem?.filter((food) => {
      if (mealDietSelectedItem.Veg && food.diet_preference === "Veg") return true;
      if (mealDietSelectedItem.NonVeg && food.diet_preference === "Non-Veg") return true;
      if (!mealDietSelectedItem.Veg && !mealDietSelectedItem.NonVeg) return true;
      return false;
    }) || [];

  const prefrenceHandler = (preference) => {
    if (preference === "Veg") {
      setMealDietSelectedItem({ Veg: true, NonVeg: false });
    } else if (preference === "NonVeg") {
      setMealDietSelectedItem({ Veg: false, NonVeg: true });
    } else {
      setMealDietSelectedItem({ Veg: false, NonVeg: false });
    }
  };

  const openNutritionModal = (food) => {
    setSelectedFood(food);
  };

  const closeNutritionModal = () => {
    setSelectedFood(null);
  };

  return (
    <>
      <div className="w-full m-0 p-0 box-border bg-mealflow-white dark:bg-mealflow-dark">
        <div className="w-full m-0 p-0 border-0 box-border">
          {/* VEG / NON VEG */}
          <div className="w-full min-h-[55px] flex items-center justify-center mb-[22px] p-0 border-0 box-border max-[767px]:mb-[18px]">
            <Foodprefer prefrenceOptions={["Veg", "NonVeg"]} prefrenceItem={mealDietSelectedItem} prefrenceHandler={prefrenceHandler} />
          </div>

          {/* FOOD GRID */}
          <ul className="w-[94%] min-[768px]:w-[90%] min-[1001px]:w-[83%] mx-auto grid grid-cols-1 min-[768px]:grid-cols-2 min-[1001px]:grid-cols-3 gap-[18px] min-[768px]:gap-6 m-0 p-0 list-none box-border">
            {filteredItems.length === 0 ? (
              <div className="col-span-full w-full p-[50px_20px] text-center text-mealflow-muted dark:text-mealflow-mutedDark text-[18px] box-border">
                No Item in Non-Veg
              </div>
            ) : (
              filteredItems.map((food) => (
                <li key={food.id} className="w-full m-0 p-3 min-[768px]:p-6 border border-mealflow-border dark:border-mealflow-borderDark rounded-[18px] bg-mealflow-white dark:bg-mealflow-darkCard box-border block overflow-hidden transition-all duration-200 hover:border-[#80B53B] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:-translate-y-0.5">
                  {/* FOOD IMAGE */}
                  <div className="w-full h-[190px] min-[421px]:h-[220px] min-[768px]:h-[210px] relative overflow-hidden rounded-[15px] bg-[#F5F5F5] dark:bg-mealflow-navy mb-[18px]">
                    <img src={`${IMAGE_URL}${food.image}`} alt={food.name} className="w-full h-full block object-cover" />
                  </div>

                  {/* FOOD CONTENT */}
                  <div className="w-full box-border">
                    <h3 className="w-full m-0 mb-2 text-[#555] dark:text-mealflow-white text-[19px] min-[768px]:text-[21px] leading-[1.35] font-semibold line-clamp-1 overflow-hidden text-ellipsis">
                      {food.name}
                    </h3>

                    <p className="m-0 text-[#8F8F8F] dark:text-mealflow-mutedDark text-[14px] min-[768px]:text-[15px] leading-[1.65] line-clamp-4 overflow-hidden">
                      {food.description}
                    </p>

                    {/* ACTIONS */}
                    <div className="flex flex-col min-[768px]:flex-row items-start min-[768px]:items-center justify-between gap-2 min-[768px]:gap-[10px] mt-[10px]">
                      <button className="border-0 bg-transparent p-0 m-0 text-[#0085FF] font-inherit text-[14px] cursor-pointer hover:underline" onClick={() => openNutritionModal(food)}>
                        Read More <span className="ml-[7px] text-[18px] align-middle">→</span>
                      </button>

                      <button className="border-0 bg-transparent p-0 m-0 text-mealflow-text dark:text-mealflow-white font-inherit text-[14px] font-semibold cursor-pointer hover:text-[#80B53B]" onClick={() => openNutritionModal(food)}>
                        Nutritional info <span className="ml-[7px] text-[#80B53B] text-[18px] align-middle">→</span>
                      </button>
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      {/* NUTRITION MODAL */}
      {selectedFood && (
        <div className="fixed inset-0 z-[9999] w-full h-full p-5 bg-black/55 flex items-center justify-center box-border overflow-y-auto" onClick={closeNutritionModal}>
          <div className="relative w-full max-w-[100%] min-[768px]:max-w-[95vw] min-[1001px]:w-[900px] max-h-[92vh] min-[768px]:max-h-[90vh] p-[25px_18px] min-[768px]:p-[28px_55px_35px] bg-mealflow-white dark:bg-mealflow-darkCard rounded-[20px] shadow-[0_15px_50px_rgba(0,0,0,0.25)] box-border overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* CLOSE */}
            <button className="absolute top-4 right-[18px] w-8 h-8 p-0 border-0 rounded-full bg-[#EEEEEE] dark:bg-mealflow-borderDark text-[#777] dark:text-mealflow-mutedDark text-[24px] leading-8 text-center cursor-pointer hover:bg-[#E2E8F0] dark:hover:bg-mealflow-navy" onClick={closeNutritionModal}>
              ×
            </button>

            <h2 className="m-[5px_0_25px] text-mealflow-text dark:text-mealflow-white text-center text-[23px] min-[768px]:text-[26px] leading-[1.3] font-semibold">
              Nutritional Info
            </h2>

            {/* FOOD IMAGE */}
            <img src={`${IMAGE_URL}${selectedFood.image}`} alt={selectedFood.name} className="block w-full min-[768px]:w-[75%] min-[1001px]:w-[62%] h-[200px] min-[768px]:h-[210px] mx-auto mb-5 object-cover rounded-[15px] bg-[#F5F5F5] dark:bg-mealflow-navy" />

            {/* FOOD NAME */}
            <h3 className="m-[10px_0_15px] text-mealflow-text dark:text-mealflow-white text-center text-[20px] min-[768px]:text-[25px] leading-[1.4] font-semibold">
              {selectedFood.name}
            </h3>

            {/* DESCRIPTION */}
            <p className="max-w-[850px] m-[0_auto_22px] text-mealflow-muted dark:text-mealflow-mutedDark text-[14px] min-[768px]:text-[16px] leading-[1.6] whitespace-pre-line">
              {selectedFood.description}
            </p>

            {/* SERVINGS */}
            <div className="grid grid-cols-1 min-[768px]:grid-cols-2 gap-5">
              {selectedFood.food_serving?.map((serving, index) => (
                <div key={index} className="min-w-0 p-[18px] border border-mealflow-border dark:border-mealflow-borderDark rounded-[13px] bg-[#F8FBF5] dark:bg-mealflow-navy box-border">
                  <h4 className="m-[0_0_16px] text-mealflow-text dark:text-mealflow-white text-[15px] leading-[1.4] font-semibold">
                    {serving.name}
                  </h4>

                  <div className="grid grid-cols-4 gap-[5px] min-[421px]:gap-[10px]">
                    <div className="min-w-0 text-center">
                      <div className="w-10 h-10 mx-auto mb-[7px] flex items-center justify-center rounded-full bg-[#EDF5E5] dark:bg-mealflow-borderDark text-[17px]">🥩</div>
                      <span className="block mb-[3px] text-[#444] dark:text-mealflow-mutedDark text-[11px] min-[421px]:text-[12px]">Protein</span>
                      <strong className="block text-[#80B53B] text-[13px] min-[421px]:text-[14px]">{serving.protein}g</strong>
                    </div>

                    <div className="min-w-0 text-center">
                      <div className="w-10 h-10 mx-auto mb-[7px] flex items-center justify-center rounded-full bg-[#EDF5E5] dark:bg-mealflow-borderDark text-[17px]">💧</div>
                      <span className="block mb-[3px] text-[#444] dark:text-mealflow-mutedDark text-[11px] min-[421px]:text-[12px]">Fat</span>
                      <strong className="block text-[#80B53B] text-[13px] min-[421px]:text-[14px]">{serving.fat}g</strong>
                    </div>

                    <div className="min-w-0 text-center">
                      <div className="w-10 h-10 mx-auto mb-[7px] flex items-center justify-center rounded-full bg-[#EDF5E5] dark:bg-mealflow-borderDark text-[17px]">🌱</div>
                      <span className="block mb-[3px] text-[#444] dark:text-mealflow-mutedDark text-[11px] min-[421px]:text-[12px]">Fiber</span>
                      <strong className="block text-[#80B53B] text-[13px] min-[421px]:text-[14px]">{serving.fibre}g</strong>
                    </div>

                    <div className="min-w-0 text-center">
                      <div className="w-10 h-10 mx-auto mb-[7px] flex items-center justify-center rounded-full bg-[#EDF5E5] dark:bg-mealflow-borderDark text-[17px]">🌾</div>
                      <span className="block mb-[3px] text-[#444] dark:text-mealflow-mutedDark text-[11px] min-[421px]:text-[12px]">Carbs</span>
                      <strong className="block text-[#80B53B] text-[13px] min-[421px]:text-[14px]">{serving.carbs}g</strong>
                    </div>
                  </div>

                  <div className="mt-3 text-[#80B53B] text-right text-[13px] font-semibold">
                    {serving.kcal} kcal
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuItemDetails;