import React, { useState, useReducer, useEffect } from "react";
import styles from "../styles/Preference.module.css";
import MealContainer from "./MealContainer";
import packageStyle from "../styles/MealContainer.module.css";
import PreferenceComponent from "../components/PreferenceComponent";
import timeSelectionStyles from "../styles/TimeSelection.module.css";
import Subscription from "./Subcription";
import useApi from "../components/useApi";

const packageSelectedInitialData = {
  isLunchPackage: true,
  isDinnerPackage: false,
};
const localUserPackageData = {
  lunchPackage: [],
  dinnerPackage: [],
  selectedPlan: {},
  selectedPlanData: [],
  selectedPlanIds: [],
};

const Preference = () => {
  const mealDietInitialData = {
    Lunch: true,
    Dinner: false,
    Veg: true,
    NonVeg: false,
  };
  const closeModal = () => setIsModalVisible(false);
  const [modalData, setModalData] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState([]);
  const [filterdItems, setFilteredItems] = useState([]);
  const [lunchApi, setLunchApi] = useState([]);
  const [dinnerApi, setDinnerApi] = useState([]);
  const [mealDietSelectedItem, setMealDietSelectedItem] =
    useState(mealDietInitialData);
  const [isPackageSelected, setIsPackageSelected] = useState(
    packageSelectedInitialData
  );
  const [userPackageData, setUserPackageData] = useState({
    lunchPackage: [],
    dinnerPackage: [],
    selectedPlan: {},
    selectedPlanData: [],
    selectedPlanIds: [],
  });
  const [num, setNum] = useState(0);
  const {
    data: value,
    loading,
    error,
  } = useApi(
    "https://dev.dashboard.toneop.net/toneopeats/get_toneopeats_subscription"
  );

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const localAddPackageItem = (mealItem) => {
    if (isPackageSelected.isLunchPackage) {
      localUserPackageData.lunchPackage.push(mealItem);
      console.log("add in lunch", localUserPackageData.lunchPackage);
    } else {
      localUserPackageData.dinnerPackage.push(mealItem);
      console.log("add in dinner", localUserPackageData.dinnerPackage);
    }
    setUserPackageData(localUserPackageData);
  };
  const localDeletePackageItem = (mealIndex) => {
    if (isPackageSelected.isLunchPackage) {
      localUserPackageData.lunchPackage.splice(mealIndex, 1);
      console.log("remove from lunch", localUserPackageData.lunchPackage);
    } else {
      localUserPackageData.dinnerPackage.splice(mealIndex, 1);
      console.log("remove from dinner", localUserPackageData.dinnerPackage);
    }
    setUserPackageData(localUserPackageData);
  };

  const localSelectedPlanItem = (payload) => {
    localUserPackageData.selectedPlan = payload.selectedPlan;
    localUserPackageData.selectedPlanData = payload.selectedPlanData;
    setUserPackageData(localUserPackageData);
  };

  const prefrencehandler = (item) => {
    if (item === "Lunch") {
      if (mealDietSelectedItem.Dinner) {
        setMealDietSelectedItem({
          ...mealDietSelectedItem,
          Lunch: !mealDietSelectedItem.Lunch,
        });
        setIsPackageSelected({ isLunchPackage: false, isDinnerPackage: true });
      }
    } else if (item === "Dinner") {
      if (mealDietSelectedItem.Lunch) {
        setMealDietSelectedItem({
          ...mealDietSelectedItem,
          Dinner: !mealDietSelectedItem.Dinner,
        });
        setIsPackageSelected({ isLunchPackage: true, isDinnerPackage: false });
      }
    } else if (item === "Veg") {
      if (mealDietSelectedItem.NonVeg) {
        setMealDietSelectedItem({
          ...mealDietSelectedItem,
          Veg: !mealDietSelectedItem.Veg,
        });
      }
    } else if (mealDietSelectedItem.Veg) {
      setMealDietSelectedItem({
        ...mealDietSelectedItem,
        NonVeg: !mealDietSelectedItem.NonVeg,
      });
    }
  };

  const packageHandler = (item) => {
    if (mealDietSelectedItem.Dinner && mealDietSelectedItem.Lunch) {
      if (item === "Lunch") {
        setMealDietSelectedItem({
          ...mealDietSelectedItem,
          Lunch: mealDietSelectedItem.Lunch,
        });
        setIsPackageSelected({ isLunchPackage: true, isDinnerPackage: false });
      } else {
        setMealDietSelectedItem({
          ...mealDietSelectedItem,
          Dinner: mealDietSelectedItem.Dinner,
        });
        setIsPackageSelected({ isLunchPackage: false, isDinnerPackage: true });
      }
    }
  };

  const selectedPlanHandler = (item, subscriptionPlanData) => {
    localSelectedPlanItem({
      selectedPlan: item,
      selectedPlanData: subscriptionPlanData,
    });

    // console.log("subcription out put", subscriptionPlanData);

    setSelectedPlan(item);
  };

  const modalHandler = (mealItem) => {
    setModalData(mealItem);
    setIsModalVisible(!isModalVisible);
  };

  const onCheckedPress = (mealItem) => {
    if (isPackageSelected.isLunchPackage) {
      const isMealAlreadyExist = userPackageData.lunchPackage.findIndex(
        (ele) => ele.mealItem.id === mealItem.id
      );
      if (isMealAlreadyExist >= 0) {
        localDeletePackageItem(isMealAlreadyExist);
      } else {
        localAddPackageItem({ mealItem, isPackageSelected });
      }
    } else {
      const isMealAlreadyExist = userPackageData.dinnerPackage.findIndex(
        (ele) => ele.mealItem.id === mealItem.id
      );
      if (isMealAlreadyExist >= 0) {
        localDeletePackageItem(isMealAlreadyExist);
      } else {
        localAddPackageItem({ mealItem, isPackageSelected });
      }
    }

    let tempSelectedPlanData = [];

    if (localUserPackageData.lunchPackage.length) {
      localUserPackageData.lunchPackage.forEach((item) => {
        item.mealItem.subscription_type.forEach((plan, idxValue) => {
          if (!tempSelectedPlanData[idxValue]) {
            tempSelectedPlanData[idxValue] = { ...plan };
          } else {
            const tempdata =
              tempSelectedPlanData[idxValue].final_price + plan.final_price;
            tempSelectedPlanData[idxValue] = {
              ...tempSelectedPlanData[idxValue],
              final_price: tempdata,
            };
          }
        });
      });
    }

    if (localUserPackageData.dinnerPackage.length) {
      localUserPackageData.dinnerPackage.forEach((item) => {
        item.mealItem.subscription_type.forEach((plan, idxValue) => {
          if (!tempSelectedPlanData[idxValue]) {
            tempSelectedPlanData[idxValue] = { ...plan };
          } else {
            const tempdata =
              tempSelectedPlanData[idxValue].final_price + plan.final_price;
            tempSelectedPlanData[idxValue] = {
              ...tempSelectedPlanData[idxValue],
              final_price: tempdata,
            };
          }
        });
      });
    }

    if (tempSelectedPlanData.length) {
      localSelectedPlanItem({
        selectedPlan: tempSelectedPlanData[1],
        selectedPlanData: tempSelectedPlanData,
      });
      console.log("value of selected plan", tempSelectedPlanData[1]);
      setSelectedPlan(tempSelectedPlanData[1]);
    } else {
      localSelectedPlanItem({
        selectedPlan: mealItem?.subscription_type[1],
        selectedPlanData: mealItem?.subscription_type,
      });
      console.log("value of else", mealItem?.subscription_type[1]);
      setSelectedPlan(mealItem?.subscription_type[1]);
    }

    setNum(randomNumberInRange(1, 5));
  };

  const mealData = mealDietSelectedItem ? lunchApi : dinnerApi;

  // console.log("is lunch mealData", mealData);

  useEffect(() => {
    if (value) {
      if (mealDietSelectedItem.Veg) {
        if (mealDietSelectedItem.NonVeg) {
          setFilteredItems(value?.subscription);
          // setLunchApi(value?.subscription);
          // setDinnerApi(value?.subscription);
        } else {
          const tempFilterdItems = value?.subscription?.filter(
            (items) => items.diet_preference === "Veg"
          );
          setFilteredItems(tempFilterdItems);
          // console.log("tempfiltered output", tempFilterdItems);
          // setLunchApi(tempFilterdItems);
          // setDinnerApi(tempFilterdItems);
          // console.log("tempFiltered Value", tempFilterdItems);
        }
      } else {
        const tempFilterdItems = value?.subscription?.filter(
          (items) => items.diet_preference === "Non-Veg"
        );
        setFilteredItems(tempFilterdItems);

        // setLunchApi(tempFilterdItems);
        // setDinnerApi(tempFilterdItems);
      }
    }
    console.log("value output", filterdItems);
  }, [value, mealDietSelectedItem]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <section className={styles.subscriptionSec}>
        <input
          type="hidden"
          name="_token"
          value="6KSxbipFegpFpuI6Lmmtt4a2H0XRiP9G8z5Bf2af"
        />
        <div>
          <div className={styles.qtnUl}>
            <div
              className={styles.qtnbg}
              style={{
                backgroundImage:
                  "url(https://toneopeats.com/public/img/subscriptionbg.webp)",
              }}
            >
              <h2 className={styles.qtnbg_h2}>
                Subscription<span style={{ color: "#95d93c" }}>Plans</span>
              </h2>
            </div>

            <div>
              <label className={styles.qtnLabel}>Select your preference</label>
              <ul className={styles.qtninnerul}>
                <PreferenceComponent
                  title="Diet Plan"
                  prefrenceOptions={["Veg", "NonVeg"]}
                  prefrenceItem={mealDietSelectedItem}
                  prefrenceHandler={prefrencehandler}
                />
                <PreferenceComponent
                  title="Select Meal Time"
                  prefrenceOptions={["Lunch", "Dinner"]}
                  prefrenceItem={mealDietSelectedItem}
                  prefrenceHandler={prefrencehandler}
                />
                {/****Cut Previous Logics From Here****/}
              </ul>
            </div>
          </div>
        </div>
        <div className={timeSelectionStyles.container}>
          {mealDietSelectedItem.Lunch && (
            <button
              onClick={() => packageHandler("Lunch")}
              className={timeSelectionStyles.package}
              style={{
                borderBottom: isPackageSelected.isLunchPackage
                  ? "3px solid rgb(128	181	59 )"
                  : "3px solid rgb(143, 143, 143)",
                outline: "none",
              }}
            >
              <h3
                style={{
                  color: isPackageSelected.isLunchPackage
                    ? "#000"
                    : "rgb(143, 143, 143)",
                  marginTop: "3%",
                }}
              >
                Lunch Package
              </h3>
            </button>
          )}

          {mealDietSelectedItem.Dinner && (
            <button
              className={timeSelectionStyles.package}
              style={{
                borderBottom: isPackageSelected.isDinnerPackage
                  ? "3px solid rgb(128	181	59 )"
                  : "3px solid rgb(143, 143, 143)",
                outline: "none",
              }}
              onClick={() => packageHandler("Dinner")}
            >
              <h3
                style={{
                  color: isPackageSelected.isDinnerPackage
                    ? "#000"
                    : "rgb(143, 143, 143)",
                  marginTop: "3%",
                }}
              >
                Dinner Package
              </h3>
            </button>
          )}
        </div>
        <div className={packageStyle.button_container}>
          {/* <div className={packageStyle.individual_button}>
            <span>Indivdual</span>
          </div> */}
        </div>

        <MealContainer
          // isMealExistInUserPackageData={isMealExistInUserPackageData}
          // mealItem={item}
          isPackageSelected={isPackageSelected}
          onCheckedPress={onCheckedPress}
          mealDietSelectedItem={mealDietSelectedItem}
          userPackageData={userPackageData}
          filterdItems={filterdItems}
          mealData={mealData}
          loading={loading}
          error={error}
          // TODO
          // 2. filtered items
          // 2. filtered items, add in => lunch package
          // 2. filtered items, add in => dinner package
          // 1. move api call to Preference.
          // 3. if user select veg then , filter lunch+dinner
          // 4. if user select lunch lunch Package
          // 5. if user select dinner dinner package
          //
        />

        {userPackageData &&
        (userPackageData.dinnerPackage.length ||
          userPackageData.lunchPackage.length) ? (
          <div>
            {selectedPlan && (
              <Subscription
                subscriptionPlanData={userPackageData.selectedPlanData}
                selectedPlan={selectedPlan}
                selectedPlanHandler={selectedPlanHandler}
                userPackageData={userPackageData}
              />
            )}
          </div>
        ) : null}

        {/* <Subscription /> */}
      </section>
    </div>
  );
};

export default Preference;
