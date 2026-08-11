import React, { useState } from "react";
import Navbar from "@/components/Navbar";

import FoodDetails from "../components/FoodDetails";
import Footer from "@/components/Footer";

import { useRouter } from "next/router";

const Mealdetail = () => {
  const router = useRouter();
  //   const { item } = router.query;
  const item = router?.query?.item;
  const parsedItem = item ? JSON.parse(item) : null;
  //   const parsedItem = JSON.parse(router?.query.item);
  console.log("item value 86767868", parsedItem);
  return (
    <div
      style={{
        backgroundImage:
          "url('https://toneopeats.com/public/img/bgpatern.webp')",
        height: "auto",
        width: "auto",
        backgroundColor: "white",
      }}
    >
      <Navbar />

      <FoodDetails item={parsedItem} />
      <Footer />
    </div>
  );
};

export default Mealdetail;
