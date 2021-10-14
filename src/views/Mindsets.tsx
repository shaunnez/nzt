import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Footer from "components/Footer/Footer";
import data from "utilities/data";

import styles from "./Mindsets.module.css";

const Mindsets = () => {
  // @ts-ignore
  const { id } = useParams();
  // @ts-ignore
  const friendly = (id || "").replace(/-/g, " ");
  const mindset = data.mindsets.find((mindset: any) => {
    return mindset.title.replace(/ /g, "-").toLowerCase() === id;
  });
  return (
    <div className={styles.appendix}>
      <header className={styles.header}>
        <Link to={`${process.env.PUBLIC_URL}/`} className={"overview-link"}>
          {"<-"} Overview
        </Link>
        <h1 className="title page-title">Mindsets - {friendly}</h1>
      </header>

      <main>
        <div className={styles.content}>
          <p>{mindset.description}</p>
        </div>
      </main>
      <Footer mindsets={data.mindsets} />
    </div>
  );
};

export default Mindsets;
