import styles from "../styles/Home.module.scss";
import Layout from "../Components/Layout";

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
              <p>
                CLC Tires has been servicing The San Fernando valley since DATE.
                We are family owned and operated, fast and reliable, and offer a
                wide variety of new and used tires. Our professional and
                experienced team members are ready to help you with all of your
                tire needs.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
