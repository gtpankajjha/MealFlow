import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const socialLinks = [
    { icon: faInstagram, label: "Instagram" },
    { icon: faFacebookF, label: "Facebook" },
    { icon: faTwitter, label: "Twitter" },
    { icon: faLinkedinIn, label: "LinkedIn" },
    { icon: faYoutube, label: "YouTube" },
  ];

  return (
    <footer className="border-t border-mealflow-border bg-mealflow-white text-mealflow-text transition-colors duration-300 dark:border-mealflow-borderDark dark:bg-mealflow-dark dark:text-mealflow-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-10 md:flex-row md:gap-8">
          <div className="max-w-sm">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Meal<span className="text-mealflow-orange">Flow</span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-mealflow-muted dark:text-mealflow-mutedDark">
              Healthy, delicious meals made simple. Choose your meals, select
              your plan, and let MealFlow take care of the rest.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3 md:max-w-3xl">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-mealflow-text dark:text-mealflow-white">
                Our Address
              </h3>

              <p className="mt-3 text-sm leading-6 text-mealflow-muted dark:text-mealflow-mutedDark">
                2nd Floor, Select Citywalk, Saket, New Delhi, Delhi 110017
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-mealflow-text dark:text-mealflow-white">
                Opening Hours
              </h3>

              <p className="mt-3 text-sm leading-6 text-mealflow-muted dark:text-mealflow-mutedDark">
                Mon - Sun
                <br />
                10:00 AM - 10:00 PM
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-mealflow-text dark:text-mealflow-white">
                Contact Us
              </h3>

              <p className="mt-3 text-sm leading-6 text-mealflow-muted dark:text-mealflow-mutedDark">
                hello@mealflow.com
                <br />
                +91 98765 *****
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-mealflow-border pt-8 dark:border-mealflow-borderDark">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  onClick={(e) => e.preventDefault()}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-mealflow-border text-mealflow-muted transition-all duration-200 hover:-translate-y-1 hover:border-mealflow-orange hover:bg-mealflow-orange hover:text-white dark:border-mealflow-borderDark dark:text-mealflow-mutedDark dark:hover:border-mealflow-orange dark:hover:bg-mealflow-orange dark:hover:text-white"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>

            <p className="text-center text-xs text-mealflow-muted dark:text-mealflow-mutedDark sm:text-right">
              © 2026 MealFlow. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;