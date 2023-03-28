import styles from "../styles/Home.module.scss";
import Layout from "../Components/Layout";
import Navbar from "../Components/Navbar";
import tire from "../public/tire-svg-1.png";
import Image from "next/image";

const specials = () => {
  return (
    <>
      <Layout>
        <Navbar navTitle="home" />
        <div className={styles.specialsHeadlineContainer}>
          <div className={styles.specialsHeadlineBox}>
            <h1 className={styles.specialsHeadline}>
              CLC Tires <br />
              --coupon--
            </h1>
            <Image width={50} height={50} src={tire} alt="wheel"></Image>
            <h2>4 tire Discount</h2>
            <h2>
              Show us this advertisement <br />
              on your mobile <br />
              to redeem coupon
              <br />
            </h2>
            <h3>These specific tires at this discount</h3>
            <p>(When in stock)</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default specials;
