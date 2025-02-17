import styles from "../styles/Home.module.scss";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footerBox}>
        <div>
          <h2 className={styles.footerHeadline}>Tire Shop</h2>
        </div>
        <div>
          <address className={styles.footerInfo}>
            <p className={styles.footerAddy}>
              123 Miscellaneous St <br></br>
              Hollywood, CA 90028 <br></br>
              <span className={styles.footerInfoTel}>
                <Link href="tel:2484345508">Tel: 800-123-1212</Link>
              </span>
            </p>
            <p className={styles.footerHours}>
              Mon-Sat: 11am - 6pm <br />
              Sunday: 11am - 5pm
            </p>
          </address>
        </div>
        <div>
          <p className={styles.footerCopy}>
            <small>
              <Link href="https://www.gettingcomputey.com">
                gettingComputey
              </Link>
              &#169;{year}
            </small>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
