import React, { useEffect, useState } from "react";
import MenuItemDetails from "./MenuItemDetails";
import API_URL from "./useApi";

const IMAGE_URL = "https://toneop.s3.ap-south-1.amazonaws.com/";

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

        const response = await fetch(`${API_URL}/api/menu`);

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
<div className="w-full m-0 box-border bg-mealflow-white pt-[72px] dark:bg-mealflow-dark">
      {/* CATEGORY SECTION */}

      <div className="w-full m-0 p-0 box-border bg-mealflow-white dark:bg-mealflow-dark">
        <div className="w-full flex justify-center items-start gap-[15px] min-[421px]:gap-5 min-[768px]:gap-[22px] min-[1001px]:gap-8 p-[18px_10px_35px] min-[421px]:px-[15px] min-[768px]:p-[35px_30px_45px] bg-mealflow-white dark:bg-mealflow-dark box-border overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {data.map((item) => {
            const isActive = selectedCategory?.id === item.id;

            return (
              <button
                key={item.id}
                type="button"
                className={`w-[90px] min-w-[90px] h-[135px] min-[421px]:w-[100px] min-[421px]:min-w-[100px] min-[421px]:h-[135px] min-[768px]:w-[120px] min-[768px]:min-w-[120px] min-[768px]:h-[150px] p-0 border-0 outline-none bg-transparent flex flex-col items-center justify-start text-[13px] min-[421px]:text-[13px] min-[768px]:text-[15px] leading-[22px] cursor-pointer whitespace-normal shadow-none transition-colors duration-200 focus:outline-none ${isActive ? "text-[#80B53B] font-semibold" : "text-mealflow-muted dark:text-mealflow-mutedDark font-normal hover:text-[#80B53B] dark:hover:text-[#80B53B]"}`}
                onClick={() => handleCategoryClick(item)}
              >
                <div
                  className={`w-[68px] h-[68px] min-[421px]:w-[75px] min-[421px]:h-[75px] min-[768px]:w-[86px] min-[768px]:h-[86px] mb-2 min-[768px]:mb-3 flex items-center justify-center border rounded-full box-border transition-all duration-200 ${
                    isActive
                      ? "border-[#80B53B] bg-[#F8FBF5] dark:bg-mealflow-darkCard"
                      : "border-mealflow-border bg-mealflow-white dark:border-mealflow-borderDark dark:bg-mealflow-darkCard"
                  }`}
                >
                  {item.image ? (
                    <img
                      src={`${IMAGE_URL}${item.image}`}
                      alt={item.name || "Menu category"}
                      className="w-[60px] h-[60px] min-[421px]:w-[66px] min-[421px]:h-[66px] min-[768px]:w-[76px] min-[768px]:h-[76px] block object-contain rounded-full"
                    />
                  ) : (
                    <div className="w-[60px] h-[60px] min-[421px]:w-[66px] min-[421px]:h-[66px] min-[768px]:w-[76px] min-[768px]:h-[76px] flex items-center justify-center rounded-full bg-mealflow-light dark:bg-mealflow-navy text-[30px]">
                      🍽️
                    </div>
                  )}
                </div>

                <span className="w-[90px] min-[421px]:w-[100px] min-[768px]:w-[120px] block text-center text-inherit text-[12px] min-[421px]:text-[13px] min-[768px]:text-[15px] leading-[18px] min-[768px]:leading-[22px]">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* MENU CONTENT */}

      {loading && (
        <div className="w-full p-[40px_20px] text-center text-mealflow-muted dark:text-mealflow-mutedDark text-[16px] box-border bg-mealflow-white dark:bg-mealflow-dark">
          Loading menu...
        </div>
      )}

      {!loading && error && (
        <div className="w-full p-[40px_20px] text-center text-mealflow-muted dark:text-mealflow-mutedDark text-[16px] box-border bg-mealflow-white dark:bg-mealflow-dark">
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