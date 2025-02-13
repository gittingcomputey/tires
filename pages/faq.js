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
                <details key={index} className={styles.faqQABox}>
                  <summary className={styles.faqQuestionBox}>
                    <h2 className={styles.faqQuestion}>{qa.Q}</h2>
                  </summary>
                  <div className={styles.faqAnswerBox}>
                    <p className={styles.faqAnswer}>{qa.A}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Faq;
