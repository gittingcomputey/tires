import styles from "../styles/Home.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div>
        <h3>CLC TIRES</h3>
        <h4>
          <Link href="tel:8185218163">818-830-5189</Link> <br />
          15412 Nordhoff St <br />
          North Hills, CA 91343 <br /> <br />
          Mon-Sat: 11am - 6pm <br />
          Sunday: 11am - 5pm
        </h4>
      </div>
    </div>
  );
};

export default Footer;
