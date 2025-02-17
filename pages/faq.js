import styles from "../styles/Home.module.scss";
import Layout from "../Components/Layout";
import Navbar from "../Components/Navbar";
import { QA } from "../data/qa";
import { useState, useRef } from "react";

const Faq = () => {
  const [scrolledFar, setScrolledFar] = useState(false);
  const tagText = useRef();

  return (
    <>
      <Layout>
        <Navbar />
        <section className={styles.faqContainer}>
          <div useRef={tagText} className={styles.faqTagBox}>
            <div className={styles.faqTagHeaderDiv}>
              <h2 className={styles.faqTagHeader}>
                Our Purpose is constantly providing top-notch customer service,
                <br></br>
                Keeping you safe on the road, <br></br> by providing you with
                the ideal tires for your vehicle.
              </h2>
            </div>
            <div className={styles.faqTagTextDiv}>
              <p className={styles.faqTagText}>
                Tire Shop is constantly on the look-out for solutions that meet
                the new mobility needs of consumers. <br></br> We offer a wide
                selection of tires with selective specialty variants.
              </p>
            </div>
            <div className={styles.faqTagPicDiv}>
              <div className={styles.faqTagPicInner}></div>
            </div>
            <div className={styles.faqTagFillDiv}></div>
          </div>
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
        </section>
      </Layout>
    </>
  );
};

export default Faq;
