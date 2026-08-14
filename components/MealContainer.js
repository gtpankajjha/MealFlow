import React, { useState } from "react";
import styles from "../styles/MealContainer.module.css";
import Modal from "react-bootstrap/Modal";

const IMAGE_URL =
  "https://toneop.s3.ap-south-1.amazonaws.com/";

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

  /*
   * Open "What you will get" modal
   */
  const modalHandler = (item) => {
    setModalData(item);
    setIsModalVisible(true);
  };

  /*
   * Check whether meal is already selected
   */
  const isMealExistInUserPackageData = (id) => {
    if (!isPackageSelected || !userPackageData) {
      return false;
    }

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

  /*
   * Support current preference API structure
   */
  const getMealName = (item) => {
    return item?.name || item?.subscription_name || "Meal";
  };

  const getMealDescription = (item) => {
    return item?.description || "";
  };

  /*
   * Nutrition comes from food_serving
   */
  const getNutritionData = (item) => {
    if (Array.isArray(item?.food_serving)) {
      return item.food_serving;
    }

    return [];
  };

  /*
   * Get first kcal for card
   */
  const getCalories = (item) => {
    const nutrition = getNutritionData(item);

    if (nutrition.length > 0 && nutrition[0]?.kcal !== undefined) {
      return nutrition[0].kcal;
    }

    return null;
  };

  /*
   * Initially show only 9.
   * After View More, show everything.
   */
  const visibleItems = showAllItems
    ? filterdItems || []
    : (filterdItems || []).slice(0, INITIAL_VISIBLE_ITEMS);

  const hasMoreItems =
    (filterdItems?.length || 0) > INITIAL_VISIBLE_ITEMS;

  return (
    <div className={styles.tab_Div}>

      {/* =====================================================
          NUTRITIONAL INFO MODAL
      ====================================================== */}

      <Modal
        show={isModalVisible}
        onHide={closeModal}
        centered
        size="lg"
        className={styles.nutritionModal}
      >
        <Modal.Header closeButton>
          <Modal.Title className={styles.modalTitle}>
            Nutritional Info
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {modalData && (
            <div className={styles.modalContent}>

              {/* Food Image */}
              <img
                src={`${IMAGE_URL}${modalData.image}`}
                alt={getMealName(modalData)}
                className={styles.modalFoodImage}
              />

              {/* Food Name */}
              <h2 className={styles.modalFoodName}>
                {getMealName(modalData)}
              </h2>

              {/* Description */}
              {getMealDescription(modalData) && (
                <p className={styles.modalDescription}>
                  {getMealDescription(modalData)}
                </p>
              )}

              {/* =================================================
                  NUTRITION SERVINGS
              ================================================== */}

              <div className={styles.modalNutritionGrid}>
                {getNutritionData(modalData).map(
                  (nutrition, index) => (
                    <div
                      className={styles.modalServingCard}
                      key={`${nutrition?.name || "serving"}-${index}`}
                    >
                      <h4>
                        {nutrition?.name ||
                          "Nutrition Information"}
                      </h4>

                      <div className={styles.modalMacroGrid}>

                        {/* Protein */}
                        <div className={styles.modalMacroItem}>
                          <div
                            className={styles.macroIcon}
                          >
                            🥩
                          </div>

                          <span>Protein</span>

                          <strong>
                            {nutrition?.protein ?? 0}g
                          </strong>
                        </div>

                        {/* Fat */}
                        <div className={styles.modalMacroItem}>
                          <div
                            className={styles.macroIcon}
                          >
                            💧
                          </div>

                          <span>Fat</span>

                          <strong>
                            {nutrition?.fat ?? 0}g
                          </strong>
                        </div>

                        {/* Fiber */}
                        <div className={styles.modalMacroItem}>
                          <div
                            className={styles.macroIcon}
                          >
                            🌱
                          </div>

                          <span>Fiber</span>

                          <strong>
                            {nutrition?.fibre ?? 0}g
                          </strong>
                        </div>

                        {/* Carbs */}
                        <div className={styles.modalMacroItem}>
                          <div
                            className={styles.macroIcon}
                          >
                            🌾
                          </div>

                          <span>Carbs</span>

                          <strong>
                            {nutrition?.carbs ?? 0}g
                          </strong>
                        </div>
                      </div>

                      {/* Calories */}
                      <div className={styles.modalCalories}>
                        {nutrition?.kcal ?? 0} kcal
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>

      {/* =====================================================
          FOOD CARDS
      ====================================================== */}

      {loading ? (
        <div className={styles.loadingMessage}>
          Loading...
        </div>
      ) : error ? (
        <div className={styles.errorMessage}>
          Error: {error?.message || "Unable to load meals"}
        </div>
      ) : visibleItems.length === 0 ? (
        <div className={styles.noItems}>
          No meals available.
        </div>
      ) : (
        <>
          <ul className={styles.food_ul}>
            {visibleItems.map((item) => {
              const isSelected =
                isMealExistInUserPackageData(item.id);

              return (
                <li
                  className={styles.food_li}
                  key={item.id}
                >
                  {/* =================================================
                      FOOD AREA
                  ================================================== */}

                  <div className={styles.foodTop}>

                    {/* Checkbox */}
                    <button
                      type="button"
                      className={styles.checkButton}
                      onClick={() =>
                        onCheckedPress(item)
                      }
                      aria-label={
                        isSelected
                          ? `Remove ${getMealName(item)}`
                          : `Select ${getMealName(item)}`
                      }
                    >
                      {isSelected ? (
                        <span
                          className="material-symbols-outlined"
                          style={{
                            backgroundColor:
                              "#80b53b",
                            color: "#fff",
                            height: "25px",
                            width: "25px",
                            borderRadius: "3px",
                            fontWeight: "900",
                            fontSize: "22px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent:
                              "center",
                          }}
                        >
                          check
                        </span>
                      ) : (
                        <span
                          className="material-symbols-outlined"
                          style={{
                            color: "#eeeeee",
                            height: "25px",
                            width: "25px",
                            backgroundColor:
                              "#eeeeee",
                            borderRadius: "3px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent:
                              "center",
                          }}
                        >
                          check_box_outline_blank
                        </span>
                      )}
                    </button>

                    {/* Food Image */}
                    <img
                      className={styles.if_img}
                      src={`${IMAGE_URL}${item.image}`}
                      alt={getMealName(item)}
                    />

                    {/* Food Name */}
                    <h2 className={styles.if_title}>
                      {getMealName(item)}
                    </h2>

                    {/* Calories */}
                    {getCalories(item) !== null && (
                      <div
                        className={styles.cardCalories}
                      >
                        {getCalories(item)} kcal/serving
                      </div>
                    )}
                  </div>

                  {/* =================================================
                      WHAT YOU WILL GET
                      DIRECTLY OPENS MODAL
                  ================================================== */}

                  <button
                    type="button"
                    className={styles.button_design}
                    onClick={() =>
                      modalHandler(item)
                    }
                  >
                    <span className={styles.what_text}>
                      What you will get
                    </span>

                    <span
                      className={styles.arrow_image}
                    >
                      →
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* =====================================================
              VIEW MORE / VIEW LESS
          ====================================================== */}

          {hasMoreItems && (
            <div className={styles.viewMoreContainer}>
              <button
                type="button"
                className={styles.viewMoreButton}
                onClick={() =>
                  setShowAllItems(
                    (previous) => !previous
                  )
                }
              >
                {showAllItems
                  ? "View Less ↑"
                  : "View More ↓"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MealContainer;