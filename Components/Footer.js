import styles from "../styles/Home.module.scss";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerBox}>
        <h3 className={styles.footerHeadline}>TireShop</h3>
        <h4 className={styles.footerInfo}>
          <Link href="tel:2484345508">800-123-1212</Link> <br />
          123 Miscellaneous St <br />
          Hollywood, CA 90028 <br /> <br />
          Mon-Sat: 11am - 6pm <br />
          Sunday: 11am - 5pm
        </h4>
        <p className={styles.footerCopy}>
          <Link href="https://www.gettingcomputey.com">gettingComputey</Link>{" "}
          &#169;{year}
        </p>
      </div>
    </div>
  );
};

export default Footer;
