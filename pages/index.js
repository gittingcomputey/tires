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
        <main className={styles.homeContainer}>
          <div className={styles.homeHeroBox}>
            <div className={styles.homeHeadlineContainer}>
              <div className={styles.homeHeadlineBox}>
                <h1 className={styles.homeHeadline}>
                  <span className={styles.homeWord}>Tire Shop</span>
                </h1>
              </div>
            </div>

            <section className={styles.homeTeaserContainer}>
              <div className={styles.homeTeaserFloatTextDiv}>
                <p className={styles.homeInner}>
                  Tire Shop has been servicing Los Angeles since 2003. We offer
                  a wide variety of new and used tires, puncture-patching, and
                  professional alignment.
                </p>
                <p>
                  {" "}
                  A family-operated business located in Hollywood, CA. Our
                  experienced team members are ready to help with all of your
                  tire needs. Friendly, fast, and reliable service.
                </p>
              </div>
              <div className={styles.homeTeaserBannerBox}>
                <div className={styles.homeTeaserImgBox}>
                  <div className={styles.homeTeaserImgText}>
                    Find the <br />
                    right tires <br />
                    for you
                  </div>
                  <div>
                    <span className={styles.homeTeaserBrands}>
                      Firestoned Rallies Prellies Fauxlken
                    </span>
                  </div>
                  <Image
                    className={styles.homeTeaserImg}
                    src="/TirePicByYvetteS.jpg"
                    width="600"
                    height="300"
                    alt="Closeup of new tire top part of new tire. You can see the threads are unworn and have deep grooves."
                  />
                </div>
                <div className={styles.homeTeaserAddyBox}>
                  <p className={styles.homeTeaserData}>
                    123 Miscellaneous St <br></br> Hollywood, CA 90028
                  </p>
                  <p className={styles.homeTeaserData}>
                    <span>
                      <GiPhone className={styles.homeTeaserPhoneIcon} />
                    </span>
                    <Link href="tel:8001231212">800-123-1212</Link>
                  </p>
                  <Link
                    target={"_blank"}
                    href="https://www.google.com/maps/place/15412+Nordhoff+St,+North+Hills,+CA+91343/@34.2352896,-118.4706217,17z/data=!3m1!4b1!4m6!3m5!1s0x80c290be0d480985:0x7d85e53fd54563d4!8m2!3d34.2352852!4d-118.468433!16s%2Fg%2F11csd3hbxs"
                  >
                    <button className={styles.homeAddyButton}>OPEN MAP</button>
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* services section */}
          <section id="services" className={styles.homeServicesSection}>
            <div className={styles.homeServicesCont}>
              <div className={styles.homeServicesMid}>
                <div className={styles.homeServicesHeadlineBox}>
                  <h2 className={styles.homeServicesHeadline1}>Services</h2>
                </div>
                <div className={styles.homeServicesBox}>
                  <div className={styles.homeServicesULBox}>
                    <ul className={styles.homeServicesUL}>
                      <li>
                        <GiCarWheel className={styles.homeServicesIcon} />
                      </li>
                      <li className={styles.homeServicesLI}>New tires</li>
                      <li>
                        <GiCarWheel className={styles.homeServicesIcon} />
                      </li>
                      <li className={styles.homeServicesLI}>Used tires</li>
                      <li>
                        <BiBandAid className={styles.homeServicesIcon} />
                      </li>
                      <li className={styles.homeServicesLI}>
                        Puncture Patching
                      </li>
                      <li>
                        <GiTireIron className={styles.homeServicesIcon} />
                      </li>
                      <li className={styles.homeServicesLI}>
                        Alignment and Balancing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* testimonials section */}
            <section className={styles.homeTestimonialsCont}>
              <div className={styles.homeTestimonialsBox}>
                <div className={styles.homeTestimonialsHeadlineBox}>
                  <h2 className={styles.homeTestimonialsHeadline}>
                    testimonials
                  </h2>
                </div>
                <div className={styles.homeTestimonialsBox}>
                  <p className={styles.homeTestimonialsReview}>
                    I had a tire pop on the freeway and needed a replacement
                    quick! Thanks to Tire Shop, I was back on the road in a
                    quick minute! -JZ
                  </p>
                  <p className={styles.homeTestimonialsReview}>
                    By chance on the corner of Miscellaneous and Avenue I made a
                    u turn and I found an awesome place. -CDA
                  </p>
                  <p className={styles.homeTestimonialsReview}>
                    Jane Do and the rest of the team never lag to help a girl
                    out in need when she pops a tire or has another nail in the
                    benz. -CU
                  </p>
                  <p className={styles.homeTestimonialsReview}>
                    Really friendly and super helpful! -ARG
                  </p>
                </div>
                <div className={styles.homeTestimonialsEsp}>
                  <div className={styles.homeTestimonialsEspBox}>
                    <h3 lang="es" className={styles.homeTestimonialsEspText}>
                      <span className={styles.homeTestimonialsEspTextCaps}>
                        Se habla español. <br />
                      </span>
                      Vendemos llantas, nuevas y usadas. <br />
                      Ubicados en Hollywood.
                    </h3>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </main>
      </Layout>
    </>
  );
}
