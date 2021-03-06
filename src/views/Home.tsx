import HomeHero from "components/HomeHero/HomeHero";
import HomeUniversalTruths from "components/HomeUniversalTruths/HomeUniversalTruths";
import HomeMindsets from "components/HomeMindsets/HomeMindsets";
import Footer from "components/Footer/Footer";
// import data from "utilities/data";
import styles from "./Home.module.css";
import Layout from "layouts";

const Home = () => {
  return (
    <Layout>
      {(data) => {
        console.log(data);
        return (
          <div className={styles.home}>
            <HomeHero home={data.home} />
            <HomeUniversalTruths home={data.home} />
            <HomeMindsets
              activities={data.activities}
              mindsets={data.mindsets}
            />
            <Footer mindsets={data.mindsets} />
          </div>
        );
      }}
    </Layout>
  );
};

export default Home;
