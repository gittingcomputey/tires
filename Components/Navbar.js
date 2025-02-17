import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";

const Navbar = (props) => {
  const router = useRouter();

  return (
    <>
      <div className={styles.naviWrapper}>
        <nav className={styles.naviContainer}>
          {router.pathname === "/" ? (
            ""
          ) : (
            <Link
              className={`${styles.naviEach} ${styles.naviHome}`}
              href={"/"}
            >
              Home
            </Link>
          )}

          <Link className={styles.naviEach} href={"/specials"}>
            Specials
          </Link>

          <Link className={styles.naviEach} href={"/faq"}>
            FAQ
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
