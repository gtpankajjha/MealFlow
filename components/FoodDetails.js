import React, { useEffect } from "react";
import styles from "../styles/MealContainer.module.css";
import { useRouter } from "next/router";

const FoodDetails = ({ item }) => {
  const Image_URL = "https://toneop.s3.ap-south-1.amazonaws.com/";
  console.log("item out in food", item?.food_serving);
  const foodItem = item?.food_serving;
  return (
    <section className={styles.productDetailSec}>
      <div className={styles.container}>
        <div className="row">
          <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-">
            <div id="demo" data-ride="carousel">
              {/* <ul className="carousel-indicators sliderIndiul"> */}

              <div className={styles.carousel_inner}>
                <div>
                  <div>
                    <img
                      className={styles.proimgTag}
                      src="https://toneopeats.com/public/img/veg.svg"
                      alt="Veg Icon"
                    />
                    <span className={styles.carousel_container}>
                      <img
                        src={`${Image_URL}${item?.image}`}
                        alt="Food Image"
                        className={styles.img_container}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.img_small}>
              <div style={{ width: "82", height: "82" }}>
                <img
                  src={`${Image_URL}${item?.image}`}
                  alt="Food Image"
                  className={styles.liactive}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-">
            <div className={styles.foodDetails_div}>
              <h2 className={styles.h2}>{item?.name} </h2>
              <p>{item?.description}</p>
              <label className={styles.pd_catLabel}>
                <span>Kcal:</span>
                {item?.kcal}
              </label>

              <label className={styles.menu_macroinf}>Macros Information</label>
              <div className="pd_mdetails_div table-responsive">
                <table
                  style={{ width: "100%" }}
                  className="table table-striped"
                >
                  <tbody>
                    <tr>
                      <th>Served With</th>
                      <th>Protein</th>
                      <th>Fat</th>
                      <th>Fiber</th>
                      <th>Carbs</th>
                      <th>Calories</th>
                    </tr>
                    {foodItem?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <th>{item.name}</th>
                          <td>{item.protein}</td>
                          <td>{item.fat}</td>
                          <td>{item.fibre}</td>
                          <td>{item.carbs}</td>
                          <td>{item.kcal}</td>
                        </tr>
                      );
                    })}
                    {/* <tr>
                      <th>Spiced Quinoa</th>
                      <td>18g</td>
                      <td>18g</td>
                      <td>7g</td>
                      <td>47g</td>
                      <td>420</td>
                    </tr>
                    <tr>
                      <th>Peas &amp; Cilantro Brown Rice</th>
                      <td>16g</td>
                      <td>16g</td>
                      <td>5g</td>
                      <td>49g</td>
                      <td>406</td>
                    </tr>
                    <tr>
                      <th>Basmati Corn Rice</th>
                      <td>16g</td>
                      <td>15g</td>
                      <td>4g</td>
                      <td>63g</td>
                      <td>449</td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDetails;
