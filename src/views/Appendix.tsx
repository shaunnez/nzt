import { Link } from "react-router-dom";
import { useState } from "react";
import Highcharts from "highcharts/highcharts";
import HighchartsReact from "highcharts-react-official";

import Footer from "components/Footer/Footer";
import Layout from "layouts";

import { ReactComponent as DomesticIcon } from "assets/domestic.svg";
import { ReactComponent as InternationalIcon } from "assets/international.svg";

import getDataByTypeAndIndex from "utilities/appendixData";
import pdf from "utilities/pdf";
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
  const [generatingPdf, setGeneratingPdf] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const isPdf = window.location.href.indexOf("pdfme=true") > -1;

  if (isPdf) {
    // @ts-ignore
    chartOptions.chart.width = "1400";
    // @ts-ignore
    chartOptions.chart.marginTop = "0";
    // @ts-ignore
    chartOptions.chart.spacingTop = "0";
  }
  return (
    <Layout>
      {(data) => {
        return (
          <div className={styles.appendix}>
            <div
              className={styles.modal}
              style={{ display: pdfUrl ? "flex" : "none" }}
            >
              <div>
                Great! <br /> Click&nbsp;
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(pdfUrl);
                    setPdfUrl("");
                  }}
                >
                  here
                </a>
                &nbsp;to download your pdf
              </div>
              <button
                className={styles.closeButton}
                onClick={(e) => setPdfUrl("")}
              >
                X
              </button>
            </div>
            <header className={styles.header}>
              <Link to={`/`} className={styles.overviewLink}>
                <span className="gg-arrow-left" /> Overview
              </Link>
              {isPdf ? null : (
                <button
                  className={`${styles.pdfBtn} ${
                    generatingPdf ? styles.loading : null
                  }`}
                  onClick={async () => {
                    if (generatingPdf) {
                      return;
                    }
                    setGeneratingPdf(true);
                    const result = await pdf({
                      source: window.location.href + "?pdfme=true",
                    });
                    setGeneratingPdf(false);
                    // @ts-ignore
                    if (result?.data?.url) {
                      // @ts-ignore
                      setPdfUrl(result.data.url);
                    } else {
                      alert(
                        "There was a problem generating your pdf, please try again later"
                      );
                    }
                  }}
                >
                  {generatingPdf ? "Please wait..." : "Download Pdf"}
                </button>
              )}
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
                {isPdf ? (
                  <>
                    <DomesticInternationalWidget
                      selectedTabIdx={0}
                      selectedFilter={0}
                    />
                    <DomesticInternationalWidget
                      selectedTabIdx={0}
                      selectedFilter={1}
                    />
                    <DomesticInternationalWidget
                      selectedTabIdx={0}
                      selectedFilter={2}
                    />
                    <DomesticInternationalWidget
                      selectedTabIdx={1}
                      selectedFilter={0}
                    />
                    <DomesticInternationalWidget
                      selectedTabIdx={1}
                      selectedFilter={1}
                    />
                    <DomesticInternationalWidget
                      selectedTabIdx={1}
                      selectedFilter={2}
                    />
                  </>
                ) : (
                  <DomesticInternationalWidget
                    selectedTabIdx={0}
                    selectedFilter={0}
                  />
                )}
              </div>
            </main>

            <Footer mindsets={data.mindsets} />
          </div>
        );
      }}
    </Layout>
  );
};

export const DomesticInternationalWidget = ({
  selectedTabIdx,
  selectedFilter,
}) => {
  const isPdf = window.location.href.indexOf("pdfme=true") > -1;

  const [selectedTab, setSelectedTab] = useState(selectedTabIdx);
  const [selectedDomesticFilter, setSelectedDomesticFilter] =
    useState(selectedFilter);
  const [selectedInternationalFilter, setSelectedInternationalFilter] =
    useState(selectedFilter);

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
    <>
      {isPdf && selectedTabIdx === 0 && selectedFilter === 2 ? (
        <div className={styles.pageBreak} />
      ) : null}
      <div
        className={styles.domesticInternational}
        style={{ marginTop: isPdf ? "0px" : "48px" }}
      >
        {isPdf && selectedFilter > 0 ? null : (
          <div className={styles.domesticInternationalHeader}>
            {!isPdf || (isPdf && selectedTabIdx === 0) ? (
              <button
                onClick={() => setSelectedTab(0)}
                className={selectedTab === 0 ? styles.active : null}
              >
                <InternationalIcon /> International
              </button>
            ) : null}
            {!isPdf || (isPdf && selectedTabIdx === 1) ? (
              <button
                onClick={() => setSelectedTab(1)}
                className={selectedTab === 1 ? styles.active : null}
              >
                <DomesticIcon /> Domestic
              </button>
            ) : null}
          </div>
        )}

        {selectedTab === 1 ? (
          <div className={styles.domesticInternationalContent}>
            <div
              className={`${styles.domesticInternationalFilters} ${
                isPdf ? styles.isPdf : null
              }`}
            >
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
                Age Distribution by Mindset
              </button>
              <button
                onClick={() => setSelectedDomesticFilter(2)}
                className={selectedDomesticFilter === 2 ? styles.active : null}
              >
                Domestic Holidays
              </button>
            </div>
            <div
              className={styles.domesticInternationalImages}
              style={{ marginTop: isPdf ? "0px" : "40px" }}
            >
              <HighchartsReact
                immutable={true}
                highcharts={Highcharts}
                options={actualChartOptions}
              />
              <div className={styles.customFooterContent}>
                {selectedDomesticFilter === 1 && <div>Average age</div>}
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
            <div
              className={`${styles.domesticInternationalFilters} ${
                isPdf ? styles.isPdf : null
              }`}
            >
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
              <div className={styles.customFooterContent}>
                {selectedInternationalFilter === 1 && <div>Average age</div>}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Appendix;
