import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(null);
  const setNavType = () => {
    window.innerWidth > 600 ? setIsMobile(false) : setIsMobile(true);
  };
  useEffect(() => {
    setNavType();
  }, []);

  return (
    <>
      <div className={styles.naviWrapper}>
        {!isMobile ? (
          <nav className={styles.naviContainer}>
            {router.pathname !== "/" ? (
              <Link className={styles.naviEach} href="/home">
                Home
              </Link>
            ) : (
              ""
            )}

            <Link className={styles.naviEach} href="/services">
              Services
            </Link>
            <Link className={styles.naviEach} href="/contact">
              Contact
            </Link>
            <Link className={styles.naviEach} href="/services">
              Specials
            </Link>
          </nav>
        ) : (
          <nav className={styles.naviBurgerContainer}>hamburger</nav>
        )}
      </div>
    </>
  );
};

export default Navbar;
