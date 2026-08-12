
import React, { useState, useEffect } from "react";
import styles from "../styles/MenuScreen.module.css";
import Foodprefer from "./Foodprefer";
import saladDetails from "./DummyMeals";
import useApi from "../components/useApi";

const mealDietInitialData = {
  Veg: true,
  NonVeg: false,
};
const MenuItemDetails = ({ item, mealItem }) => {
  const {
    data: value,
    loading,
    error,
  } = useApi("https://dev.dashboard.toneop.net/toneopeats/toneopeats_get_menu");

  const [salad, setSalad] = useState(null);
  const [mealDietSelectedItem, setMealDietSelectedItem] =
    useState(mealDietInitialData);

 

  const filteredItems = mealItem?.filter((salad) => {
    if (
      (mealDietSelectedItem.Veg && salad.diet_preference === "Veg") ||
      (mealDietSelectedItem.NonVeg && salad.diet_preference === "Non-Veg")
    ) {
      return true; // Include items with matching category and diet preference
    } else if (!mealDietSelectedItem.Veg && !mealDietSelectedItem.NonVeg) {
      return true; // Include all items with matching category when no preference is selected
    }
    return false;
  });

  //   console.log("value of cards", value[0]);

  const prefrenceHandler = (item) => {
    if (item === "Veg") {
      setMealDietSelectedItem((prevState) => ({
        ...prevState,
        Veg: !prevState.Veg,
        NonVeg: false,
      }));
    } else if (item === "NonVeg") {
      setMealDietSelectedItem((prevState) => ({
        ...prevState,
        Veg: false,
        NonVeg: !prevState.NonVeg,
      }));
    } else {
      setMealDietSelectedItem({
        Veg: false,
        NonVeg: false,
      });
    }
    // console.log("Updated mealDietSelectedItem:", mealDietSelectedItem);
  };

  return (
    <div className={styles.foodcontainer}>
      <div className={styles.menuinnerBox}>
        <div className={styles.avntype}>
          <Foodprefer
            prefrenceOptions={["Veg", "NonVeg"]}
            prefrenceItem={mealDietSelectedItem}
            prefrenceHandler={prefrenceHandler}
          />
        </div>
        <ul className={styles.menuUl}>
          {filteredItems?.length === 0 ? (
            <h1 style={{ color: "#000", textAlign: "center" }}>
              No Item in Non-Veg
            </h1>
          ) : (
            filteredItems?.map((salad, index) => {
              const Image_URL = "https://toneop.s3.ap-south-1.amazonaws.com/";
              return (
                <li className={styles.menuDatali} key={index}>
                  <div className={styles.menuImg}>
                    {salad.diet_preference === "Veg" ? (
                      <img
                        src="https://toneopeats.com/public/img/veg.svg"
                        className={styles.proimgTag}
                      />
                    ) : (
                      <img
                        src="https://toneopeats.com/public/img/nonveg.svg"
                        className={styles.proimgTag}
                      />
                    )}
                    {/* <img className={styles.proimgTag} src={salad.menuImgSrc} /> */}
                   <div className={styles.imageContainer}>
  <img
    src={`${Image_URL}${salad.image}`}
    alt={salad.name}
  />
</div>
                  </div>
                  <div className={styles.menuData}>
                    <label className={styles.menuLabel_title}>
                      {salad.name}
                    </label>
                    <p className={styles.menuDesp}>{salad.description}</p>
                    {salad.food_serving?.map((macro, index) => (
                      <div className={styles.divmacros_outer} key={index}>
                        <label className={styles.menu_macroinf}>
                          {macro.name}
                        </label>
                        <ul className={styles.menuMacro}>
                          <li>
                            <span>{macro.protein}</span>
                            <label>Protein</label>
                          </li>
                          <li>
                            <span>{macro.fat}</span>
                            <label>Fat</label>
                          </li>
                          <li>
                            <span>{macro.fibre}</span>
                            <label>Fiber</label>
                          </li>
                          <li>
                            <span>{macro.carbs}</span>
                            <label>Carbs</label>
                          </li>
                          <li>=</li>
                          <li>
                            <span>{macro.kcal}</span>
                            <label>Calorie</label>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
};

export default MenuItemDetails;
