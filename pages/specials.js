import styles from "../styles/Home.module.scss";
import Layout from "../Components/Layout";
import Navbar from "../Components/Navbar";
import Image from "next/image";

const Specials = () => {
  const tire = "/tire-svg-1.png";
  const TireSeason = "/WhiteSUV-michel-grolet.jpg";
  const TireBrand = "/fpvmat-a-ferrariWheel.jpg";
  const TireSize = "/catAndCar-ryking.jpg";
  const TirePerf = "/driftPair-viktoriya.jpg";

  return (
    <>
      <Layout>
        <Navbar navTitle="home" />
        <div className={styles.specialsMainContainer}>
          <section className={styles.specialsVidContainer}>
            <video playsInline autoPlay muted preload="auto">
              <source
                src="tires-DanCristianP.mp4"
                type="video/mp4"
                poster={tire}
              />
              Your browser does not support the video tag.
            </video>

            <aside className={styles.specialsCouponContainer}>
              <div className={styles.specialsCouponBox}>
                <h1 className={styles.specialsHeadline}>
                  TireShop <br />
                  coupon <br />
                  4321
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
                <h3>
                  2-Fast 2-Many <br></br> 4 series - 20% off!
                </h3>
                <p>(While supplies last)</p>
              </div>
            </aside>
          </section>
          <div className={styles.specialsImgs}>
            <Image
              className={styles.specialsWheel}
              width={25}
              height={25}
              src={tire}
              alt={"Small graphic of a wheel. It turns when the page loads."}
              quality={10}
              priority={false}
            ></Image>
            <Image
              className={styles.specialsWheel}
              width={25}
              height={25}
              src={tire}
              alt={"wheel graphic 2"}
              quality={10}
              priority={false}
            ></Image>
            <Image
              className={styles.specialsWheel}
              width={25}
              height={25}
              src={tire}
              alt={"wheel graphic 3"}
              quality={10}
              priority={false}
            ></Image>
            <Image
              className={styles.specialsWheel}
              width={25}
              height={25}
              src={tire}
              alt={"wheel graphic 4"}
              quality={10}
              priority={false}
            ></Image>
          </div>
          <section className={styles.specialsSec2Cont}>
            <div className={styles.specialsSec2HeadlineBox}>
              <h2 className={styles.specialsSec2Headline}>Our tires</h2>
              <h3 className={styles.specialsSec2Subline}>
                <mark>for any season</mark>
              </h3>
            </div>
            <div className={styles.specialsSec2Grid}>
              <div
                className={`${styles.specialsSec2Grid_piece1} ${styles.specialsSec2GridEach}`}
              >
                <Image
                  className={styles.specialsSec2Img}
                  alt="A close up of a car wheel bearing the Ferrari brand."
                  src={TireBrand}
                  height="200"
                  width="300"
                ></Image>
                <h4>The brands you want</h4>
                <p>
                  Every brand with a great reputation carries with it time
                  testing its durability and design. We only carry veteran
                  brands that meet the highest specs. Verbosely specific
                  terrific wheels.
                </p>
              </div>
              <div
                className={`${styles.specialsSec2Grid_piece2} ${styles.specialsSec2GridEach}`}
              >
                <Image
                  className={styles.specialsSec2Img}
                  alt="A large CAT vehicle behind a sport sedan showing contrast in wheel size."
                  src={TireSize}
                  height="200"
                  width="300"
                ></Image>
                <h4>The sizes you need</h4>
                <p>
                  Every vehicle needs a fundamental fit. We have a large stock
                  of common sizes and a specialized inventory of sizes for the
                  industrial and agricultural sector.
                </p>
              </div>
              <div
                className={`${styles.specialsSec2Grid_piece3} ${styles.specialsSec2GridEach}`}
              >
                <Image
                  className={styles.specialsSec2Img}
                  alt="An SUV on a snowy mountain lookout."
                  src={TireSeason}
                  height="200"
                  width="300"
                ></Image>
                <h4>The fit for the season</h4>
                <p>
                  Choosing the right tire is crucial for more than just seasonal
                  performance. The right fit minimizes risks and decreases wear
                  and tear.
                </p>
              </div>
              <div
                className={`${styles.specialsSec2Grid_piece4} ${styles.specialsSec2GridEach}`}
              >
                <Image
                  className={styles.specialsSec2Img}
                  alt="2 Vehicles drift next to each other."
                  src={TirePerf}
                  height="200"
                  width="300"
                ></Image>
                <h4>The high performance materials</h4>
                <p>
                  Without the right materials pairing up your driving audacity,
                  your Cars sequel could crash into the box office. Purchase the
                  future.
                </p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Specials;
