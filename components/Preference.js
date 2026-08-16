import React, { useEffect, useState } from "react";
import styles from "../styles/Preference.module.css";
import MealContainer from "./MealContainer";
import packageStyle from "../styles/MealContainer.module.css";
import PreferenceComponent from "../components/PreferenceComponent";
import timeSelectionStyles from "../styles/TimeSelection.module.css";
import Subciption from "./Subcription";
import API_URL from "./useApi";


const Preference = () => {

  const [mealDietSelectedItem, setMealDietSelectedItem] = useState({
    Lunch: true,
    Dinner: false,
    Veg: true,
    NonVeg: false,
  });

  const [isPackageSelected, setIsPackageSelected] = useState({
    isLunchPackage: true,
    isDinnerPackage: false,
  });

  const [userPackageData, setUserPackageData] = useState({
    lunchPackage: [],
    dinnerPackage: [],
    selectedPlan: {},
    selectedPlanData: [],
    selectedPlanIds: [],
  });

  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filterdItems, setFilteredItems] = useState([]);

  const [selectedPlan, setSelectedPlan] = useState(null);

const [userDetails, setUserDetails] = useState({
  name: "",
  phone: "",
  email: "",
  address: "",
});

const [paymentLoading, setPaymentLoading] = useState(false);

  useEffect(() => {
    const fetchPreferenceData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${API_URL}/api/preference`);
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const json = await response.json();
        setValue(json);
      } catch (err) {
        console.error("Preference API error:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPreferenceData();
  }, []);

  const allMeals =
    value?.data?.foods?.map((food) => ({
      ...food,

      // Preference API already gives category as a string
      categoryName: food.category || "",

      // Keep these for compatibility with the existing UI
      categoryId: food.categoryId || null,
      categoryImage: food.categoryImage || "",
    })) || [];

  useEffect(() => {
    if (!value?.data) {
      setFilteredItems([]);
      return;
    }
    let filteredMeals = allMeals;
    if (mealDietSelectedItem.Veg && !mealDietSelectedItem.NonVeg) {
      filteredMeals = allMeals.filter((item) => item.diet_preference === "Veg");
    } else if (!mealDietSelectedItem.Veg && mealDietSelectedItem.NonVeg) {
      filteredMeals = allMeals.filter((item) => item.diet_preference === "Non-Veg");
    }
    setFilteredItems(filteredMeals);
  }, [value, mealDietSelectedItem.Veg, mealDietSelectedItem.NonVeg]);

  const prefrencehandler = (item) => {
    if (item === "Veg") {
      setMealDietSelectedItem((prev) => ({
        ...prev,
        Veg: true,
        NonVeg: false,
      }));
      return;
    }

    if (item === "NonVeg") {
      setMealDietSelectedItem((prev) => ({
        ...prev,
        Veg: false,
        NonVeg: true,
      }));
      return;
    }

    if (item === "Lunch") {
      setMealDietSelectedItem((prev) => ({
        ...prev,
        Lunch: true,
        Dinner: false,
      }));

      setIsPackageSelected({
        isLunchPackage: true,
        isDinnerPackage: false,
      });
      return;
    }

    if (item === "Dinner") {
      setMealDietSelectedItem((prev) => ({
        ...prev,
        Lunch: false,
        Dinner: true,
      }));

      setIsPackageSelected({
        isLunchPackage: false,
        isDinnerPackage: true,
      });
    }
  };

  const packageHandler = (item) => {
    if (item === "Lunch") {
      setMealDietSelectedItem((prev) => ({
        ...prev,
        Lunch: true,
        Dinner: false,
      }));

      setIsPackageSelected({
        isLunchPackage: true,
        isDinnerPackage: false,
      });
    }

    if (item === "Dinner") {
      setMealDietSelectedItem((prev) => ({
        ...prev,
        Lunch: false,
        Dinner: true,
      }));

      setIsPackageSelected({
        isLunchPackage: false,
        isDinnerPackage: true,
      });
    }
  };

  const selectedPlanHandler = (plan) => {
  setSelectedPlan(plan);

  setUserPackageData((prev) => ({
    ...prev,
    selectedPlan: plan,
  }));
};

  const onCheckedPress = (mealItem) => {
    if (!mealItem) {
      return;
    }
    const packageKey = isPackageSelected.isLunchPackage ? "lunchPackage" : "dinnerPackage";
    setUserPackageData((prev) => {
      const currentPackage = prev[packageKey] || [];
      const existingIndex = currentPackage.findIndex((item) => item.mealItem?.id === mealItem.id);
      let updatedPackage;
      if (existingIndex >= 0) {
        // Remove meal
        updatedPackage = currentPackage.filter((_, index) => index !== existingIndex);
      } else {
        // Add meal
        updatedPackage = [
          ...currentPackage,
          {
            mealItem,
            isPackageSelected,
          },
        ];
      }

      return {
        ...prev,
        [packageKey]: updatedPackage,
      };
    });
  };

  const mealData = filterdItems;
const subscriptionPlanData = (value?.data?.subscriptionPlans || []).map((plan) => {
  const meals = [
    ...userPackageData.lunchPackage,
    ...userPackageData.dinnerPackage,
  ];

  const finalPrice = meals.reduce((total, item) => {
    const selected = item.mealItem?.subscription_type?.find(
      (sub) => Number(sub.days) === Number(plan.days)
    );

    return total + Number(selected?.final_price || 0);
  }, 0);

  return {
    ...plan,
    duration: plan.days,
    final_price: finalPrice,
    discount: plan.discountPercent || 0,
  };
});

const getMealPrice = (meal, days) => {
  const plan = meal?.subscription_type?.find(
    (item) => Number(item.days) === Number(days)
  );

  return Number(plan?.final_price || 0);
};
const selectedMeals = [
  ...userPackageData.lunchPackage.map((item) => item.mealItem),
  ...userPackageData.dinnerPackage.map((item) => item.mealItem),
];
const totalPrice = selectedPlan
  ? selectedMeals.reduce(
      (total, meal) => total + getMealPrice(meal, selectedPlan.days),
      0
    )
  : 0;

const updateUserDetail = (field, value) => {
  setUserDetails((prev) => ({
    ...prev,
    [field]: value,
  }));
};

  if (loading) {
    return (
      <div style={{ minHeight: "400px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px",  color: "#80b53b" }}>
        Loading meals...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{   minHeight: "400px",   display: "flex",   flexDirection: "column",   justifyContent: "center", alignItems: "center",   gap: "10px", color: "#d33" }} >
        <strong>Unable to load meals</strong>

        <span>{error.message || "Something went wrong"}</span>

        <button
          type="button"
          onClick={() => window.location.reload()}
          style={{ padding: "8px 18px", border: "1px solid #80b53b", borderRadius: "5px", background: "#80b53b", color: "#fff", cursor: "pointer" }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <section className={styles.subscriptionSec}>
        <div>
          {/* =================================================
              TOP SECTION
          ================================================= */}

          <div className={styles.subscriptionPlanSection}>
            {/* Subscription Plans Banner */}
            <div
              className={styles.subscriptionPlanBanner}
              style={{
                backgroundImage: "url(https://toneopeats.com/public/img/subscriptionbg.webp)",
              }}
            >
              <h2 className={styles.subscriptionPlanTitle}>
                Subscription
                <span>Plans</span>
              </h2>
            </div>

            {/* Preferences */}
            <div className={styles.subscriptionPreferences}>
              <h2 className={styles.preferenceHeading}>Select your preference</h2>

              <div className={styles.preferenceGroups}>
                {/* Diet Plan */}
                <PreferenceComponent title="Diet Plan" prefrenceOptions={["Veg", "NonVeg"]} prefrenceItem={mealDietSelectedItem} prefrenceHandler={prefrencehandler} />

                {/* Meal Time */}
                <PreferenceComponent title="Select Meal Time" prefrenceOptions={["Lunch", "Dinner"]} prefrenceItem={mealDietSelectedItem} prefrenceHandler={prefrencehandler} />
              </div>
            </div>
          </div>
        </div>

        <div className={timeSelectionStyles.container}>
          {mealDietSelectedItem.Lunch && (
            <button
              type="button"
              onClick={() => packageHandler("Lunch")}
              className={timeSelectionStyles.package}
              style={{
                borderBottom: isPackageSelected.isLunchPackage ? "3px solid #80b53b" : "3px solid #8f8f8f",

                outline: "none",
              }}
            >
              <h3
                style={{
                  color: isPackageSelected.isLunchPackage ? "#000" : "#8f8f8f",

                  marginTop: "3%",
                }}
              >
                Lunch Package
              </h3>
            </button>
          )}

          {mealDietSelectedItem.Dinner && (
            <button
              type="button"
              onClick={() => packageHandler("Dinner")}
              className={timeSelectionStyles.package}
              style={{ borderBottom: isPackageSelected.isDinnerPackage ? "3px solid #80b53b" : "3px solid #8f8f8f",outline: "none", }}
            >
              <h3 style={{ color: isPackageSelected.isDinnerPackage ? "#000" : "#8f8f8f", marginTop: "3%", }}>
                Dinner Package
              </h3>
            </button>
          )}
        </div>

        <div className={packageStyle.button_container} />
        <MealContainer
          isPackageSelected={isPackageSelected}
          onCheckedPress={onCheckedPress}
          mealDietSelectedItem={mealDietSelectedItem}
          userPackageData={userPackageData}
          filterdItems={filterdItems}
          mealData={mealData}
          loading={loading}
          error={error}
        />
        {userPackageData.lunchPackage.length > 0 &&
       userPackageData.dinnerPackage.length > 0 && (
    <Subciption
      subscriptionPlanData={subscriptionPlanData}
      selectedPlan={selectedPlan}
      selectedPlanHandler={selectedPlanHandler}
      userPackageData={userPackageData}
    />
  )}
      </section>
    </div>
  );
};

export default Preference;
