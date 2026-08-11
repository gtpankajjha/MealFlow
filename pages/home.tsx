import React from "react";
import Navbar from "@/components/Navbar";
import MenuScroll from "@/components/MenuScroll";
import Backgroundimage from "@/components/Backgroundimage";
import Preference from "@/components/Preference";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

const home = () => {
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
      <MenuScroll />
      <Backgroundimage />
      <Preference />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default home;
