import { Link } from "react-router-dom";
import pureNzImg from "assets/100-pure-new-zealand.png";
import LazyHero from "react-lazy-hero";

import styles from "./HomeHero.module.css";
import data from "utilities/data";

const HomeHero = ({ home }: any) => {
  return (
    <div className={styles.homeHero}>
      <LazyHero
        imageSrc={home.heroImage.url}
        minHeight={"817px"}
        opacity={0.1}
        isCentered={false}
      >
        <div className={styles.heroContent}>
          <div className={styles.purenz}>
            <img src={pureNzImg} alt="Pure NZ" />
          </div>
          <div className={styles.mindsets}>
            <h1 className="title page-title">MINDSETS</h1>
          </div>
          <div className={styles.content}>
            <p>
              <b>{home.heroSmallCopy}</b>
            </p>
            <p>{home.heroCopy}</p>
            <br />
            <p>
              <Link to={`/appendix`}>Learn more</Link>
            </p>
          </div>
        </div>
      </LazyHero>
    </div>
  );
};

export default HomeHero;
