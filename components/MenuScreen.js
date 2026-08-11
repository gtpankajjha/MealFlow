import React, { useState, useEffect } from "react";
import styles from "../styles/MenuScreen.module.css";
import MenuItemDetails from "./MenuItemDetails";
import useApi from "../components/useApi";

const dishes = [
  {
    id: "1",
    name: "Salad Bowls",
    imagePath: "https://toneopeats.com/public/img/supersalad.webp",
  },
  {
    id: "2",
    name: "Grills",
    imagePath: "https://toneopeats.com/public/img/ourgrills.webp",
  },
  {
    id: "3",
    name: "Smoothie Bowl",
    imagePath: "https://toneopeats.com/public/img/smoothiebowl.webp",
  },
  {
    id: "4",
    name: "Juice",
    imagePath: "https://toneopeats.com/public/img/healthyjuice.webp",
  },
  {
    id: "5",
    name: "Meal Bowl",
    imagePath: "https://toneopeats.com/public/img/Meal-Bowl.svg",
  },
];

const MenuScreen = () => {
  //   const [dishes, setDishes] = useState(null);
  const [activeId, setActiveId] = useState([]);
  const [selectedId, setSelectedId] = useState([]);
  const [data, setData] = useState(null);
  const [mealData, setMealData] = useState();

  const handleIdClick = (item) => {
    setSelectedId(item);
    setMealData(item.food);
  };

  useEffect(() => {
    fetch("https://dev.dashboard.toneop.net/toneopeats/toneopeats_get_menu")
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        setActiveId(json.data);
        setSelectedId(json.data);
        setMealData(json.data[0].food);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log("response of new api", data);

  const filteredDishes = data?.filter((item) => item.id === selectedId.id);
  //   const filteredDishes = value?.filter((item) => item.id === selectedId.id);

  return (
    <div
      className={styles.menusec}
      style={{
        width: "auto",
        backgroundColor: "none",
      }}
    >
      <div className={styles.menutabs_div}>
        <div className={styles.menutabs_div_scroll}>
          {data?.map((item, index) => {
            const isActive = item.id === selectedId.id;
            const buttonClassName = isActive ? styles.active : styles.button;
            const Image_URL = "https://toneop.s3.ap-south-1.amazonaws.com/";
            return (
              <li key={index} style={{ listStyle: "none", marginLeft: "15px" }}>
                <button
                  //   className={selectedId ? styles.button : styles.active}
                  className={styles.button}
                  data-toggle="tab"
                  onClick={() => handleIdClick(item)}
                  style={{
                    outline: "none",
                    border:
                      item.id === selectedId.id
                        ? "1px solid rgb(128,181,59)"
                        : "1px solid RGB(238,243,232)",
                  }}
                >
                  <img
                    src={`${Image_URL}${item.image}`}
                    //   alt={item.name}
                    className={styles.menutabs_img}
                  />
                  {item.name}
                </button>
              </li>
            );
          })}
        </div>
      </div>
      {selectedId && (
        <MenuItemDetails
          item={selectedId}
          filteredDishes={filteredDishes}
          mealItem={mealData}
        />
      )}
    </div>
  );
};

export default MenuScreen;

//import React, { useState, useEffect } from "react";
// import styles from "../styles/MenuScreen.module.css";
// import MenuItemDetails from "./MenuItemDetails";
// import useApi from "../components/useApi";

// const dishes = [
//   {
//     id: 1,
//     name: "Salad Bowls",
//     imagePath: "https://toneopeats.com/public/img/supersalad.webp",
//   },
//   {
//     id: 2,
//     name: "Grills",
//     imagePath: "https://toneopeats.com/public/img/ourgrills.webp",
//   },
//   {
//     id: 3,
//     name: "Smoothie Bowl",
//     imagePath: "https://toneopeats.com/public/img/smoothiebowl.webp",
//   },
//   {
//     id: 4,
//     name: "Juice",
//     imagePath: "https://toneopeats.com/public/img/healthyjuice.webp",
//   },
//   {
//     id: 5,
//     name: "Meal Bowl",
//     imagePath: "https://toneopeats.com/public/img/Meal-Bowl.svg",
//   },
// ];

// const MenuScreen = () => {
//   //   const [dishes, setDishes] = useState(null);
//   const [selectedId, setSelectedId] = useState(dishes[0]);
//   const [data, setData] = useState(null);
//   const [mealData, setMealData] = useState();

//   const handleIdClick = (item) => {
//     setSelectedId(item);
//     setMealData(item.food);
//   };

//   const {
//     data: value,
//     loading,
//     error,
//   } = useApi("https://dev.dashboard.toneop.net/toneopeats/toneopeats_get_menu");

//   useEffect(() => {
//     fetch("https://dev.dashboard.toneop.net/toneopeats/toneopeats_get_menu")
//       .then((response) => response.json())
//       .then((json) => {
//         setData(json.data);
//         setSelectedId(json.data[0]);
//         setMealData(json.data[0].food);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   //   console.log("response of new api", mealData);

//   const filteredDishes = dishes?.filter((item) => item.id === selectedId.id);
//   //   const filteredDishes = value?.filter((item) => item.id === selectedId.id);

//   return (
//     <div
//       className={styles.menusec}
//       style={{
//         width: "auto",
//         backgroundColor: "none",
//       }}
//     >
//       <div className={styles.menutabs_div}>
//         <div className={styles.menutabs_div_scroll}>
//           {dishes?.map((item, index) => (
//             <div key={index} className={styles.menutabs_div_box}>
//               <button
//                 className={selectedId ? styles.button : styles.active}
//                 data-toggle="tab"
//                 onClick={() => handleIdClick(item)}
//                 style={{ outline: "none" }}
//               >
//                 <img
//                   src={item.imagePath}
//                   //   alt={item.name}
//                   className={styles.menutabs_img}
//                 />
//                 {item.name}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//       {selectedId && (
//         <MenuItemDetails
//           item={selectedId}
//           filteredDishes={filteredDishes}
//           mealItem={mealData}
//         />
//       )}
//     </div>
//   );
// };

// export default MenuScreen;
