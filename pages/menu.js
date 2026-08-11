import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import MenuScroll from "@/components/MenuScroll";
import Bannerstatic from "@/components/Bannerstatic";
import Backgroundimage from "@/components/Backgroundimage";
import MenuScreen from "@/components/MenuScreen";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const Menu = () => {
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

      <MenuScreen />
      <Footer />
    </div>
  );
};

export default Menu;
