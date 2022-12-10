import styles from "../styles/Home.module.scss";
import Layout from "../Components/Layout";

import { GiTireTracks } from "react-icons/gi";

export default function Home() {
  return (
    <>
      <Layout>
        <div className={styles.homeContainer}>
          <div className={styles.homeHeadlineContainer}>
            <div className={styles.homeHeadlineBox}>
              <h1 className={styles.homeHeadline}>
                <span className={styles.homeWheel}>C</span>
                <span className={styles.homeL}>L</span>
                <span className={styles.homeWheel}>C</span>
                <span className={styles.homeWord}> Tires </span>
              </h1>
            </div>
          </div>

          <div className={styles.homeTeaserContainer}>
            <div className={styles.homeTeaserBox}>
              <p className={styles.homeTeaserText}>
                CLC Tires has been servicing The San Fernando valley since DATE.
                We are family owned and operated, fast and reliable, and offer a
                wide variety of new and used tires. Our professional and
                experienced team members are ready to help you with all of your
                tire needs.
              </p>
              <p className={styles.homeTeaserData}>
                15412 Nordhoff St North Hills, CA 91343
              </p>
              <p className={styles.homeTeaserData}>818-830-5189</p>
            </div>
          </div>

          <div className={styles.homeServicesContainer}>
            <div className={styles.homeServicesBox}>
              <div className={styles.homeServicesHeadlineBox}>
                <GiTireTracks className={styles.homeTireTracks} />
                <h2 className={styles.homeServicesHeadline}>Services</h2>
                <GiTireTracks className={styles.homeTireTracks} />
              </div>
            </div>
            <div className={styles.homeServicesBox}>
              <div className={styles.homeServicesHeadlineBox}>
                <GiTireTracks className={styles.homeTireTracks} />
                <h2 className={styles.homeServicesHeadline}>Reviews</h2>
                <GiTireTracks className={styles.homeTireTracks} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
