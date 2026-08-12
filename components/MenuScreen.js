import React, { useEffect, useState } from "react";
import styles from "../styles/MenuScreen.module.css";
import MenuItemDetails from "./MenuItemDetails";

const IMAGE_URL =
  "https://toneop.s3.ap-south-1.amazonaws.com/";

const MenuScreen = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleCategoryClick = (item) => {
    setSelectedCategory(item);
  };

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "http://localhost:5000/api/menu"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch menu");
        }

        const json = await response.json();

        const menuData = Array.isArray(json.data) ? json.data : [];

        setData(menuData);

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

  return (
    <div className={styles.menusec}>
      {/* ============================
          CATEGORY SECTION
      ============================ */}

      <div className={styles.menutabs_div}>
        <div className={styles.menutabs_div_scroll}>
          {data.map((item) => {
            const isActive =
              selectedCategory?.id === item.id;

            return (
              <button
                key={item.id}
                type="button"
                className={`${styles.categoryButton} ${
                  isActive
                    ? styles.categoryButtonActive
                    : ""
                }`}
                onClick={() => handleCategoryClick(item)}
              >
                <div className={styles.categoryImageWrapper}>
                  {item.image ? (
                    <img
                      src={`${IMAGE_URL}${item.image}`}
                      alt={item.name || "Menu category"}
                      className={styles.menutabs_img}
                    />
                  ) : (
                    <div
                      className={
                        styles.categoryImagePlaceholder
                      }
                    >
                      🍽️
                    </div>
                  )}
                </div>

                <span>{item.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ============================
          MENU CONTENT
      ============================ */}

      {loading && (
        <div className={styles.statusMessage}>
          Loading menu...
        </div>
      )}

      {!loading && error && (
        <div className={styles.statusMessage}>
          {error}
        </div>
      )}

      {!loading && !error && selectedCategory && (
        <MenuItemDetails
          item={selectedCategory}
          mealItem={selectedCategory.food || []}
        />
      )}
    </div>
  );
};

export default MenuScreen;