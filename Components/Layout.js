import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div className={styles.layoutDiv}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="icon" href="/tire-svg-1.png" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        ></link>
      </Head>

      <Navbar />

      <main className={styles.homeContainer}>{children}</main>

      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "CLC",
  description: "CLC Tires, Van Nuys CA",
  keywords: "tires, used-tires, wheels, rims, repair, alignment, balancing",
};

export default Layout;