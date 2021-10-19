import { Link } from "react-router-dom";
import Footer from "components/Footer/Footer";
import Layout from "layouts";

import { ReactComponent as DomesticIcon } from "assets/domestic.svg";
import { ReactComponent as InternationalIcon } from "assets/international.svg";
import DomGraph1 from "assets/Dom Graph 1.jpg";
import DomGraph2 from "assets/Dom Graph 2.jpg";
import DomGraph3 from "assets/Dom Graph 3.jpg";
import IntlGraph1 from "assets/Intl Graph 1.jpg";
import IntlGraph2 from "assets/Intl Graph 2.jpg";
import IntlGraph3 from "assets/Intl Graph 3.jpg";
// import data from "utilities/data";
import styles from "./Appendix.module.css";
import { useState } from "react";

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

            <main className={styles.main}>
              <div className={styles.overview}>
                <div
                  dangerouslySetInnerHTML={{ __html: data.appendix.body.html }}
                />
                <p>
                  <small>{data.appendix.smallText}</small>
                </p>
              </div>

              <div className={styles.content}>
                <DomesticInternationalWidget />
              </div>
            </main>

            <Footer mindsets={data.mindsets} />
          </div>
        );
      }}
    </Layout>
  );
};

export const DomesticInternationalWidget = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedDomesticFilter, setSelectedDomesticFilter] = useState(0);
  const [selectedInternationalFilter, setSelectedInternationalFilter] =
    useState(0);

  const domesticGraphic =
    selectedDomesticFilter === 0
      ? DomGraph1
      : selectedDomesticFilter === 1
      ? DomGraph2
      : DomGraph3;
  const internationalGraphic =
    selectedInternationalFilter === 0
      ? IntlGraph1
      : selectedInternationalFilter === 1
      ? IntlGraph2
      : IntlGraph3;

  const domesticExtraContent =
    selectedDomesticFilter === 0
      ? "China tends to have the most unique distribution compared to other markets. Mindset 1 is also largely represented in Japan."
      : selectedDomesticFilter === 1
      ? `SINKS: Under age 60, Single, Divorced, or Widowed, No Children in Household<br/>
      DINKS: Under age 60, Engaged, Married, or Living with Partner, 2+ people in Household, No Children in Household<br/>
      Households With Children: Under age 60, Children in Household<br/>
      Empty Nesters: Ages 55+, No Children in Household`
      : "";
  const internationalExtraContent =
    selectedInternationalFilter === 0
      ? `SINKS: Under age 60, Single, Divorced, or Widowed, No Children in Household<br/>
  DINKS: Under age 60, Engaged, Married, or Living with Partner, 2+ people in Household, No Children in Household<br/>
  Households With Children: Under age 60, Children in Household<br/>
  Empty Nesters: Ages 55+, No Children in Household`
      : "";
  return (
    <div className={styles.domesticInternational}>
      <div className={styles.domesticInternationalHeader}>
        <button
          onClick={() => setSelectedTab(0)}
          className={selectedTab === 0 ? styles.active : null}
        >
          <InternationalIcon /> International
        </button>
        <button
          onClick={() => setSelectedTab(1)}
          className={selectedTab === 1 ? styles.active : null}
        >
          <DomesticIcon /> Domestic
        </button>
      </div>
      {selectedTab === 1 ? (
        <div className={styles.domesticInternationalContent}>
          <div className={styles.domesticInternationalFilters}>
            <button
              onClick={() => setSelectedDomesticFilter(0)}
              className={selectedDomesticFilter === 0 ? styles.active : null}
            >
              Mindset Distribution by Market
            </button>
            <button
              onClick={() => setSelectedDomesticFilter(1)}
              className={selectedDomesticFilter === 1 ? styles.active : null}
            >
              Mindset Distribution by Cohorts
            </button>
            <button
              onClick={() => setSelectedDomesticFilter(2)}
              className={selectedDomesticFilter === 2 ? styles.active : null}
            >
              International Holidays
            </button>
          </div>
          <div className={styles.domesticInternationalImages}>
            <img
              key={selectedDomesticFilter}
              src={domesticGraphic}
              alt="domestic mindset"
              className="fade-in"
            />
            <div
              className={`${styles.domesticInternationalExtraContent} fade-in`}
            >
              <p>
                <small
                  dangerouslySetInnerHTML={{ __html: domesticExtraContent }}
                />
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.domesticInternationalContent}>
          <div className={styles.domesticInternationalFilters}>
            <button
              onClick={() => setSelectedInternationalFilter(0)}
              className={
                selectedInternationalFilter === 0 ? styles.active : null
              }
            >
              Mindset Distribution by Cohorts
            </button>
            <button
              onClick={() => setSelectedInternationalFilter(1)}
              className={
                selectedInternationalFilter === 1 ? styles.active : null
              }
            >
              Age Distribution Mindset Clusters
            </button>
            <button
              onClick={() => setSelectedInternationalFilter(2)}
              className={
                selectedInternationalFilter === 2 ? styles.active : null
              }
            >
              Domestic Holidays
            </button>
          </div>
          <div className={styles.domesticInternationalImages}>
            <img
              key={selectedInternationalFilter}
              src={internationalGraphic}
              alt="international mindset"
              className="fade-in"
            />
            <div
              className={`${styles.domesticInternationalExtraContent} fade-in`}
            >
              <p>
                <small
                  dangerouslySetInnerHTML={{
                    __html: internationalExtraContent,
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appendix;
