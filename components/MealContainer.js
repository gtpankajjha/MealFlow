import React, { useState, useEffect } from "react";
import styles from "../styles/MealContainer.module.css";
// import useApi from "../components/useApi";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Link from "next/link";

const MealContainer = ({
  mealDietSelectedItem,
  userPackageData,
  mealItem,
  mealData,
  // isMealExistInUserPackageData,
  onCheckedPress,
  isPackageSelected,
  onButtonPressed,
  loading,
  error,
  filterdItems,
  isInsideModal = false,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const closeModal = () => setIsModalVisible(false);
  // const [filterdItems, setFilteredItems] = useState([]);
  const [modalData, setModalData] = useState([]);
  const [modalHeader, setModalHeader] = useState([]);

  const onPressMetaTitle = () => {
    if (isInsideModal) {
      setIsExpanded(true);
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  const modalHandler = (item) => {
    setModalData(item);
    setIsModalVisible(!isModalVisible);
  };

  const isMealExistInUserPackageData = (id) => {
    let isExist;
    if (isPackageSelected.isLunchPackage) {
      isExist = userPackageData.lunchPackage.find(
        (ele) => ele.mealItem.id === id
      );
    } else {
      isExist = userPackageData.dinnerPackage.find(
        (ele) => ele.mealItem.id === id
      );
    }
    if (isExist) {
      return true;
    }
    return false;
  };

  return (
    <div className={styles.tab_Div}>
      <Modal show={isModalVisible} onHide={closeModal}>
        <div>
          <Modal.Header closeButton>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Modal.Title className={styles.meal_name}>
                {modalData.subscription_name}
              </Modal.Title>
              <span style={{ color: "gray" }}>
                {` You will get one of these as your "Dish Of The Day"`}
              </span>
            </div>
          </Modal.Header>
          <div style={{ marginTop: "2%", padding: "10px" }}>
            {modalData?.food?.map((item, index) => {
              const Image_URL = "https://toneop.s3.ap-south-1.amazonaws.com/";

              return (
                <div style={{ overflow: "scroll" }} key={index}>
                  <div className={styles.mealContainer}>
                    <img
                      style={{ height: "70px" }}
                      src={`${Image_URL}${item.image}`}
                    />
                    <div style={{ margin: "0%" }}>
                      <Link
                        href={{
                          pathname: "/mealdetail",
                          query: { item: JSON.stringify(item) },
                        }}
                        passHref
                        className={styles.button}
                      >
                        <span className={styles.button}>{item.name}</span>
                      </Link>

                      <div>
                        <span style={{ color: "#000" }}>
                          Kacl:{" "}
                          <span style={{ color: "green" }}>{item.kcal}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ marginLeft: "80%", marginTop: "10px" }}>
            <Button
              type="secondary"
              onClick={closeModal}
              style={{
                backgroundColor: "#fff",
                color: "gray",
                border: "none",
                marginBottom: "10px",
              }}
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>
      <ul className={styles.food_ul}>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error:{error.message}</div>
        ) : (
          filterdItems?.map((item, index) => {
            const Image_URL = "https://toneop.s3.ap-south-1.amazonaws.com/";
            return (
              <li className={styles.food_li} key={index}>
                <label className={styles.fancyCheck}>
                  <button
                    className={styles.fancyCheck}
                    onClick={() => onCheckedPress(item)}
                    style={{
                      outline: "none",
                      border: "none",
                      backgroundColor: "transparent",
                      height: "25px",
                      width: "25px",
                      transition: "background-color 0.5s, color 0.3s",
                    }}
                  >
                    {isMealExistInUserPackageData(item.id) ? (
                      <span
                        className="material-symbols-outlined"
                        style={{
                          backgroundColor: "#80b53b",
                          color: "white",
                          height: "25px",
                          width: "25px",
                          borderRadius: "3px",
                          fontWeight: "900",
                          fontSize: "22px",
                          // transition: "background-color 0.5s, color 0.3s",
                        }}
                      >
                        check
                      </span>
                    ) : (
                      <span
                        class="material-symbols-outlined"
                        style={{
                          color: "#eeeeee",
                          height: "25px",
                          width: "25px",
                          backgroundColor: "#eeeeee",
                          borderRadius: "3px",
                          transition: "background-color 0.5s, color 0.3s",
                        }}
                      >
                        check_box_outline_blank
                      </span>
                    )}
                  </button>
                  {/* <input
                    type="checkbox"
                    // name="pkgprice"
                    value={1}
                    className={styles.checkmark}
                    onClick={() => onCheckedPress(item)}
                  /> */}
                  <img
                    className={styles.if_img}
                    id="mealimg-1"
                    src={`${Image_URL}${item.image}`}
                  />
                  <input
                    type="hidden"
                    id="pimage-4"
                    value="https://toneopeats.com/public/img/individual/veggrill.png"
                  />
                  <h2 className={styles.if_title} id="mealtitle-4">
                    {item.subscription_name}
                  </h2>
                </label>

                <button
                  className={styles.button_design}
                  style={{ outline: "none" }}
                  onClick={() => modalHandler(item)}
                >
                  <span className={styles.what_text}> What you will get</span>

                  <img
                    src="https://toneopeats.com/public/img/arrowgreen.svg"
                    // style={{ width: "10%", height: "20%" }}
                    className={styles.arrow_image}
                  />
                </button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default MealContainer;
