import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const IMAGE_URL = "https://toneop.s3.ap-south-1.amazonaws.com/";
const INITIAL_VISIBLE_ITEMS = 9;

const MealContainer = ({
  mealDietSelectedItem,
  userPackageData,
  mealItem,
  mealData,
  onCheckedPress,
  isPackageSelected,
  onButtonPressed,
  loading,
  error,
  filterdItems,
  isInsideModal = false,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [showAllItems, setShowAllItems] = useState(false);

  const closeModal = () => {
    setIsModalVisible(false);
    setModalData(null);
  };

  const modalHandler = (item) => {
    setModalData(item);
    setIsModalVisible(true);
  };

  const isMealExistInUserPackageData = (id) => {
    if (!isPackageSelected || !userPackageData) return false;

    try {
      if (isPackageSelected.isLunchPackage) {
        return (
          userPackageData?.lunchPackage?.some(
            (ele) => ele?.mealItem?.id === id
          ) || false
        );
      }

      return (
        userPackageData?.dinnerPackage?.some(
          (ele) => ele?.mealItem?.id === id
        ) || false
      );
    } catch (err) {
      return false;
    }
  };

  const getMealName = (item) =>
    item?.name || item?.subscription_name || "Meal";

  const getMealDescription = (item) => item?.description || "";

  const getNutritionData = (item) => {
    if (Array.isArray(item?.food_serving)) {
      return item.food_serving;
    }

    return [];
  };

  const getCalories = (item) => {
    const nutrition = getNutritionData(item);

    if (
      nutrition.length > 0 &&
      nutrition[0]?.kcal !== undefined
    ) {
      return nutrition[0].kcal;
    }

    return null;
  };

  const visibleItems = showAllItems
    ? filterdItems || []
    : (filterdItems || []).slice(0, INITIAL_VISIBLE_ITEMS);

  const hasMoreItems =
    (filterdItems?.length || 0) > INITIAL_VISIBLE_ITEMS;

  return (
    <div className="w-full box-border bg-mealflow-white dark:bg-mealflow-dark">
      {/* =========================
          NUTRITIONAL INFO MODAL
      ========================== */}

      <Modal
        show={isModalVisible}
        onHide={closeModal}
        centered
        size="lg"
        className="z-[9999]"
      >
        <div className="overflow-hidden rounded-[16px] bg-mealflow-white shadow-2xl dark:bg-mealflow-darkCard">
          {/* HEADER */}

          <div className="relative flex items-center justify-center border-b border-mealflow-border bg-mealflow-white px-5 py-4 dark:border-mealflow-borderDark dark:bg-mealflow-darkCard">
            <h2 className="m-0 text-center text-[22px] font-semibold text-mealflow-text dark:text-mealflow-white">
              Nutritional Info
            </h2>

            <button
              type="button"
              onClick={closeModal}
              aria-label="Close"
              className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-mealflow-border text-[22px] leading-none text-mealflow-text transition-colors hover:bg-mealflow-orange hover:text-white dark:bg-mealflow-borderDark dark:text-mealflow-white dark:hover:bg-mealflow-orange"
            >
              ×
            </button>
          </div>

          {/* BODY */}

          <div className="max-h-[85vh] overflow-y-auto bg-mealflow-white dark:bg-mealflow-darkCard">
            {modalData && (
              <div className="w-full box-border p-[5px_5px_15px] min-[601px]:p-[5px_20px_20px]">
                <img
                  src={`${IMAGE_URL}${modalData.image}`}
                  alt={getMealName(modalData)}
                  className="mx-auto mb-5 block h-[200px] w-full rounded-[15px] bg-mealflow-light object-cover min-[601px]:h-[210px] min-[601px]:w-[72%] min-[851px]:w-[80%] min-[1101px]:w-[62%] dark:bg-mealflow-navy"
                />

                <h2 className="m-[10px_0_15px] text-center text-[20px] font-semibold leading-[1.4] text-mealflow-text min-[601px]:text-[24px] dark:text-mealflow-white">
                  {getMealName(modalData)}
                </h2>

                {getMealDescription(modalData) && (
                  <p className="mx-auto mb-[22px] max-w-[850px] whitespace-pre-line text-[14px] leading-[1.65] text-mealflow-muted min-[601px]:text-[15px] dark:text-mealflow-mutedDark">
                    {getMealDescription(modalData)}
                  </p>
                )}

                {/* NUTRITION CARDS */}

                <div className="grid w-full grid-cols-1 !gap-[20px] min-[851px]:grid-cols-2">
                  {getNutritionData(modalData).map(
                    (nutrition, index) => (
                      <div
                        key={`${nutrition?.name || "serving"}-${index}`}
                        className="w-full box-border rounded-[13px] border border-mealflow-border bg-mealflow-light p-[14px] min-[601px]:p-[18px] dark:border-mealflow-borderDark dark:bg-mealflow-dark"
                      >
                        <h4 className="m-[0_0_16px] text-[15px] font-semibold leading-[1.4] text-mealflow-text dark:text-mealflow-white">
                          {nutrition?.name ||
                            "Nutrition Information"}
                        </h4>

                        <div className="grid grid-cols-4 gap-[5px] min-[601px]:gap-[10px]">
                          <div className="min-w-0 text-center">
                            <div className="mx-auto mb-[7px] flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#edf5e5] text-[14px] min-[601px]:h-10 min-[601px]:w-10 min-[601px]:text-[17px] dark:bg-mealflow-navy">
                              🥩
                            </div>

                            <span className="mb-[3px] block text-[10px] text-mealflow-muted min-[601px]:text-[12px] dark:text-mealflow-mutedDark">
                              Protein
                            </span>

                            <strong className="block text-[12px] text-[#80b53b] min-[601px]:text-[14px]">
                              {nutrition?.protein ?? 0}g
                            </strong>
                          </div>

                          <div className="min-w-0 text-center">
                            <div className="mx-auto mb-[7px] flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#edf5e5] text-[14px] min-[601px]:h-10 min-[601px]:w-10 min-[601px]:text-[17px] dark:bg-mealflow-navy">
                              💧
                            </div>

                            <span className="mb-[3px] block text-[10px] text-mealflow-muted min-[601px]:text-[12px] dark:text-mealflow-mutedDark">
                              Fat
                            </span>

                            <strong className="block text-[12px] text-[#80b53b] min-[601px]:text-[14px]">
                              {nutrition?.fat ?? 0}g
                            </strong>
                          </div>

                          <div className="min-w-0 text-center">
                            <div className="mx-auto mb-[7px] flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#edf5e5] text-[14px] min-[601px]:h-10 min-[601px]:w-10 min-[601px]:text-[17px] dark:bg-mealflow-navy">
                              🌱
                            </div>

                            <span className="mb-[3px] block text-[10px] text-mealflow-muted min-[601px]:text-[12px] dark:text-mealflow-mutedDark">
                              Fiber
                            </span>

                            <strong className="block text-[12px] text-[#80b53b] min-[601px]:text-[14px]">
                              {nutrition?.fibre ?? 0}g
                            </strong>
                          </div>

                          <div className="min-w-0 text-center">
                            <div className="mx-auto mb-[7px] flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#edf5e5] text-[14px] min-[601px]:h-10 min-[601px]:w-10 min-[601px]:text-[17px] dark:bg-mealflow-navy">
                              🌾
                            </div>

                            <span className="mb-[3px] block text-[10px] text-mealflow-muted min-[601px]:text-[12px] dark:text-mealflow-mutedDark">
                              Carbs
                            </span>

                            <strong className="block text-[12px] text-[#80b53b] min-[601px]:text-[14px]">
                              {nutrition?.carbs ?? 0}g
                            </strong>
                          </div>
                        </div>

                        <div className="mt-3 text-right text-[13px] font-semibold text-[#80b53b]">
                          {nutrition?.kcal ?? 0} kcal
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </Modal>

      {/* =========================
          FOOD CARDS
      ========================== */}

      {loading ? (
        <div className="w-full box-border p-[50px_20px] text-center text-[16px] text-mealflow-muted dark:text-mealflow-mutedDark">
          Loading...
        </div>
      ) : error ? (
        <div className="w-full box-border p-[50px_20px] text-center text-[16px] text-red-600 dark:text-red-400">
          Error: {error?.message || "Unable to load meals"}
        </div>
      ) : visibleItems.length === 0 ? (
        <div className="w-full box-border p-[50px_20px] text-center text-[17px] text-mealflow-muted dark:text-mealflow-mutedDark">
          No meals available.
        </div>
      ) : (
        <>
          {/* FOOD GRID */}

          <ul className="m-0 grid w-full list-none box-border grid-cols-1 !gap-[20px] p-[25px_15px_30px] min-[601px]:grid-cols-1 min-[601px]:p-[25px_18px_30px] min-[851px]:grid-cols-2 min-[851px]:p-[25px_20px_30px] min-[1101px]:grid-cols-3 min-[1101px]:p-[25px_25px_30px] min-[1201px]:grid-cols-4">
            {visibleItems.map((item) => {
              const isSelected =
                isMealExistInUserPackageData(item.id);

              return (
                <li
                  key={item.id}
                  className="w-full min-w-0 box-border rounded-[16px] border border-mealflow-border bg-mealflow-white p-[15px] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#80b53b] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] min-[601px]:p-4 dark:border-mealflow-borderDark dark:bg-mealflow-darkCard dark:hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)]"
                >
                  <div className="relative w-full box-border">
                    {/* CHECKBOX */}

                    <button
                      type="button"
                      onClick={() => onCheckedPress(item)}
                      aria-label={
                        isSelected
                          ? `Remove ${getMealName(item)}`
                          : `Select ${getMealName(item)}`
                      }
                      className="absolute left-2 top-2 z-[3] flex h-7 w-7 cursor-pointer items-center justify-center border-0 bg-transparent p-0 focus:outline-none focus:ring-0"
                    >
                      <span
                        className={`material-symbols-outlined flex h-[25px] w-[25px] items-center justify-center rounded-[3px] text-[22px] font-[900] ${
                          isSelected
                            ? "bg-[#80b53b] text-white"
                            : "bg-mealflow-border text-mealflow-border dark:bg-mealflow-borderDark dark:text-mealflow-borderDark"
                        }`}
                      >
                        {isSelected
                          ? "check"
                          : "check_box_outline_blank"}
                      </span>
                    </button>

                    {/* IMAGE */}

                    <img
                      src={`${IMAGE_URL}${item.image}`}
                      alt={getMealName(item)}
                      className="mb-[14px] block h-[220px] w-full rounded-[13px] bg-mealflow-light object-cover min-[601px]:h-[220px] min-[851px]:h-[190px] min-[1101px]:h-[205px] dark:bg-mealflow-navy"
                    />

                    {/* NAME */}

                    <h2 className="m-0 w-full overflow-hidden text-ellipsis text-[19px] font-semibold leading-[1.35] text-mealflow-text line-clamp-2 min-[601px]:text-[19px] min-[851px]:text-[20px] dark:text-mealflow-white">
                      {getMealName(item)}
                    </h2>

                    {/* CALORIES */}

                    {getCalories(item) !== null && (
                      <div className="mt-2 text-[14px] font-semibold text-mealflow-muted min-[601px]:text-[15px] dark:text-mealflow-mutedDark">
                        {getCalories(item)} kcal/serving
                      </div>
                    )}
                  </div>

                  {/* WHAT YOU WILL GET */}

                  <button
                    type="button"
                    onClick={() => modalHandler(item)}
                    className="mt-[15px] flex min-h-10 w-full cursor-pointer items-center justify-center gap-[7px] rounded-[5px] border border-[#80b53b] bg-mealflow-white p-[8px_12px] text-[13px] font-medium text-[#80b53b] transition-colors duration-200 hover:bg-[#80b53b] hover:text-white focus:outline-none focus:ring-0 min-[601px]:min-h-[42px] min-[601px]:text-[14px] dark:bg-mealflow-darkCard"
                  >
                    <span>What you will get</span>
                    <span className="inline-block text-[17px] leading-none">
                      →
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* VIEW MORE */}

          {hasMoreItems && (
            <div className="mb-[30px] mt-[10px] flex w-full items-center justify-center box-border min-[601px]:mb-[45px] min-[601px]:mt-[15px]">
              <button
                type="button"
                onClick={() =>
                  setShowAllItems((previous) => !previous)
                }
                className="min-w-[120px] cursor-pointer rounded-[5px] border border-[#80b53b] bg-mealflow-white p-[9px_22px] text-[13px] font-medium text-[#80b53b] transition-colors duration-200 hover:bg-[#80b53b] hover:text-white focus:outline-none focus:ring-0 min-[601px]:min-w-[130px] min-[601px]:text-[14px] dark:bg-mealflow-darkCard"
              >
                {showAllItems ? "View Less ↑" : "View More ↓"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MealContainer;