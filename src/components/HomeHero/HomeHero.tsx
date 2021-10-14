import { Link } from "react-router-dom";
import pureNzImg from "assets/100-pure-new-zealand.png";
import LazyHero from "react-lazy-hero";

import styles from "./HomeHero.module.css";

const HomeHero = () => {
  return (
    <div className={styles.homeHero}>
      <LazyHero
        imageSrc="https://i.ibb.co/bsLzVGt/home.jpg"
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
              <b>A guide to travellers</b>
            </p>
            <p>
              Kia ora and welcome to your complete guide to the mindsets of our
              target audiences in both international and domestic markets. It’s
              important that we know and understand our consumers well, so we
              can better anticipate and meet their needs and wants. You can use
              this guide to learn more about the travellers who are most likely
              to enjoy a holiday in New Zealand.
            </p>
            <br />
            <p>
              <Link to={`${process.env.PUBLIC_URL}/appendix`}>Learn more</Link>
            </p>
          </div>
        </div>
      </LazyHero>
    </div>
  );
};

export default HomeHero;
