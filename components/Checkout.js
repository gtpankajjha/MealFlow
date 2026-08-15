import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import useRazorpay from "react-razorpay";
import styles from "../styles/Checkout.module.css"

const API = "http://localhost:5000/api/payment/create-order";
const DEV_API = "https://dev.dashboard.toneop.net/toneopeats/";

const INITIAL_USER = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  pincode: "",
  deliveryDate: "",
};

export default function Checkout() {
  const router = useRouter();
  const Razorpay = useRazorpay();

  const [checkout, setCheckout] = useState(null);
  const [userData, setUserData] = useState(INITIAL_USER);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("toneopCheckout");

    if (!data) {
      router.replace("/");
      return;
    }

    try {
      setCheckout(JSON.parse(data));
    } catch {
      localStorage.removeItem("toneopCheckout");
      router.replace("/");
    }
  }, [router]);

  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError("");
  };

  const getSubscriptionIds = () => {
    const lunch = [];
    const dinner = [];
    const packages = checkout?.userPackageData;

    if (!packages) return { lunch, dinner };

    packages.lunchPackage?.forEach((item) => {
      item.mealItem?.subscription_type?.forEach((plan) => {
        if (plan.name === packages.selectedPlan?.name) lunch.push(plan.id);
      });
    });

    packages.dinnerPackage?.forEach((item) => {
      item.mealItem?.subscription_type?.forEach((plan) => {
        if (plan.name === packages.selectedPlan?.name) dinner.push(plan.id);
      });
    });

    return { lunch, dinner };
  };

  const validate = () => {
    if (!userData.name.trim()) return "Please enter name";
    if (!/^\d{10}$/.test(userData.phone))
      return "Please enter a valid 10 digit phone number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email))
      return "Please enter a valid email";
    if (!userData.address.trim()) return "Please enter address";
    if (!userData.city) return "Please select city";
    if (!/^[1-9][0-9]{5}$/.test(userData.pincode))
      return "Please enter a valid pincode";
    if (!userData.deliveryDate) return "Please select delivery date";

    const today = new Date().toISOString().split("T")[0];

    if (userData.deliveryDate < today)
      return "Delivery date cannot be before today";

    return "";
  };

  const createOrder = async () => {
    const { lunch, dinner } = getSubscriptionIds();

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
      lunch_subscription_type: lunch,
      dinner_subscription_type: dinner,
    };

    try {
      const response = await axios.post(API, raw, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!response.data.success) {
        throw new Error(response.data.message || "Failed to create order");
      }

      return response.data.data;
    } catch (err) {
      console.error("Create order error:", err);
      throw new Error(
        err.response?.data?.message || "Failed to create Razorpay order"
      );
    }
  };

  const paymentSuccess = async (res, order) => {
    const raw = {
      user_id: order.user_id,
      order_id: order.id,
      order_payment_id: res.razorpay_payment_id,
      razorpay_signature: res.razorpay_signature,
    };

    const response = await axios.post(
      `${DEV_API}toneopeats_buy_subscription`,
      raw,
      {
        headers: {
          Accept: "application/json",
          Authorization: order.token,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  };

  const handlePayment = async () => {
    const validationError = validate();

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setLoading(true);

    try {
      const order = await createOrder();

      if (!order) throw new Error("Unable to create payment order");

      const options = {
        key: "rzp_test_TPytafRt9qSZZp",
        amount: parseInt(order.amount, 10) * 100,
        currency: "INR",
        name: "Toneop",
        description: "Toneop Subscription",
        image:
          "https://firebasestorage.googleapis.com/v0/b/toneop-campaign-template.appspot.com/o/tonopicon.png?alt=media&token=c9095d54-5c37-4b62-9168-cf12ffc01461",
        order_id: order.order_payment_id,

        prefill: {
          name: userData.name,
          email: userData.email,
          contact: userData.phone,
        },

        notes: {
          address: userData.address,
        },

        theme: {
          color: "#80B53B",
        },

        handler: async (res) => {
          try {
            const result = await paymentSuccess(res, order);

            if (result.status) {
              localStorage.removeItem("toneopCheckout");
              setSuccess(result.data);
            } else {
              alert(result.message || "Payment verification failed");
            }
          } catch (err) {
            console.error("Payment verification error:", err);
            alert("Payment completed but order verification failed.");
          } finally {
            setLoading(false);
          }
        },

        modal: {
          ondismiss: () => setLoading(false),
        },
      };

      const razorpay = new Razorpay(options);

      razorpay.on("payment.failed", (response) => {
        setLoading(false);
        alert(response.error?.description || "Payment failed");
      });

      razorpay.open();
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  if (!checkout) return null;

  const plan = checkout.selectedPlan || {};
  const price = Number(plan.final_price || plan.price || checkout.totalPrice || 0);
  const duration = plan.duration || plan.days || "";

  if (success) {
    return (
      <div className={styles.page}>
        <div className={styles.successCard}>
          <div className={styles.successIcon}>✓</div>
          <h1>Order Successfully Placed!</h1>
          <p>Your subscription has been successfully purchased.</p>

          <div className={styles.successSummary}>
            <div><span>Subscription</span><b>{success.subscription_name}</b></div>
            <div><span>Price</span><b>₹{success.price}</b></div>
            <div><span>Subscription Type</span><b>{success.subscription_type}</b></div>
            <div><span>Order ID</span><b>{success.order_id}</b></div>
          </div>

          <button className={styles.continueBtn} onClick={() => router.push("/")}>
            Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.checkoutCard}>
        <div className={styles.formSection}>
          <button className={styles.backBtn} onClick={() => router.back()}>
            ← Back
          </button>

          <h2>Checkout</h2>

          <div className={styles.formGrid}>
            <div className={styles.field}>
              <label>Full Name *</label>
              <input name="name" value={userData.name} onChange={handleChange} placeholder="Enter your name" maxLength={50} />
            </div>

            <div className={styles.field}>
              <label>Phone Number *</label>
              <input name="phone" value={userData.phone} onChange={handleChange} placeholder="10 digit phone number" maxLength={10} />
            </div>

            <div className={styles.field}>
              <label>Email Address *</label>
              <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Enter your email" maxLength={50} />
            </div>

            <div className={styles.field}>
              <label>Pincode *</label>
              <input name="pincode" value={userData.pincode} onChange={handleChange} placeholder="Enter pincode" maxLength={6} />
            </div>

            <div className={`${styles.field} ${styles.full}`}>
              <label>Delivery Address *</label>
              <textarea name="address" value={userData.address} onChange={handleChange} placeholder="Enter complete delivery address" rows={4} />
            </div>

            <div className={styles.field}>
              <label>City *</label>
              <select name="city" value={userData.city} onChange={handleChange}>
                <option value="">Select City</option>
                <option value="1">Bhopal</option>
                <option value="2">Indore</option>
              </select>
            </div>

            <div className={styles.field}>
              <label>Delivery Date *</label>
              <input
                type="date"
                name="deliveryDate"
                value={userData.deliveryDate}
                onChange={handleChange}
                min={new Date(Date.now() + 86400000).toISOString().split("T")[0]}
              />
            </div>
          </div>

          {error && <div className={styles.error}>{error}</div>}

       
        </div>

        <div className={styles.summarySection}>
          <h2>Order Summary</h2>

          <div className={styles.plan}>
            <div>
              <h3>{plan.name || "Subscription"}</h3>
              <p>{duration} Days Subscription</p>
            </div>
            <strong>₹{price}</strong>
          </div>

          <div className={styles.divider} />

          <div className={styles.priceRow}>
            <span>Price</span>
            <b>₹{price}</b>
          </div>

          <div className={styles.priceRow}>
            <span>Delivery</span>
            <b className={styles.free}>FREE</b>
          </div>

          <div className={styles.divider} />

          <div className={styles.totalRow}>
            <span>Total</span>
            <b>₹{price}</b>
          </div>
             <button className={styles.payButton} onClick={handlePayment} disabled={loading}>
            {loading ? "Processing..." : "Proceed to Payment"}
          </button>
        </div>
      </div>
    </div>
  );
}