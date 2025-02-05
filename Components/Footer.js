import styles from "../styles/Home.module.scss";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footerBox}>
        <h2 className={styles.footerHeadline}>TireShop</h2>
        <address className={styles.footerInfo}>
          <p>
            <Link href="tel:2484345508">Tel:800-123-1212</Link>{" "}
          </p>
          <p>123 Miscellaneous St</p>
          <p>Hollywood, CA 90028 </p>
          <p>
            Mon-Sat: 11am - 6pm <br />
            Sunday: 11am - 5pm
          </p>
        </address>
        <p className={styles.footerCopy}>
          <Link href="https://www.gettingcomputey.com">gettingComputey</Link>
          &#169;{year}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
