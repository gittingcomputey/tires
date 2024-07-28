import styles from "../styles/Home.module.scss";
import Layout from "../Components/Layout";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import Link from "next/link";
import { useState, useEffect } from "react";

import { GiTireIron, GiCarWheel, GiPhone } from "react-icons/gi";
import { BiBandAid } from "react-icons/bi";

export default function Home() {
  // for making map larger on click
  const [handleFocusClick, setHandleFocusClick] = useState("false");

  // put map back to zoom out on page refresh
  useEffect(() => {
    setHandleFocusClick(false);
  }, []);

  return (
    <>
      <Layout>
        <Navbar navTitle={"specials"} />
        <div className={styles.homeContainer}>
          <div className={styles.homeHeroBox}>
            <div className={styles.homeHeadlineContainer}>
              <div className={styles.homeHeadlineBox}>
                <h1 className={styles.homeHeadline}>
                  <span className={styles.homeWheel}>Tire</span>
                  <span className={styles.homeWord}>Shop</span>
                </h1>
              </div>
            </div>

            <div className={styles.homeTeaserContainer}>
              <div className={styles.homeTeaserFloatTextDiv}>
                <p className={styles.homeInner}>
                  Tire Shop has been servicing The San Fernando valley since
                  2003. We offer a wide variety of new and used tires,
                  puncture-patching, and professional alignment.
                </p>
                <p>
                  {" "}
                  A family-operated business located in Hollywood, CA. Our
                  experienced team members are ready to help with all of your
                  tire needs. Friendly, fast, and reliable service.
                </p>
              </div>
              <div className={styles.homeTeaserBannerBox}>
                <Image
                  // toggle map size
                  onClick={(e) => setHandleFocusClick(!handleFocusClick)}
                  className={styles.homeTeaserImg}
                  src="/clc_map3.png"
                  width="967"
                  height="661"
                  alt="clc location map"
                  style={
                    handleFocusClick
                      ? { transform: "scale(1.8)", cursor: "zoom-out" }
                      : { border: "solid #3c57e2 .02rem", cursor: "zoom-in" }
                  }
                />
                <div className={styles.homeTeaserAddyBox}>
                  <p className={styles.homeTeaserData}>
                    15412 Nordhoff St <br></br> North Hills, CA 91343
                  </p>
                  <p className={styles.homeTeaserData}>
                    <span>
                      <GiPhone className={styles.homeTeaserPhoneIcon} />
                    </span>
                    <Link href="tel:8185218163">818-830-5189</Link>
                  </p>
                  <Link
                    target={"_blank"}
                    href="https://www.google.com/maps/place/15412+Nordhoff+St,+North+Hills,+CA+91343/@34.2352896,-118.4706217,17z/data=!3m1!4b1!4m6!3m5!1s0x80c290be0d480985:0x7d85e53fd54563d4!8m2!3d34.2352852!4d-118.468433!16s%2Fg%2F11csd3hbxs"
                  >
                    <button className={styles.homeAddyButton}>OPEN MAP</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* services section */}
          <div id="services" className={styles.homeServicesContainer}>
            <div className={styles.homeServicesBox1}>
              <div className={styles.homeServicesMid}>
                <div className={styles.homeServicesHeadlineBox}>
                  <h2 className={styles.homeServicesHeadline1}>Services</h2>
                </div>
                <div className={styles.homeServicesContentBox}>
                  <div className={styles.homeServicesULBox}>
                    <ul className={styles.homeServicesContentUL}>
                      <li>
                        <GiCarWheel
                          className={styles.homeServicesContentIcon}
                        />
                      </li>
                      <li className={styles.homeServicesContentLI}>
                        New tires
                      </li>
                      <li>
                        <GiCarWheel
                          className={styles.homeServicesContentIcon}
                        />
                      </li>
                      <li className={styles.homeServicesContentLI}>
                        Used tires
                      </li>
                      <li>
                        <BiBandAid className={styles.homeServicesContentIcon} />
                      </li>
                      <li className={styles.homeServicesContentLI}>
                        Puncture Patching
                      </li>
                      <li>
                        <GiTireIron
                          className={styles.homeServicesContentIcon}
                        />
                      </li>
                      <li className={styles.homeServicesContentLI}>
                        Alignment and Balancing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.homeServicesDivider}>
              <div className={styles.homeServicesBox}>
                <div className={styles.homeServicesHeadlineBox}>
                  <h2 className={styles.homeServicesHeadline2}>testimonials</h2>
                </div>
                <div className={styles.homeServicesContentBox}>
                  <p className={styles.homeServicesContentReview}>
                    I had a tire pop on the freeway and needed a replacement
                    quick! Thanks to Tire Shop, I was back on the road in a
                    quick minute! -JZ
                  </p>
                  <p className={styles.homeServicesContentReview}>
                    By chance on the corner of Nordhoff and Sepulveda I made a u
                    turn and I found an awesome place. -CDA
                  </p>
                  <p className={styles.homeServicesContentReview}>
                    Jane Do and the rest of the team never lag to help a girl
                    out in need when she pops a tire or has another nail in the
                    benz. -CU
                  </p>
                  <p className={styles.homeServicesContentReview}>
                    Really friendly and super helpful! -ARG
                  </p>
                </div>
                <div className={styles.homeServicesEsp}>
                  <div className={styles.homeServicesEspBox}>
                    <h3 className={styles.homeServicesEspText}>
                      <span className={styles.homeServicesEspTextCaps}>
                        Se habla español. <br />
                      </span>{" "}
                      Vendemos llantas, nuevas y usadas. <br />
                      Ubicados en North Hills, en el valle de San Fernando.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
