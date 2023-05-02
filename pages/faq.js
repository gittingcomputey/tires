import styles from "../styles/Home.module.scss";
import Layout from "../Components/Layout";
import Navbar from "../Components/Navbar";

const faq = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <div className={styles.faqContainer}>
          <div className={styles.faqBox}>
            <div className={styles.faqHeadlineBox}>
              <h1 className={styles.faqHeadline}>Frequently Asked Questions</h1>
            </div>

            {/* contents */}
            <div className={styles.faqContentBox}>
              <div className={styles.faqQABox}>
                <div className={styles.faqQuestionBox}>
                  How do I know if my tires need to be replaced?
                </div>
                <div className={styles.faqAnswerBox}>
                  You should visually inspect your tires regularly for signs of
                  wear and tear, such as cracks, bulges, or uneven tread wear.
                  Additionally, if you notice any vibrations, thumping sounds,
                  or a loss of handling and traction, these could also indicate
                  that your tires need to be replaced.
                </div>
              </div>

              <div className={styles.faqQABox}>
                <div className={styles.faqQuestionBox}>
                  Can I repair a punctured tire or should I replace it?
                </div>
                <div className={styles.faqAnswerBox}>
                  It depends on the severity and location of the puncture. If
                  the puncture is in the tread area and not too large, it can
                  typically be repaired. However, if the puncture is in the
                  sidewall or the tire has been driven on while flat, the tire
                  should be replaced.
                </div>
              </div>

              <div className={styles.faqQABox}>
                <div className={styles.faqQuestionBox}>
                  How often should I rotate my tires?
                </div>
                <div className={styles.faqAnswerBox}>
                  It is recommended that you rotate your tires every 5,000 to
                  7,500 miles. This helps ensure even wear and prolongs the life
                  of your tires.
                </div>
              </div>

              <div className={styles.faqQABox}>
                <div className={styles.faqQuestionBox}>
                  What is the proper air pressure for my tires?
                </div>
                <div className={styles.faqAnswerBox}>
                  The proper air pressure for your tires can usually be found in
                  your vehicle&apos;s owner&apos;s manual or on a sticker
                  located on the driver&apos;s side door jamb. It&apos;s
                  important to check your tire pressure regularly, as
                  underinflated or overinflated tires can cause handling and
                  safety issues.
                </div>
              </div>

              <div className={styles.faqQABox}>
                <div className={styles.faqQuestionBox}>
                  How long do tires typically last?
                </div>
                <div className={styles.faqAnswerBox}>
                  The lifespan of a tire can vary depending on a number of
                  factors, such as driving conditions, frequency of use, and
                  maintenance. In general, most tires can last between 25,000
                  and 50,000 miles.
                </div>
              </div>

              <div className={styles.faqQABox}>
                <div className={styles.faqQuestionBox}>
                  What is considered normal wear and tear for tires?
                </div>
                <div className={styles.faqAnswerBox}>
                  Normal wear and tear for tires include gradual tread wear and
                  minor cracking on the sidewalls. However, if you notice any
                  significant damage, such as deep cuts, punctures, or bulges,
                  this should be addressed immediately.
                </div>
              </div>

              <div className={styles.faqQABox}>
                <div className={styles.faqQuestionBox}>
                  Should I replace all four tires at once?
                </div>
                <div className={styles.faqAnswerBox}>
                  It&apos;s recommended that you replace all four tires at once,
                  as mixing new and worn tires can cause handling and safety
                  issues. However, if your tires are relatively new and only one
                  tire needs to be replaced due to damage, it&apos;s usually
                  acceptable to replace just the damaged tire.
                </div>
              </div>
              <div className={styles.faqQABox}>
                <div className={styles.faqQuestionBox}>
                  How can I make my tires last longer?
                </div>
                <div className={styles.faqAnswerBox}>
                  Regular maintenance, such as proper inflation, tire rotations,
                  and wheel alignments, can help prolong the life of your tires.
                  Additionally, avoiding harsh driving conditions, such as
                  excessive speeds, hard braking, and rough terrain, can also
                  help extend the life of your tires.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default faq;
