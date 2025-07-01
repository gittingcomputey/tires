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
                <div>
                  <span className={styles.homeTeaserBrands}>
                    Firestones Rallies Prellies Fauxlken
                  </span>
                </div>
                <div className={styles.homeTeaserImgBox}>
                  <div className={styles.homeTeaserTagImgText}>
                    <aside>
                      Great prices <br />
                      Quality tires
                    </aside>
                  </div>
                  <Image
                    className={styles.homeTeaserImg}
                    src="/TirePicByYvetteS.jpg"
                    width="550"
                    height="250"
                    alt="Closeup of new tire top part of new tire. You can see the threads are unworn and have deep grooves."
                  />
                </div>
                <div className={styles.homeTeaserAddyBox}>
                  <p className={styles.homeTeaserData}>
                    123 Miscellaneous St <br></br> Hollywood, CA 90028
                  </p>
                  <button className={styles.homeAddyButton}>
                    <Link
                      target={"_blank"}
                      href="https://www.google.com/maps/place/15412+Nordhoff+St,+North+Hills,+CA+91343/@34.2352896,-118.4706217,17z/data=!3m1!4b1!4m6!3m5!1s0x80c290be0d480985:0x7d85e53fd54563d4!8m2!3d34.2352852!4d-118.468433!16s%2Fg%2F11csd3hbxs"
                    >
                      Map
                    </Link>
                  </button>
                </div>
                <div>
                  <p className={styles.homeTeaserData}>
                    <span>
                      <GiPhone className={styles.homeTeaserPhoneIcon} />
                    </span>
                    <Link href="tel:8001231212">800-123-1212</Link>
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* services section */}
          <section id="services" className={styles.homeServicesSection}>
            <article className={styles.homeServicesCont}>
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
            </article>

            {/* testimonials */}
            <article className={styles.homeTestimonialsCont}>
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
                    u turn and I found an awesome place. -CL
                  </p>
                  <p className={styles.homeTestimonialsReview}>
                    Been coming to Tire Shop for years. I often find used tires
                    that have little wear and the price is always right. -ALF
                  </p>
                  <p className={styles.homeTestimonialsReview}>
                    Really friendly and super helpful. Good Deals. -ARG
                  </p>
                </div>
                <aside className={styles.homeTestimonialsEsp}>
                  <div className={styles.homeTestimonialsEspBox}>
                    <h3 lang="es" className={styles.homeTestimonialsEspText}>
                      <span className={styles.homeTestimonialsEspTextCaps}>
                        Se habla español. <br />
                      </span>
                      Vendemos llantas, nuevas y usadas. <br />
                      Ubicados en Hollywood.
                    </h3>
                  </div>
                </aside>
              </div>
            </article>
          </section>
          <section className={styles.homeTagCont}>
            <div className={styles.homeTagBox}>
              <div className={styles.homeTagTitleDiv}>
                <h3 className={styles.homeTagTitle}>From road to adventure</h3>
              </div>
              <div className={styles.homeTagSecDiv}>
                <p className={styles.homeTagSec1Text}>
                  The new <br></br> Q42 Tropheus RS
                </p>
              </div>
              <div className={styles.homeTagSecDiv}>
                <p className={styles.homeTagSec2Text}>
                  Try Q42 Tropheus RS, made for the longevity. Extreme control
                  and performance in every situation.
                </p>
                <small>Your official California Dealer</small>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
