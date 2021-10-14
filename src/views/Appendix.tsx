import { Link } from "react-router-dom";
import Footer from "components/Footer/Footer";
import styles from "./Appendix.module.css";
import data from "utilities/data";

const Appendix = () => {
  return (
    <div className={styles.appendix}>
      <header className={styles.header}>
        <Link to={`${process.env.PUBLIC_URL}/`} className={"overview-link"}>
          <span className="overview-icon">{"<-"}</span> Overview
        </Link>
        <h1 className="title page-title">Appendix</h1>
      </header>

      <main className={styles.main}></main>

      <Footer mindsets={data.mindsets} />
    </div>
  );
};

export default Appendix;
