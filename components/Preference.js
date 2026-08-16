import React, { useEffect, useState } from "react";
import MealContainer from "./MealContainer";
import PreferenceComponent from "../components/PreferenceComponent";
import Subciption from "./Subcription";
import API_URL from "./useApi";

const Preference = () => {
  const [mealDietSelectedItem, setMealDietSelectedItem] = useState({ Lunch: true, Dinner: false, Veg: true, NonVeg: false });
  const [isPackageSelected, setIsPackageSelected] = useState({ isLunchPackage: true, isDinnerPackage: false });
  const [userPackageData, setUserPackageData] = useState({ lunchPackage: [], dinnerPackage: [], selectedPlan: {}, selectedPlanData: [], selectedPlanIds: [] });
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterdItems, setFilteredItems] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [userDetails, setUserDetails] = useState({ name: "", phone: "", email: "", address: "" });
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
      categoryName: food.category || "",
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
      setMealDietSelectedItem((prev) => ({ ...prev, Veg: true, NonVeg: false }));
      return;
    }

    if (item === "NonVeg") {
      setMealDietSelectedItem((prev) => ({ ...prev, Veg: false, NonVeg: true }));
      return;
    }

    if (item === "Lunch") {
      setMealDietSelectedItem((prev) => ({ ...prev, Lunch: true, Dinner: false }));
      setIsPackageSelected({ isLunchPackage: true, isDinnerPackage: false });
      return;
    }

    if (item === "Dinner") {
      setMealDietSelectedItem((prev) => ({ ...prev, Lunch: false, Dinner: true }));
      setIsPackageSelected({ isLunchPackage: false, isDinnerPackage: true });
    }
  };

  const packageHandler = (item) => {
    if (item === "Lunch") {
      setMealDietSelectedItem((prev) => ({ ...prev, Lunch: true, Dinner: false }));
      setIsPackageSelected({ isLunchPackage: true, isDinnerPackage: false });
    }

    if (item === "Dinner") {
      setMealDietSelectedItem((prev) => ({ ...prev, Lunch: false, Dinner: true }));
      setIsPackageSelected({ isLunchPackage: false, isDinnerPackage: true });
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
    if (!mealItem) return;

    const packageKey = isPackageSelected.isLunchPackage ? "lunchPackage" : "dinnerPackage";

    setUserPackageData((prev) => {
      const currentPackage = prev[packageKey] || [];
      const existingIndex = currentPackage.findIndex((item) => item.mealItem?.id === mealItem.id);

      let updatedPackage;

      if (existingIndex >= 0) {
        updatedPackage = currentPackage.filter((_, index) => index !== existingIndex);
      } else {
        updatedPackage = [...currentPackage, { mealItem, isPackageSelected }];
      }

      return { ...prev, [packageKey]: updatedPackage };
    });
  };

  const mealData = filterdItems;

  const subscriptionPlanData = (value?.data?.subscriptionPlans || []).map((plan) => {
    const meals = [...userPackageData.lunchPackage, ...userPackageData.dinnerPackage];

    const finalPrice = meals.reduce((total, item) => {
      const selected = item.mealItem?.subscription_type?.find((sub) => Number(sub.days) === Number(plan.days));
      return total + Number(selected?.final_price || 0);
    }, 0);

    return { ...plan, duration: plan.days, final_price: finalPrice, discount: plan.discountPercent || 0 };
  });

  const getMealPrice = (meal, days) => {
    const plan = meal?.subscription_type?.find((item) => Number(item.days) === Number(days));
    return Number(plan?.final_price || 0);
  };

  const selectedMeals = [
    ...userPackageData.lunchPackage.map((item) => item.mealItem),
    ...userPackageData.dinnerPackage.map((item) => item.mealItem),
  ];

  const totalPrice = selectedPlan ? selectedMeals.reduce((total, meal) => total + getMealPrice(meal, selectedPlan.days), 0) : 0;

  const updateUserDetail = (field, value) => {
    setUserDetails((prev) => ({ ...prev, [field]: value }));
  };

  if (loading) {
    return (
      <section className="flex min-h-[400px] items-center justify-center bg-mealflow-light px-4 dark:bg-mealflow-dark">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-mealflow-border border-t-mealflow-orange dark:border-mealflow-borderDark dark:border-t-mealflow-orange" />
          <p className="text-sm font-semibold text-mealflow-muted dark:text-mealflow-mutedDark">Loading meals...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex min-h-[400px] items-center justify-center bg-mealflow-light px-4 dark:bg-mealflow-dark">
        <div className="w-full max-w-md rounded-3xl border border-red-100 bg-mealflow-white p-8 text-center shadow-lg dark:border-red-900/30 dark:bg-mealflow-darkCard">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-2xl dark:bg-red-500/10">
            ⚠️
          </div>

          <h3 className="text-lg font-bold text-mealflow-text dark:text-mealflow-white">Unable to load meals</h3>

          <p className="mt-2 text-sm text-mealflow-muted dark:text-mealflow-mutedDark">
            {error.message || "Something went wrong"}
          </p>

          <button type="button" onClick={() => window.location.reload()} className="mt-6 rounded-xl bg-mealflow-orange px-6 py-3 text-sm font-bold text-white transition hover:brightness-95 active:scale-95">
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-mealflow-light px-4 py-10 sm:px-6 lg:px-8 lg:py-16 dark:bg-mealflow-dark">
      <div className="mx-auto max-w-7xl">
        {/* SUBSCRIPTION HEADER */}
        <div className="overflow-hidden rounded-[2rem] bg-mealflow-white shadow-sm ring-1 ring-mealflow-border dark:bg-mealflow-darkCard dark:ring-mealflow-borderDark">
          {/* Banner */}
          <div className="relative min-h-[180px] overflow-hidden sm:min-h-[220px]">
            <img src="https://toneopeats.com/public/img/subscriptionbg.webp" alt="Meal subscription" className="absolute inset-0 h-full w-full object-cover" />

            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent dark:from-mealflow-dark/95 dark:via-mealflow-dark/80 dark:to-transparent" />

            <div className="relative flex min-h-[180px] items-center px-6 sm:min-h-[220px] sm:px-10 lg:px-14">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-mealflow-orange">MealFlow</p>

                <h2 className="text-4xl font-extrabold tracking-tight text-mealflow-text sm:text-5xl dark:text-mealflow-white">
                  Subscription{" "}
                  <span className="bg-gradient-to-r from-mealflow-orange to-[#38B4A8] bg-clip-text text-transparent">
                    Plans
                  </span>
                </h2>

                <p className="mt-3 max-w-md text-sm text-mealflow-muted dark:text-mealflow-mutedDark">
                  Choose your meal preference and build a plan that works for you.
                </p>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="px-5 py-8 sm:px-8 lg:px-12">
            <div className="mb-7 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#38B4A8]">Customize your meals</p>

              <h3 className="mt-2 text-2xl font-bold text-mealflow-text sm:text-3xl dark:text-mealflow-white">
                Select your preference
              </h3>

              <p className="mt-2 text-sm text-mealflow-muted dark:text-mealflow-mutedDark">
                Pick your diet and preferred meal time.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Diet */}
              <div className="rounded-2xl border border-mealflow-border bg-mealflow-light p-5 dark:border-mealflow-borderDark dark:bg-mealflow-navy">
                <PreferenceComponent title="Diet Plan" prefrenceOptions={["Veg", "NonVeg"]} prefrenceItem={mealDietSelectedItem} prefrenceHandler={prefrencehandler} />
              </div>

              {/* Meal Time */}
              <div className="rounded-2xl border border-mealflow-border bg-mealflow-light p-5 dark:border-mealflow-borderDark dark:bg-mealflow-navy">
                <PreferenceComponent title="Select Meal Time" prefrenceOptions={["Lunch", "Dinner"]} prefrenceItem={mealDietSelectedItem} prefrenceHandler={prefrencehandler} />
              </div>
            </div>
          </div>
        </div>

        {/* PACKAGE SWITCHER */}
        <div className="mx-auto mt-8 max-w-xl">
          <div className="rounded-2xl border border-mealflow-border bg-mealflow-white p-2 shadow-sm dark:border-mealflow-borderDark dark:bg-mealflow-darkCard">
            <div className="grid grid-cols-2 gap-2">
              {mealDietSelectedItem.Lunch && (
                <button
                  type="button"
                  onClick={() => packageHandler("Lunch")}
                  className={`rounded-xl px-4 py-3 text-sm font-bold transition-all duration-200 ${isPackageSelected.isLunchPackage ? "bg-mealflow-orange text-white shadow-md shadow-orange-500/20" : "text-mealflow-muted hover:bg-mealflow-light dark:text-mealflow-mutedDark dark:hover:bg-mealflow-navy"}`}
                >
                  🍱 Lunch Package
                </button>
              )}

              {mealDietSelectedItem.Dinner && (
                <button
                  type="button"
                  onClick={() => packageHandler("Dinner")}
                  className={`rounded-xl px-4 py-3 text-sm font-bold transition-all duration-200 ${isPackageSelected.isDinnerPackage ? "bg-[#38B4A8] text-white shadow-md shadow-[#38B4A8]/20" : "text-mealflow-muted hover:bg-mealflow-light dark:text-mealflow-mutedDark dark:hover:bg-mealflow-navy"}`}
                >
                  🌙 Dinner Package
                </button>
              )}
            </div>
          </div>
        </div>

        {/* MEALS */}
        <div className="mt-8">
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
        </div>

        {/* SUBSCRIPTION */}
        {userPackageData.lunchPackage.length > 0 && userPackageData.dinnerPackage.length > 0 && (
          <div className="mt-10">
            <Subciption subscriptionPlanData={subscriptionPlanData} selectedPlan={selectedPlan} selectedPlanHandler={selectedPlanHandler} userPackageData={userPackageData} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Preference;