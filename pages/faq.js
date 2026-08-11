import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Faq from "../components/Faq";

const faq = () => {
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
      <Faq />
      <Footer />
    </div>
  );
};

export default faq;
