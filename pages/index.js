import styles from "../styles/Home.module.scss";
import Layout from "../Components/Layout";
import Image from "next/image";
import Navbar from "../Components/Navbar";

import { GiTireTracks, GiTinker, GiTireIron, GiCarWheel } from "react-icons/gi";
import { BiBandAid } from "react-icons/bi";

export default function Home() {
  return (
    <>
      <Layout>
        <Navbar navTitle={"specials"} />
        <div className={styles.homeContainer}>
          <div className={styles.homeHeadlineContainer}>
            <div className={styles.homeHeadlineBox}>
              <h1 className={styles.homeHeadline}>
                <span className={styles.homeWheel}>CLC</span>
                <span className={styles.homeWord}> Tires </span>
              </h1>
            </div>
          </div>

          <div className={styles.homeTeaserContainer}>
            <div className={styles.homeTeaserFloatText}>
              <p className={styles.homeInner}>
                CLC Tires has been servicing The San Fernando valley since DATE.
                We offer a wide variety of new and used tires,
                puncture-patching, and professional alignment services.
                Friendly, fast, and reliable service.
              </p>
              <p>
                {" "}
                We are a family-operated business located in North Hills, CA.
                Our experienced team members are ready to help with all of your
                tire needs.
              </p>
            </div>
            <div className={styles.homeTeaserBox}>
              <Image
                className={styles.homeTeaserImg}
                src="/clc_map.png"
                width="260"
                height="260"
                alt="clc location map"
              />
              <div className={styles.homeTeaserAddyBox}>
                <p className={styles.homeTeaserData}>
                  15412 Nordhoff St <br></br> North Hills, CA 91343
                </p>
                <p className={styles.homeTeaserData}>
                  PHONE: <br></br>818-830-5189
                </p>
              </div>
            </div>
          </div>

          {/* services section */}
          <div id="services" className={styles.homeServicesContainer}>
            <div className={styles.homeServicesBox}>
              <div className={styles.homeServicesHeadlineBox}>
                <h2 className={styles.homeServicesHeadline}>Services</h2>
              </div>
              <div className={styles.homeServicesContentBox}>
                <ul className={styles.homeServicesContentUL}>
                  <li>
                    <GiCarWheel className={styles.homeServicesContentIcon} />
                  </li>
                  <li className={styles.homeServicesContentLI}>New tires</li>
                  <li>
                    <GiCarWheel className={styles.homeServicesContentIcon} />
                  </li>
                  <li className={styles.homeServicesContentLI}>Used tires</li>
                  <li>
                    <BiBandAid className={styles.homeServicesContentIcon} />
                  </li>
                  <li className={styles.homeServicesContentLI}>
                    Puncture Patching
                  </li>
                  <li>
                    <GiTireIron className={styles.homeServicesContentIcon} />
                  </li>
                  <li className={styles.homeServicesContentLI}>
                    Alignment and Balancing
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.homeServicesBox}>
              <div className={styles.homeServicesHeadlineBox}>
                <h2 className={styles.homeServicesHeadline}>Appreciation</h2>
              </div>
              <div className={styles.homeServicesContentBox}>
                <p className={styles.homeServicesContentReview}>
                  I had a tire pop on the freeway and needed a replacement
                  quick! I knew CLC was the place to go to for a used tire that
                  could get me back on the road at a reasonable price. I was
                  back on the road in a quick minute! -JZ
                </p>
                <p className={styles.homeServicesContentReview}>
                  Sergio and the rest of the team never lag to help a girl out
                  in need when she pops a tire or has another nail in the benz.
                  -CU
                </p>
                <p className={styles.homeServicesContentReview}>
                  Really friendly and super helpful when I said I didn't know
                  how to buy brake pads. -ARG
                </p>
                <p className={styles.homeServicesContentReview}>
                  By chance on the corner of Nordhoff and Sepulveda I made a u
                  turn and I found an awesome place. -CDA
                </p>
              </div>
              <div className={styles.homeServicesEsp}>
                <div className={styles.homeServicesEspBox}>
                  <h3 className={styles.homeServicesEspText}>
                    <span className={styles.homeServicesEspTextCaps}>
                      Se habla español.
                    </span>{" "}
                    Vendemos llantas, nuevas y usadas. <br />
                    Ubicados en North Hills, en el valle de San Fernando.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
