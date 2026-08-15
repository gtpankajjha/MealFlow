import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Contact from "./Contact";
import { useRouter } from "next/router";
import icon from "../components/assets/meal_icon.png"

type Props = {};

const Navbar = (props: Props) => {
  const [openNav, setOpenNav] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");
  const router = useRouter();

  useEffect(() => {
    const currentPath = router.pathname;
    if (currentPath === "/") {
      setSelectedLink("link1");
    } else if (currentPath === "/menu") {
      setSelectedLink("link2");
    }
  }, [router.pathname]);

  const handleLinkClick = (link: React.SetStateAction<string>) => {
    setSelectedLink(link);
  };

  const openMenu = () => {
    setOpenNav(true);
  };

  const closeMenu = () => {
    setOpenNav(false);
  };
  return (
    <header className={styles.headerSec}>
      <div className="prZero">
        <div className="topBar">
          <ul className={styles.topUl} style={{ listStyleType: "none" }}>
           <li className={styles.topliLeft}>
  <Link className={styles.logoText} href="/">
    <img src={icon.src} alt="Toneop Eats" />
  </Link>
</li>

            <li className={styles.TopliMid}>
              <Link href="/">
                <div
                  onClick={() => handleLinkClick("link1")}
                  style={{
                    color: selectedLink === "link1" ? "#80B53B " : "black",
                  }}
                >
                  Meal Subscription Plans
                </div>
              </Link>
              <Link href="/menu">
                <div
                  onClick={() => handleLinkClick("link2")}
                  style={{
                    color: selectedLink === "link2" ? "#80B53B " : "black",
                  }}
                >
                  Menu
                </div>
              </Link>
            </li>

            <li className={styles.topliRight}>
              <span
                onClick={() => openMenu()}
                className={styles.menuRight}
                style={{ width: openNav ? "100%" : "0%" }}
              >
                <FontAwesomeIcon icon={faBars} />
              </span>
            </li>
          </ul>
        </div>
        <ul
          id={styles.mySidenav}
          className={styles.sidenav}
          style={{
            width: openNav ? "100%" : "0%",
            listStyleType: "none",
            paddingLeft: "0px",
          }}
        >
          <li className={styles.closebtn} onClick={() => closeMenu()}>
            <img src="https://toneopeats.com/public/img/backicon.svg" />
          </li>

          <li>
            <a className={styles.menulogo}>
              <img src="https://toneopeats.com/public/img/toneopeats_white.png" />
            </a>
          </li>

          <li>
            <div className={styles.menuPlans}>
              <Link href="/menu">Menu</Link>
            </div>
          </li>

          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>

          <li>
            <div className={styles.menuSocial}>
              <a
                href="https://www.instagram.com/toneopofficial"
                target="_blank"
                className="fa fa-instagram"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={styles.socialicon}
                />
              </a>
              <a
                href="https://www.facebook.com/toneopfitness"
                target="_blank"
                className="fa fa-facebook"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className={styles.socialicon}
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCkGuRDxNbUIVZgxpv41YOlg"
                target="_blank"
                className="fa fa-youtube"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className={styles.socialicon}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/toneopfitness"
                target="_blank"
                className="fa fa-linkedin"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className={styles.socialicon}
                />
              </a>
              <a
                href="https://twitter.com/OfficialToneop"
                target="_blank"
                className="fa fa-twitter"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className={styles.socialicon}
                />
              </a>
            </div>
          </li>
          <li className={styles.imgLi}>
            <img src="https://toneopeats.com/public/img/menuplate.webp" />
          </li>
        </ul>
      </div>
      {openNav ? null : <Contact />}
    </header>
  );
};

export default Navbar;
