import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
// import { BsCheckSquareFill, BsSquare, BsCheckSquare } from "react-icons/bs";
import styles from "../styles/Days_subcription.module.css";
import Input from "./Input.js";
import useRazorpay from "react-razorpay";
import congratulation from "../components/assets/congratulation.png";
import Image from "next/image";
import axios from "axios";

const INPUTDATA = [
  {
    placeholder: " Enter Name",
    type: "text",
    label: "Name",
    name: "name",
    maxlength: "50",
  },
  {
    placeholder: " Enter Phone Number",
    type: "tel",
    label: "Phone Number",
    name: "phone",
    maxlength: "10",
  },
  {
    placeholder: " Enter Email Address",
    type: "email",
    label: "Email",
    name: "email",
    maxlength: "50",
  },
  {
    placeholder: " Enter Address",
    type: "text",
    label: "Address",
    name: "address",
    maxlength: "500",
  },
];

const INITIAL_USER_DETAIL = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  pincode: "",
  deliveryDate: "",
};
const INITIAL_STATE = {
  response: {},
  cartItem: [],
  userDetail: INITIAL_USER_DETAIL,
  totalPrice: 0,
  // isSideModalVisible: false,
};

const DEV_BASE_URL = "https://dev.dashboard.toneop.net/toneopeats/";

