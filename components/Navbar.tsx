import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Contact from "./Contact";
import icon from "../components/assets/meal_icon.png";

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();
  const [openNav, setOpenNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("mealflow-theme");
    const isDark = savedTheme === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("mealflow-theme", newMode ? "dark" : "light");
  };

  const closeMenu = () => setOpenNav(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] border-b border-slate-200 bg-white/90 backdrop-blur-xl shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          <Link href="/" onClick={closeMenu} className="group flex items-center gap-3 no-underline">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 shadow-sm transition-transform duration-300 group-hover:scale-105 dark:bg-slate-800">
              <img src={icon.src} alt="MealFlow" className="h-9 w-9 object-contain" />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Meal<span className="text-orange-500">Flow</span>
              </div>
              <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Healthy meals</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = router.pathname === item.path;
              return (
                <Link key={item.path} href={item.path} className={`rounded-lg px-4 py-2 text-sm font-semibold no-underline transition-all duration-200 ${isActive ? "bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"}`}>
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button type="button" onClick={toggleDarkMode} aria-label="Toggle dark mode" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:scale-105 hover:border-orange-400 hover:text-orange-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-orange-500 dark:hover:text-orange-400">
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button>

            <button type="button" onClick={() => setOpenNav(true)} aria-label="Open navigation menu" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white shadow-md transition-all hover:scale-105 hover:bg-orange-500 dark:bg-white dark:text-slate-900 dark:hover:bg-orange-500 dark:hover:text-white md:hidden">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-[200] md:hidden ${openNav ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} transition-opacity duration-300`}>
        <div onClick={closeMenu} className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" />

        <div className={`absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white p-6 shadow-2xl transition-transform duration-300 dark:bg-slate-950 ${openNav ? "translate-x-0" : "translate-x-full"}`}>

          <div className="flex items-center justify-between">
            <Link href="/" onClick={closeMenu} className="flex items-center gap-3 no-underline">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
                <img src={icon.src} alt="MealFlow" className="h-9 w-9 object-contain" />
              </div>
              <div className="text-xl font-extrabold text-slate-900 dark:text-white">
                Meal<span className="text-orange-500">Flow</span>
              </div>
            </Link>

            <button type="button" onClick={closeMenu} aria-label="Close navigation menu" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-orange-500 hover:text-white dark:bg-slate-800 dark:text-slate-200">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <div className="my-7 h-px bg-slate-200 dark:bg-slate-800" />

          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = router.pathname === item.path;
              return (
                <Link key={item.path} href={item.path} onClick={closeMenu} className={`rounded-xl px-4 py-3.5 text-base font-semibold no-underline transition-all ${isActive ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20" : "text-slate-700 hover:bg-slate-100 hover:text-orange-500 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-orange-400"}`}>
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-5 text-white dark:from-slate-800 dark:to-slate-900">
            <p className="mb-1 text-sm font-medium text-slate-300">Eat better. Live better.</p>
            <h3 className="text-lg font-bold">Healthy meals, made simple.</h3>
            <Link href="/menu" onClick={closeMenu} className="mt-4 inline-flex rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-bold text-white no-underline transition hover:bg-orange-600">
              Explore Menu
            </Link>
          </div>

          <div className="mt-auto pt-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">Follow MealFlow</p>

            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white dark:border-slate-700 dark:text-slate-400">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white dark:border-slate-700 dark:text-slate-400">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" aria-label="Twitter" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white dark:border-slate-700 dark:text-slate-400">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white dark:border-slate-700 dark:text-slate-400">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white dark:border-slate-700 dark:text-slate-400">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>

            <p className="mt-6 text-xs text-slate-400">© 2026 MealFlow. All rights reserved.</p>
          </div>
        </div>
      </div>

      {!openNav && <Contact />}
    </>
  );
};

export default Navbar;