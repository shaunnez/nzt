import { Link } from "react-router-dom";
import { useState } from "react";
import Highcharts from "highcharts/highcharts";
import HighchartsReact from "highcharts-react-official";

import Footer from "components/Footer/Footer";
import Layout from "layouts";

import { ReactComponent as DomesticIcon } from "assets/domestic.svg";
import { ReactComponent as InternationalIcon } from "assets/international.svg";

import getDataByTypeAndIndex from "utilities/appendixData";
import styles from "./Appendix.module.css";

const chartOptions = {
  title: {
    text: "",
  },
  credits: {
    enabled: false,
  },
  chart: {
    type: "column",
    showAxis: true,
    zoomType: "x",
    height: 500,
    // margin: [0, 0, 0, 0],
    // spacingTop: 0,
    // marginTop: 0,
    style: {
      fontFamily:
        '"National", "Trebuchet MS", Helvetica, Arial, Verdana, Tahoma, sans-serif;',
      color: "#000",
    },
  },
  colors: [],
  plotOptions: {
    column: {
      stacking: "percentage",
      borderWidth: 0,
      borderColor: "#000",
      dataLabels: {
        enabled: true,
        format: "{y}%",
        style: {
          color: "black",
          textOutline: "none",
          fontSize: "13px",
        },
      },
    },
  },
  caption: {
    text: ``,
    useHTML: true,
    align: "center",
    style: {
      color: "#000",
    },
  },
  xAxis: [
    {
      lineColor: "#aaa",
      lineWidth: 2,
      categories: [],
      labels: {
        style: {
          fontWeight: 400,
          fontSize: "13px",
          color: "#000",
        },
      },
    },
    {
      visible: false,
      lineWidth: 0,
      linkedTo: 0,
      offset: 35,
      categories: [],
      labels: {
        style: {
          fontWeight: 400,
          fontSize: "13px",
          color: "#000",
        },
      },
    },
    {
      visible: false,
      lineWidth: 0,
      linkedTo: 0,
      offset: 50,
      categories: [],
      labels: {
        style: {
          fontWeight: 400,
          fontSize: "13px",
          color: "#000",
        },
      },
    },
  ],
  yAxis: {
    visible: false,
  },
  tooltip: {
    headerFormat: "",
    pointFormat:
      '<span style="color:black">{series.name}</span>: <b>{point.y}%</b><br/>',
    shared: true,
    style: {
      fontSize: "14px",
      color: "black",
    },
  },
  legend: {
    align: "left",
    verticalAlign: "middle",
    layout: "vertical",
    itemMarginBottom: 33,
    alignColumns: true,
    useHTML: true,
    width: 180,
    itemStyle: {
      color: "#000",
      fontSize: "15px",
      fontWeight: 400,
      textOverflow: null,
    },
    // reversed: true,
  },
  series: [],
};

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

  const actualChartOptions = {
    ...chartOptions,
  };

  const additionalChartData = getDataByTypeAndIndex(
    selectedTab,
    selectedTab === 0 ? selectedInternationalFilter : selectedDomesticFilter
  );
  actualChartOptions.series = additionalChartData.series;
  actualChartOptions.xAxis[0].categories = additionalChartData.categories;
  if (additionalChartData.categories2?.length > 0) {
    actualChartOptions.xAxis[1].visible = true;
    actualChartOptions.xAxis[1].categories = additionalChartData.categories2;
  } else {
    actualChartOptions.xAxis[1].visible = false;
    actualChartOptions.xAxis[1].categories = [];
  }
  if (additionalChartData.categories3?.length > 0) {
    actualChartOptions.xAxis[2].visible = true;
    actualChartOptions.xAxis[2].categories = additionalChartData.categories3;
  } else {
    actualChartOptions.xAxis[2].visible = false;
    actualChartOptions.xAxis[2].categories = [];
  }
  actualChartOptions.caption.text = additionalChartData.caption;
  actualChartOptions.colors = additionalChartData.colors;

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
              Mindset Distribution by Cohort
            </button>
            <button
              onClick={() => setSelectedDomesticFilter(1)}
              className={selectedDomesticFilter === 1 ? styles.active : null}
            >
              Mindset Distribution by Age
            </button>
            <button
              onClick={() => setSelectedDomesticFilter(2)}
              className={selectedDomesticFilter === 2 ? styles.active : null}
            >
              Domestic Holidays
            </button>
          </div>
          <div className={styles.domesticInternationalImages}>
            <HighchartsReact
              immutable={true}
              highcharts={Highcharts}
              options={actualChartOptions}
            />
            <div className={styles.customFooterContent}>
              {selectedDomesticFilter === 2 && (
                <div>
                  Average number of <br /> domestic holidays per year
                </div>
              )}
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
              Mindset Distribution by Market
            </button>
            <button
              onClick={() => setSelectedInternationalFilter(1)}
              className={
                selectedInternationalFilter === 1 ? styles.active : null
              }
            >
              Age Distribution by Mindset
            </button>
            <button
              onClick={() => setSelectedInternationalFilter(2)}
              className={
                selectedInternationalFilter === 2 ? styles.active : null
              }
            >
              International Holidays
            </button>
          </div>
          <div className={styles.domesticInternationalImages}>
            <HighchartsReact
              immutable={true}
              highcharts={Highcharts}
              options={actualChartOptions}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Appendix;
