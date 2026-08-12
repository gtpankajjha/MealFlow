import React, { useState } from "react";
import styles from "../styles/MenuScreen.module.css";
import Foodprefer from "./Foodprefer";

const mealDietInitialData = {
  Veg: true,
  NonVeg: false,
};

const IMAGE_URL =
  "https://toneop.s3.ap-south-1.amazonaws.com/";

const MenuItemDetails = ({ item, mealItem }) => {
  const [mealDietSelectedItem, setMealDietSelectedItem] = useState(
    mealDietInitialData
  );

  const [selectedFood, setSelectedFood] = useState(null);

  const filteredItems =
    mealItem?.filter((food) => {
      if (
        mealDietSelectedItem.Veg &&
        food.diet_preference === "Veg"
      ) {
        return true;
      }

      if (
        mealDietSelectedItem.NonVeg &&
        food.diet_preference === "Non-Veg"
      ) {
        return true;
      }

      if (
        !mealDietSelectedItem.Veg &&
        !mealDietSelectedItem.NonVeg
      ) {
        return true;
      }

      return false;
    }) || [];

  const prefrenceHandler = (preference) => {
    if (preference === "Veg") {
      setMealDietSelectedItem({
        Veg: true,
        NonVeg: false,
      });
    } else if (preference === "NonVeg") {
      setMealDietSelectedItem({
        Veg: false,
        NonVeg: true,
      });
    } else {
      setMealDietSelectedItem({
        Veg: false,
        NonVeg: false,
      });
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
      <div className={styles.foodcontainer}>
        <div className={styles.menuinnerBox}>

          {/* VEG / NON VEG */}
          <div className={styles.avntype}>
            <Foodprefer
              prefrenceOptions={["Veg", "NonVeg"]}
              prefrenceItem={mealDietSelectedItem}
              prefrenceHandler={prefrenceHandler}
            />
          </div>

          {/* FOOD GRID */}
          <ul className={styles.menuUl}>
            {filteredItems.length === 0 ? (
              <div className={styles.noItems}>
                No Item in Non-Veg
              </div>
            ) : (
              filteredItems.map((food) => (
                <li
                  className={styles.menuDatali}
                  key={food.id}
                >
                  {/* FOOD IMAGE */}
                  <div className={styles.cardImageWrapper}>
                    {/* <div className={styles.dietIcon}>
                      <img
                        src={
                          food.diet_preference === "Veg"
                            ? "https://toneopeats.com/public/img/veg.svg"
                            : "https://toneopeats.com/public/img/nonveg.svg"
                        }
                        alt={food.diet_preference}
                      />
                    </div> */}

                    <img
                      src={`${IMAGE_URL}${food.image}`}
                      alt={food.name}
                      className={styles.cardFoodImage}
                    />
                  </div>

                  {/* FOOD CONTENT */}
                  <div className={styles.menuData}>

                    <h3 className={styles.menuLabel_title}>
                      {food.name}
                    </h3>

                    <p className={styles.menuDesp}>
                      {food.description}
                    </p>

                    {/* READ MORE */}
                    <button
                      className={styles.readMoreButton}
                      onClick={() => openNutritionModal(food)}
                    >
                      Read More
                      <span>→</span>
                    </button>

                    <button
                      className={styles.nutritionalButton}
                      onClick={() => openNutritionModal(food)}
                    >
                      Nutritional info
                      <span>→</span>
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      {/* ============================
          NUTRITION MODAL
      ============================ */}

      {selectedFood && (
        <div
          className={styles.modalOverlay}
          onClick={closeNutritionModal}
        >
          <div
            className={styles.nutritionModal}
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE */}
            <button
              className={styles.modalClose}
              onClick={closeNutritionModal}
            >
              ×
            </button>

            <h2 className={styles.modalTitle}>
              Nutritional Info
            </h2>

            {/* FOOD IMAGE */}
            <img
              src={`${IMAGE_URL}${selectedFood.image}`}
              alt={selectedFood.name}
              className={styles.modalFoodImage}
            />

            {/* FOOD NAME */}
            <h3 className={styles.modalFoodName}>
              {selectedFood.name}
            </h3>

            {/* DESCRIPTION */}
            <p className={styles.modalDescription}>
              {selectedFood.description}
            </p>

            {/* SERVINGS */}
            <div className={styles.servingsGrid}>
              {selectedFood.food_serving?.map((serving, index) => (
                <div
                  className={styles.servingCard}
                  key={index}
                >
                  <h4>
                    {serving.name}
                  </h4>

                  <div className={styles.macroGrid}>

                    <div className={styles.macroItem}>
                      <div className={styles.macroIcon}>
                        🥩
                      </div>

                      <span>Protein</span>

                      <strong>
                        {serving.protein}g
                      </strong>
                    </div>

                    <div className={styles.macroItem}>
                      <div className={styles.macroIcon}>
                        💧
                      </div>

                      <span>Fat</span>

                      <strong>
                        {serving.fat}g
                      </strong>
                    </div>

                    <div className={styles.macroItem}>
                      <div className={styles.macroIcon}>
                        🌱
                      </div>

                      <span>Fiber</span>

                      <strong>
                        {serving.fibre}g
                      </strong>
                    </div>

                    <div className={styles.macroItem}>
                      <div className={styles.macroIcon}>
                        🌾
                      </div>

                      <span>Carbs</span>

                      <strong>
                        {serving.carbs}g
                      </strong>
                    </div>

                  </div>

                  <div className={styles.calorieText}>
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