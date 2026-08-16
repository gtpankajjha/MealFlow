import React from "react";
import { useRouter } from "next/router";

export default function Subscription({
  subscriptionPlanData,
  selectedPlan,
  selectedPlanHandler,
  userPackageData,
}) {
  const router = useRouter();

  const renderItem = (item) => {
    const isSelected = item.id === selectedPlan?.id;

    return (
      <div className="bg-mealflow-white dark:bg-mealflow-darkCard border border-black/15 dark:border-mealflow-borderDark rounded-none ml-5 mr-[5px] p-[7px_10px] w-[227px] min-[769px]:w-[247px] min-[1181px]:w-[255px] flex flex-col justify-between cursor-pointer shrink-0">
        <div className="w-full mb-2 flex flex-row items-center">
          <button type="button" onClick={() => selectedPlanHandler(item, subscriptionPlanData)} className="border-0 bg-transparent w-[25px] h-[25px] p-0 outline-none shrink-0 cursor-pointer">
            <span className={`material-symbols-outlined block h-[25px] w-[25px] rounded-[3px] text-[22px] leading-[25px] ${isSelected ? "bg-[#80B53B] text-white" : "bg-[#EEEEEE] dark:bg-mealflow-borderDark text-[#AAAAAA] dark:text-mealflow-mutedDark"}`}>
              {isSelected ? "check" : "check_box_outline_blank"}
            </span>
          </button>

          <p className="text-mealflow-text dark:text-mealflow-white font-medium text-[24px] ml-[20%] mb-0">
            {item.duration} Days
          </p>
        </div>

        <div className="bg-[#80B53B33] h-px my-2 w-full" />

        <div className="w-full">
          <h3 className="text-mealflow-text dark:text-mealflow-white text-[24px] font-semibold mb-0">
            ₹{(item.final_price / parseInt(item.duration, 10)).toFixed(0)}
            <span className="text-[#3A3A3A] dark:text-mealflow-mutedDark text-[16px] font-normal"> / Per Meal</span>
          </h3>

          <div className="flex my-[5px]">
            <span className="text-mealflow-text dark:text-mealflow-white text-[14px]">
              ₹
              <span className="text-[#8F8F8F] dark:text-mealflow-mutedDark">
                {item.final_price.toFixed(0)} for {item.name}
              </span>
            </span>

            <p className="text-[#38B4A8] font-medium text-[16px] ml-[20%] mb-0">
              {item.discount}%off
            </p>
          </div>

          <div className="bg-[#80B53B33] h-px my-2 w-full" />
        </div>

        <div className="flex items-center justify-between p-[5px] mb-0">
          <img
            className="w-[22px] mr-[10px]"
            src="https://toneopeats.com/public/img/delivery.svg"
            alt="Free delivery"
          />
          <p className="text-mealflow-text dark:text-mealflow-white text-[15px] mb-0">
            Free delivery
          </p>
        </div>
      </div>
    );
  };

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
    <div className="bg-mealflow-white dark:bg-mealflow-dark py-[5px]">
      <div className="flex flex-row justify-between overflow-x-auto overflow-y-hidden py-[10px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {subscriptionPlanData?.map((item) => (
          <div key={item.id}>{renderItem(item)}</div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-5">
        <button type="button" className="h-[40px] min-[769px]:h-[50px] w-[30%] min-[769px]:w-[20%] border-0 bg-mealflow-orange text-white mt-[3%] mb-[3%] cursor-pointer outline-none hover:brightness-95 transition-all duration-200" onClick={handleProceed}>
          Proceed
        </button>
      </div>
    </div>
  );
}