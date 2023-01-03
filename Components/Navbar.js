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
        <nav className={styles.naviContainer}>
          <Link className={styles.naviEach} href="/services">
            Services
          </Link>
          <Link className={styles.naviEach} href="/services">
            Specials
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