export default function Subscription({
  subscriptionPlanData,
  selectedPlan,
  selectedPlanHandler,
  userPackageData,
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const closeModal = () => setIsModalVisible(false);
  const [cartItem, setCartItem] = useState([]);
  const [error, setError] = useState("All Fields Are Mandatory *");
  const [razorResponse, setRazorResponse] = useState([]);
  const [userData, setUserData] = useState(INITIAL_USER_DETAIL);
  const [congratulationModal, setCongratulationModal] = useState(false);
  const closeModalCongratulation = () =>
    setCongratulationModal({ visible: false, data: undefined });
  const [orderData, setOrderData] = useState(null);
  const Razorpay = useRazorpay();

  // console.log("selected plan ", selectedPlan);

  useEffect(() => {
    setCartItem(subscriptionPlanData);
    // console.log("here is supscription", subscriptionPlanData);
  }, [subscriptionPlanData]);

  const createOrder = async (userData) => {
    const { tempLPIds, tempDPIds } = calcSubscriptionIds(userData);
    try {
      const raw = {
        name: userData.name,
        email_address: userData.email,
        mobile_number: userData.phone,
        device_type: 2,
        address: userData.address,
        location: userData.city,
        notes: "hello",
        pincode: userData.pincode,
        delivery_date: userData.deliveryDate,
        lunch_subscription_type: tempLPIds,
        dinner_subscription_type: tempDPIds,
      };

      const response = await axios.post(
        `${DEV_BASE_URL}toneopeats_createorder_webapi`,
        raw,
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.status) {
        console.log("response create order", response);
        setRazorResponse(response);
        return response.data.data;
      } else {
        alert(response.data.message);
        setUserData(INITIAL_USER_DETAIL);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const paymentSucces = async (res, order) => {
    console.log("order detail response", res);
    console.log("order detail order", order);
    try {
      const raw = {
        user_id: order.user_id,
        order_id: order.id,
        order_payment_id: res.razorpay_payment_id,
        razorpay_signature: res.razorpay_signature,
      };
      const response = await axios.post(
        `${DEV_BASE_URL}toneopeats_buy_subscription`,
        raw,
        {
          headers: {
            accept: "application/json",
            Authorization: order.token,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.log(error, "error");
      alert(error.message);
      setIsModalVisible(false);
    }
  };

  const handlePayment = async (userData) => {
    const order = await createOrder(userData);
    if (order) {
      const options = {
        // key: "rzp_live_uLNoH04nQM0zC8",
        key: "rzp_test_sVMGsI8ewSS12A",
        amount: parseInt(order.amount) * 100,
        currency: "INR",
        name: "Toneop",
        description: "Test",
        image:
          "https://firebasestorage.googleapis.com/v0/b/toneop-campaign-template.appspot.com/o/tonopicon.png?alt=media&token=c9095d54-5c37-4b62-9168-cf12ffc01461",
        order_id: order.order_payment_id,

        handler: async (res) => {
          if (res) {
            const response = await paymentSucces(res, order);
            console.log("response outcome", response.data);
            if (response.status) {
              setIsModalVisible(false);

              setCongratulationModal({ visible: true, data: response.data });
              // setOrderData(response.data);
            }
          }
        },
        prefill: userData,
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },

        modal: {
          ondismiss: function () {
            setIsModalVisible(false);
          },
        },
      };

      const rzpay = new Razorpay(options);

      rzpay.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

      rzpay.open();
    }
  };

  const calcSubscriptionIds = () => {
    const tempLPIds = [];
    const tempDPIds = [];

    if (userPackageData.lunchPackage.length) {
      userPackageData.lunchPackage.map((item) => {
        item.mealItem.subscription_type.map((plan) => {
          if (plan.name === userPackageData.selectedPlan.name) {
            tempLPIds.push(plan.id);
          }
        });
      });
    }
    if (userPackageData.dinnerPackage.length) {
      userPackageData.dinnerPackage.map((item) => {
        item.mealItem.subscription_type.map((plan) => {
          if (plan.name === userPackageData.selectedPlan.name) {
            tempDPIds.push(plan.id);
          }
        });
      });
    }
    // console.log("tempPlans lunch", tempLPIds);
    // console.log("tempPlans dinner", tempDPIds);
    return { tempLPIds, tempDPIds };
    // console.log("lunch package id", tempLPIds);
  };
  const handleSubmit = () => {
    const phoneNumberRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pincodeRegex = /^[1-9][0-9]{5}$/;
    if (userData.name === "") {
      setError("Please Enter Name *");
      return setUserData(userData.name);
    }
    if (userData.phone === "") {
      setError("Please Enter the Phone Number *");
      return setUserData(userData.phone);
    } else if (!phoneNumberRegex.test(userData.phone)) {
      setError("Invalid phone number format *");
      return;
    }
    if (userData.email === "") {
      setError("Please Enter the Email address *");
      return setUserData(userData.email);
    } else if (!emailRegex.test(userData.email)) {
      setError("Please Enter the valid email address *");
      return;
    }
    if (userData.address === "") {
      setError("Please Enter the address *");
      return setUserData(userData.address);
    }
    if (userData.pincode === "") {
      setError("Enter the pincode *");
    } else if (!pincodeRegex.test(userData.pincode)) {
      setError("Please Enter the valid pincode *");
      return;
    }
    const currentDate = new Date().toISOString().split("T")[0];
    if (userData.deliveryDate === "") {
      setError("Please Enter Date *");
      return setUserData(userData.deliveryDate);
    } else if (userData.deliveryDate < currentDate) {
      setError("Delivery date cannot be before the current date *");
      return;
    }

    setUserData(userData.city);
    setError("");
    // console.log("user Data After submittion", userData);
    // console.log("selected plan", selectedPlan);
    // console.log("subcription plan data", subscriptionPlanData);
    // console.log("user package plan", userPackageData);
    if (userData) {
      handlePayment(userData);
    }
    calcSubscriptionIds();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const renderItem = (item, selectedPlan) => {
    //console.log("selected render", selectedPlan);
    return (
      <div className={styles.itemContainer}>
        <div className={styles.planContainer}>
          {/* <label className={styles.fancyCheck}> */}
          {/* <input
          type="checkbox"
          style={{ width: "25px", height: "22px", backgroundColor: "red" }}
          onClick={() => selectedPlanHandler(item, subscriptionPlanData)}
        /> */}

          <button
            onClick={() => selectedPlanHandler(item, subscriptionPlanData)}
            style={{
              outline: "none",
              border: "none",
              backgroundColor: "transparent",
              height: "25px",
              width: "25px",
            }}
          >
            {item.id === selectedPlan ? (
              <span
                class="material-symbols-outlined"
                style={{
                  backgroundColor: "#80b53b",
                  color: "white",
                  height: "25px",
                  width: "25px",
                  borderRadius: "3px",
                  fontWeight: "900",
                  fontSize: "22px",
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
                }}
                //className={styles.unselected}
              >
                check_box_outline_blank
              </span>
            )}
          </button>
          <p
            className={styles.perceDiscount}
            style={{ marginBottom: "0px" }}
          >{`${item.duration} Days`}</p>
        </div>
        <div className={styles.horiLine} />
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <h3 className={styles.perMealPriceText}>
            {`₹${(item.final_price / parseInt(item.duration, 10)).toFixed(0)} `}
            <span className={styles.perMealText} style={{ color: "#8f8f8f" }}>
              / Per Meal
            </span>
          </h3>
          <div
            style={{ display: "flex", marginTop: "5px", marginBottom: "5px" }}
          >
            <span style={{ color: "#000", fontSize: "14px" }}>
              ₹
              <span style={{ color: "#8f8f8f" }}>
                {item.final_price.toFixed(0)} for {item.name}
              </span>
            </span>
            <p className={styles.perceDiscountText}>{`${item.discount}%off`}</p>
          </div>

          <div className={styles.horiLine}></div>
        </div>
        <div className={styles.freeDeliveryContainer}>
          <img
            className={styles.deliveryImage}
            // src={IMAGE_PATH.DeliveryCartBike}
            src="https://toneopeats.com/public/img/delivery.svg"
            alt="Delivery Cart Bike"
          />
          <p className={styles.deliveryText} style={{ marginBottom: "0px" }}>
            Free delivery
          </p>
        </div>
      </div>
    );
  };

  const getNextDay = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1); // Adding 1 day
    return currentDate.toISOString().split("T")[0];
  };

  return (
    <div className={styles.container}>
      <div className={styles.scrollContainer}>
        {subscriptionPlanData.map((item) => (
          <div key={item.id}>{renderItem(item, selectedPlan.id)}</div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          className={styles.buttonDesign}
          onClick={() => setIsModalVisible(true)}
        >
          Proceed
        </button>
      </div>
      <Modal
        show={congratulationModal.visible}
        onHide={closeModalCongratulation}
      >
        {/* <Modal.Title style={{ color: "#80B53B", textAlign: "center" }}>
          Congratulation
        </Modal.Title> */}
        {/* <Modal.Header style={{ color: "#80B53B", marginLeft: "25%" }}>
          Orderd Created Sucessfully
        </Modal.Header> */}
        <div
          style={{ display: "flex", justifyContent: "center", padding: "10px" }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Image src={congratulation} className={styles.congrats_img} />
            <span
              style={{ color: "#80B53B", fontSize: "30px", fontWeight: "500" }}
            >
              Your order is successfully placed...
            </span>
          </div>
        </div>
        <div className={styles.modal_container}>
          <span className={styles.congrats_history}>Order History</span>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <table style={{ borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td className={styles.table_td}>Subscription Name</td>
                  <td className={styles.table_td}>
                    {congratulationModal.data?.subscription_name}
                  </td>
                </tr>
                <tr>
                  <td className={styles.table_td}>Price</td>
                  <td className={styles.table_td}>
                    {congratulationModal.data?.price}
                  </td>
                </tr>
                <tr>
                  <td className={styles.table_td}>Subscription Type</td>
                  <td className={styles.table_td}>
                    {congratulationModal.data?.subscription_type}
                  </td>
                </tr>
                <tr>
                  <td className={styles.table_td}>Purchase Date</td>
                  <td className={styles.table_td}>
                    {congratulationModal.data?.purchase_date}
                  </td>
                </tr>
                <tr>
                  <td className={styles.table_td}>Expiry date</td>
                  <td className={styles.table_td}>
                    {congratulationModal.data?.expiry_date}
                  </td>
                </tr>
                <tr>
                  <td className={styles.table_td}>Order Id</td>
                  <td className={styles.table_td}>
                    {congratulationModal.data?.order_id}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <span style={{ color: "#000" }}>
            amount{congratulationModal.data.price}
          </span> */}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "4%",
          }}
        >
          <a href="https://play.google.com/store/apps/details?id=com.toneop.mobile">
            <img
              src="https://toneop.com/public/img/googlePlay.png"
              className={styles.share_image}
            />
          </a>
          <a href="https://apps.apple.com/in/app/toneop/id1586794292">
            <img
              src="https://toneop.com/public/img/appleStore.png"
              className={styles.share_image}
            />
          </a>
        </div>

        <Modal.Footer
          style={{
            color: "#fff",
            textAlign: "center",
            backgroundColor: "#80B53B",
          }}
        >
          Thanks For Ordering
        </Modal.Footer>
      </Modal>
      <Modal show={isModalVisible} onHide={closeModal}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          <h3 style={{ color: "#80B53B" }}>Please Enter Your Details</h3>

          {INPUTDATA.map((item, index) => (
            <Input
              key={index}
              inputItem={item}
              handleChange={handleChange}
              userData={userData}
            />
          ))}
          <div>
            <div
              className="text-black text-base font-urbanist font-bold mb-2"
              style={{ color: "#000" }}
            >
              City
              <span className="text-red-700" style={{ color: "red" }}>
                &nbsp; *
              </span>
            </div>
            <div>
              <select
                name="city"
                id="city"
                className={styles.input_design}
                placeholder="Enter City"
                value={userData.city}
                onChange={handleChange}
              >
                <option value="0">Enter City</option>
                <option value="1">Bhopal</option>
                <option value="2">Indore</option>
              </select>
            </div>
          </div>
          <div>
            <div
              className="text-black text-base font-urbanist font-bold mb-2"
              style={{ color: "#000" }}
            >
              Pincode
              <span className="text-red-700" style={{ color: "red" }}>
                &nbsp; *
              </span>
            </div>
            <div>
              <input
                type="text"
                placeholder="Pin Code"
                //   className="w-full p-3 border focus:border-gray-300 rounded-lg"
                className={styles.input_design}
                name="pincode"
                value={userData.pincode}
                onChange={handleChange}
                maxlength={6}
              />
            </div>
          </div>
          <div>
            <div
              className="text-black text-base font-urbanist font-bold mb-2"
              style={{ color: "#000" }}
            >
              Delivery Date
              <span className="text-red-700" style={{ color: "red" }}>
                &nbsp; *
              </span>
            </div>
            <div>
              <input
                type="date"
                placeholder="Delivery Date"
                //   className="w-full p-3 border focus:border-gray-300 rounded-lg"
                className={styles.input_design}
                name="deliveryDate"
                value={userData.deliveryDate}
                onChange={handleChange}
                min={getNextDay()}
              />
            </div>
          </div>

          {error && (
            <div
              // className="text-red-700 font-oswald font-bold text-xs px-6 mt-5"
              style={{ color: "red", fontSize: "16px", marginTop: "2%" }}
            >
              {error}
            </div>
          )}
          <div>
            <button
              className={styles.modal_proceed}
              style={{ outline: "none" }}
              onClick={handleSubmit}
            >
              Proceed
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
