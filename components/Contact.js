import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const phoneNumber = "70000000000";

  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=91${phoneNumber}`, "_blank");
  };

  const handleDialerClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fixed right-4 top-[88px] z-[90] flex items-center gap-2 sm:right-6 sm:top-[92px]">
      <button type="button" onClick={handleDialerClick} aria-label="Call MealFlow" className="flex h-11 w-11 items-center justify-center rounded-full bg-mealflow-navy text-white shadow-lg transition-all duration-200 hover:scale-110 hover:bg-mealflow-orange  dark:text-mealflow-navy dark:hover:bg-mealflow-orange dark:hover:text-white">
        <FontAwesomeIcon icon={faPhone} className="text-sm" />
      </button>

      <button type="button" onClick={handleWhatsAppClick} aria-label="WhatsApp MealFlow" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-200 hover:scale-110 hover:bg-[#20bd5a] dark:bg-[#25D366] dark:hover:bg-[#20bd5a]">
        <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
      </button>
    </div>
  );
};

export default Contact;