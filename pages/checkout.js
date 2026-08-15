import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import MenuScroll from "@/components/MenuScroll";
import Bannerstatic from "@/components/Bannerstatic";
import Backgroundimage from "@/components/Backgroundimage";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Checkout from "../components/Checkout"

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

      <Checkout/>
      <Footer />
    </div>
  );
};

export default Menu;
