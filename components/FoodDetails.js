import React from "react";

const FoodDetails = ({ item }) => {
  const Image_URL = "https://toneop.s3.ap-south-1.amazonaws.com/";
  const foodItem = item?.food_serving;

  return (
    <section className="w-full bg-mealflow-light px-4 py-10 sm:px-6 lg:px-8 lg:py-14 dark:bg-mealflow-dark">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-12">
          {/* FOOD IMAGE */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-[20px] border border-mealflow-border bg-mealflow-white p-3 shadow-mealflow dark:border-mealflow-borderDark dark:bg-mealflow-darkCard">
              <div className="relative overflow-hidden rounded-[15px] bg-[#F5F5F5] dark:bg-mealflow-navy">
                <img
                  src="https://toneopeats.com/public/img/veg.svg"
                  alt="Veg Icon"
                  className="absolute left-3 top-3 z-10 h-6 w-6 object-contain"
                />

                <img
                  src={`${Image_URL}${item?.image}`}
                  alt={item?.name || "Food Image"}
                  className="block h-[280px] w-full object-cover sm:h-[350px] lg:h-[400px]"
                />
              </div>
            </div>

            {/* SMALL IMAGE */}
            <div className="mt-4 flex items-center gap-3">
              <div className="h-[82px] w-[82px] overflow-hidden rounded-[10px] border-2 border-[#80B53B] bg-mealflow-white p-1 dark:bg-mealflow-darkCard">
                <img
                  src={`${Image_URL}${item?.image}`}
                  alt={item?.name || "Food Image"}
                  className="h-full w-full rounded-[7px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* FOOD DETAILS */}
          <div className="lg:col-span-3">
            <div className="rounded-[20px] border border-mealflow-border bg-mealflow-white p-6 shadow-mealflow sm:p-8 dark:border-mealflow-borderDark dark:bg-mealflow-darkCard">
              <h2 className="m-0 text-2xl font-bold leading-tight text-mealflow-text sm:text-3xl dark:text-mealflow-white">
                {item?.name}
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-mealflow-muted dark:text-mealflow-mutedDark">
                {item?.description}
              </p>

              {/* KCAL */}
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-mealflow-orangeLight px-4 py-2 dark:bg-mealflow-orange/10">
                <span className="text-sm font-semibold text-mealflow-orange">
                  Kcal:
                </span>

                <span className="text-sm font-bold text-mealflow-text dark:text-mealflow-white">
                  {item?.kcal}
                </span>
              </div>

              {/* MACROS */}
              <div className="mt-8">
                <h3 className="m-0 text-lg font-bold text-mealflow-text dark:text-mealflow-white">
                  Macros Information
                </h3>

                <div className="mt-4 w-full overflow-x-auto rounded-[12px] border border-mealflow-border dark:border-mealflow-borderDark">
                  <table className="w-full min-w-[650px] border-collapse text-left">
                    <thead>
                      <tr className="bg-mealflow-light dark:bg-mealflow-navy">
                        <th className="border-b border-mealflow-border px-4 py-3 text-sm font-bold text-mealflow-text dark:border-mealflow-borderDark dark:text-mealflow-white">
                          Served With
                        </th>

                        <th className="border-b border-mealflow-border px-4 py-3 text-sm font-bold text-mealflow-text dark:border-mealflow-borderDark dark:text-mealflow-white">
                          Protein
                        </th>

                        <th className="border-b border-mealflow-border px-4 py-3 text-sm font-bold text-mealflow-text dark:border-mealflow-borderDark dark:text-mealflow-white">
                          Fat
                        </th>

                        <th className="border-b border-mealflow-border px-4 py-3 text-sm font-bold text-mealflow-text dark:border-mealflow-borderDark dark:text-mealflow-white">
                          Fiber
                        </th>

                        <th className="border-b border-mealflow-border px-4 py-3 text-sm font-bold text-mealflow-text dark:border-mealflow-borderDark dark:text-mealflow-white">
                          Carbs
                        </th>

                        <th className="border-b border-mealflow-border px-4 py-3 text-sm font-bold text-mealflow-text dark:border-mealflow-borderDark dark:text-mealflow-white">
                          Calories
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {foodItem?.map((food, index) => (
                        <tr
                          key={index}
                          className="transition-colors hover:bg-mealflow-light dark:hover:bg-mealflow-navy"
                        >
                          <th className="border-b border-mealflow-border px-4 py-3 text-sm font-semibold text-mealflow-text dark:border-mealflow-borderDark dark:text-mealflow-white">
                            {food.name}
                          </th>

                          <td className="border-b border-mealflow-border px-4 py-3 text-sm text-mealflow-muted dark:border-mealflow-borderDark dark:text-mealflow-mutedDark">
                            {food.protein}
                          </td>

                          <td className="border-b border-mealflow-border px-4 py-3 text-sm text-mealflow-muted dark:border-mealflow-borderDark dark:text-mealflow-mutedDark">
                            {food.fat}
                          </td>

                          <td className="border-b border-mealflow-border px-4 py-3 text-sm text-mealflow-muted dark:border-mealflow-borderDark dark:text-mealflow-mutedDark">
                            {food.fibre}
                          </td>

                          <td className="border-b border-mealflow-border px-4 py-3 text-sm text-mealflow-muted dark:border-mealflow-borderDark dark:text-mealflow-mutedDark">
                            {food.carbs}
                          </td>

                          <td className="border-b border-mealflow-border px-4 py-3 text-sm font-semibold text-[#80B53B] dark:border-mealflow-borderDark">
                            {food.kcal}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDetails;