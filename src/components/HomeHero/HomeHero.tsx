import { Link } from "react-router-dom";
import pureNzImg from "assets/100-pure-new-zealand.png";
import LazyHero from "react-lazy-hero";
import styles from "./HomeHero.module.css";

const HomeHero = ({ home }: any) => {
  return (
    <div className={styles.homeHero}>
      <div style={{ height: "817px", overflow: "hidden" }}>
        <LazyHero
          imageSrc={home.heroImage.url}
          // imageSrc={
          //   require(`../../assets/mindset-images${home.heroImage?.url}`).default
          // }
          minHeight={"817px"}
          opacity={0.1}
          isCentered={false}
          // parallaxOffset={100}
          // transitionDuration={250}
        >
          <div className={styles.heroContent}>
            <div className={styles.purenz}>
              <img src={pureNzImg} alt="Pure NZ" />
            </div>
            <div className={styles.mindsets}>
              <h1>MINDSETS</h1>
            </div>
            <div className={styles.content}>
              <p>
                <b>{home.heroSmallCopy}</b>
              </p>
              <p>{home.heroCopy}</p>
              <br />
              <p>
                <Link to={`/appendix`}>Learn more about our mindsets</Link>
              </p>
            </div>
          </div>
        </LazyHero>
      </div>
    </div>
  );
};

export default HomeHero;
