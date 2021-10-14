import HomeHero from "components/HomeHero/HomeHero";
import HomeUniversalTruths from "components/HomeUniversalTruths/HomeUniversalTruths";
import HomeMindsets from "components/HomeMindsets/HomeMindsets";
import Footer from "components/Footer/Footer";

import styles from "./Home.module.css";

import data from "utilities/data";

const Home = () => {
  return (
    <div className={styles.home}>
      <HomeHero />
      <HomeUniversalTruths />
      <HomeMindsets mindsets={data.mindsets} />
      <Footer mindsets={data.mindsets} />
    </div>
  );
};

export default Home;
