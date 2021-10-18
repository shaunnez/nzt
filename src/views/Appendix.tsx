import { Link } from "react-router-dom";
import Footer from "components/Footer/Footer";
import Layout from "layouts";
// import data from "utilities/data";
import styles from "./Appendix.module.css";

const Appendix = () => {
  return (
    <Layout>
      {(data) => {
        return (
          <div className={styles.appendix}>
            <header className={styles.header}>
              <Link to={`/`} className={styles.overviewLink}>
                <span className="gg-arrow-left" /> Overview
              </Link>
              <h1 className="title page-title">Appendix</h1>
            </header>

            <main className={styles.main}></main>

            <Footer mindsets={data.mindsets} />
          </div>
        );
      }}
    </Layout>
  );
};

export default Appendix;
