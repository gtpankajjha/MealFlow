import React, { useEffect, useState } from "react";
import styles from "../styles/MenuScreen.module.css";
import MenuItemDetails from "./MenuItemDetails";

const API_URL = "http://localhost:5000/api/menu";
const IMAGE_URL = "http://localhost:5000/images";

const getImageUrl = (image) => {
  if (!image) return "";

  // Already a complete URL
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  // Already starts with /images
  if (image.startsWith("/images/")) {
    return `http://localhost:5000${image}`;
  }

  return `${IMAGE_URL}/${image.replace(/^\/+/, "")}`;
};

const MenuScreen = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch menu");
        }

        const json = await response.json();

        const menuData = json?.data || [];

        setData(menuData);

        // Select first category automatically
        if (menuData.length > 0) {
          setSelectedCategory(menuData[0]);
        }
      } catch (err) {
        console.error("Menu API error:", err);
        setError("Unable to load menu. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  const handleCategoryClick = (item) => {
    setSelectedCategory(item);
  };

  if (loading) {
    return (
      <div className={styles.menuLoading}>
        <p>Loading menu...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.menuError}>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className={styles.menusec}>
      {/* =========================
          PAGE HEADER
      ========================= */}
      <div className={styles.menuHeader}>
        <h1>Our Menu</h1>

        <p>
          Our Meals Contain Only 5 gm Olive Oil
          <br />
          &amp; Natural Sweeteners.
        </p>
      </div>

      {/* =========================
          CATEGORY NAVIGATION
      ========================= */}
      <div className={styles.menutabs_div}>
  <div className={styles.menutabs_div_scroll}>
    {data?.map((item) => {
      const isActive = selectedCategory?.id === item.id;

      const Image_URL =
        "https://toneop.s3.ap-south-1.amazonaws.com/";

      return (
        <li
          key={item.id}
          style={{
            listStyle: "none",
            margin: 0,
            flexShrink: 0,
          }}
        >
          <button
            type="button"
            className={styles.button}
            onClick={() => handleCategoryClick(item)}
            style={{
              outline: "none",
              border: isActive
                ? "1px solid rgb(128,181,59)"
                : "1px solid rgb(238,243,232)",
            }}
          >
            <img
              src={`${Image_URL}${item.image}`}
              alt={item.name}
              className={styles.menutabs_img}
            />

            <span>{item.name}</span>
          </button>
        </li>
      );
    })}
  </div>
</div>
      {/* =========================
          SELECTED CATEGORY
      ========================= */}
      {selectedCategory && (
        <MenuItemDetails
          item={selectedCategory}
          mealItem={selectedCategory.food || []}
        />
      )}
    </section>
  );
};

export default MenuScreen;