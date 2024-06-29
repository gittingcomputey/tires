import styles from "../styles/Home.module.scss";
import Layout from "../Components/Layout";
import Navbar from "../Components/Navbar";
import Image from "next/image";

const Specials = () => {
  const tire = "/tire-svg-1.png";
  return (
    <>
      <Layout>
        <Navbar navTitle="home" />
        <div className={styles.specialsMainContainer}>
          <div className={styles.specialsVidContainer}>
            <video playsInline autoPlay muted preload="none">
              <source src="tires-DanCristianP.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className={styles.specialsCouponContainer}>
              <div className={styles.specialsHeadlineBox}>
                <h1 className={styles.specialsHeadline}>
                  CLC Tires <br />
                  coupon
                </h1>

                <Image
                  className={styles.specialsWheel1}
                  width={50}
                  height={50}
                  src={tire}
                  alt={"wheel"}
                  quality={50}
                ></Image>

                <h2>4 tire Discount</h2>
                <p>
                  Show us this advertisement <br />
                  to redeem coupon
                  <br />
                </p>
                <h3>These specific tires at this discount</h3>
                <p>(While supplies last)</p>
              </div>
            </div>
          </div>
          <div className={styles.specialsImgs}>
            <Image
              className={styles.specialsWheel}
              width={25}
              height={25}
              src={tire}
              alt={"wheel"}
              quality={10}
              priority={false}
            ></Image>
            <Image
              className={styles.specialsWheel}
              width={25}
              height={25}
              src={tire}
              alt={"wheel"}
              quality={10}
              priority={false}
            ></Image>
            <Image
              className={styles.specialsWheel}
              width={25}
              height={25}
              src={tire}
              alt={"wheel"}
              quality={10}
              priority={false}
            ></Image>
            <Image
              className={styles.specialsWheel}
              width={25}
              height={25}
              src={tire}
              alt={"wheel"}
              quality={10}
              priority={false}
            ></Image>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Specials;
