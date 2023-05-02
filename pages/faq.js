import styles from "../styles/Home.module.scss";
import Layout from "../Components/Layout";
import Navbar from "../Components/Navbar";
import { QA } from "../data/qa";

const Faq = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <div className={styles.faqContainer}>
          <div className={styles.faqBox}>
            {/* headline */}
            <div className={styles.faqHeadlineBox}>
              <h1 className={styles.faqHeadline}>Frequently Asked Questions</h1>
            </div>

            {/* contents */}
            <div className={styles.faqContentBox}>
              {QA.map((qa, index) => (
                <div key={index} className={styles.faqQABox}>
                  <div className={styles.faqQuestionBox}>
                    <p className={styles.faqQuestion}>{qa.Q}</p>
                  </div>
                  <div className={styles.faqAnswerBox}>
                    <p className={styles.faqAnswer}>{qa.A}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Faq;
