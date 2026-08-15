import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Days_subcription.module.css";

export default function Subscription({
  subscriptionPlanData,
  selectedPlan,
  selectedPlanHandler,
  userPackageData,
}) {
  const router = useRouter();

  const renderItem = (item) => (
    <div className={styles.itemContainer}>
      <div className={styles.planContainer}>
        <button
          onClick={() => selectedPlanHandler(item, subscriptionPlanData)}
          style={{
            border: "none",
            background: "transparent",
            width: 25,
            height: 25,
            padding: 0,
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{
              backgroundColor:
                item.id === selectedPlan?.id ? "#80b53b" : "#eeeeee",
              color: item.id === selectedPlan?.id ? "#fff" : "#aaa",
              height: 25,
              width: 25,
              borderRadius: 3,
              fontSize: 22,
              display: "block",
            }}
          >
            {item.id === selectedPlan?.id
              ? "check"
              : "check_box_outline_blank"}
          </span>
        </button>

        <p className={styles.perceDiscount} style={{ marginBottom: 0 }}>
          {item.duration} Days
        </p>
      </div>

      <div className={styles.horiLine} />

      <div style={{ width: "100%" }}>
        <h3 className={styles.perMealPriceText}>
          ₹{(item.final_price / parseInt(item.duration, 10)).toFixed(0)}
          <span className={styles.perMealText}> / Per Meal</span>
        </h3>

        <div style={{ display: "flex", margin: "5px 0" }}>
          <span style={{ color: "#000", fontSize: 14 }}>
            ₹
            <span style={{ color: "#8f8f8f" }}>
              {item.final_price.toFixed(0)} for {item.name}
            </span>
          </span>

          <p className={styles.perceDiscountText}>{item.discount}%off</p>
        </div>

        <div className={styles.horiLine} />
      </div>

      <div className={styles.freeDeliveryContainer}>
        <img
          className={styles.deliveryImage}
          src="https://toneopeats.com/public/img/delivery.svg"
          alt="Free delivery"
        />
        <p className={styles.deliveryText} style={{ marginBottom: 0 }}>
          Free delivery
        </p>
      </div>
    </div>
  );

  const handleProceed = () => {
    if (!selectedPlan) {
      alert("Please select a subscription plan");
      return;
    }

    localStorage.setItem(
      "toneopCheckout",
      JSON.stringify({
        selectedPlan,
        userPackageData,
      })
    );

    router.push("/checkout");
  };

  return (
    <div className={styles.container}>
      <div className={styles.scrollContainer}>
        {subscriptionPlanData?.map((item) => (
          <div key={item.id}>{renderItem(item)}</div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <button className={styles.buttonDesign} onClick={handleProceed}>
          Proceed
        </button>
      </div>
    </div>
  );
}