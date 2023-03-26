import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";

const Navbar = (props) => {
  return (
    <>
      <div className={styles.naviWrapper}>
        <nav className={styles.naviContainer}>
          <Link
            className={styles.naviEach}
            href={props.navTitle === "specials" ? "/specials" : "/"}
          >
            {props.navTitle}
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
