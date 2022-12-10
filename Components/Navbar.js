import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(null);
  const setNavType = () => {
    window.innerWidth > 600 ? setIsMobile(false) : setIsMobile(true);
  };
  useEffect(() => {
    setNavType();
  }, []);

  return (
    <>
      {!isMobile ? (
        <nav className={styles.naviContainer}>
          <Link className={styles.naviEach} href="/home">
            Home
          </Link>
          <Link className={styles.naviEach} href="/contact">
            Contact
          </Link>
          <Link className={styles.naviEach} href="/services">
            Services
          </Link>
        </nav>
      ) : (
        <nav className={styles.naviBurgerContainer}>hamburger</nav>
      )}
    </>
  );
};

export default Navbar;
