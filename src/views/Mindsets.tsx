import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

// @ts-ignore
import LazyHero from "react-lazy-hero";

import { ReactComponent as DomesticIcon } from "assets/domestic.svg";
import { ReactComponent as InternationalIcon } from "assets/international.svg";
import { ReactComponent as WhoIcon } from "assets/who.svg";
import { ReactComponent as WhatIcon } from "assets/what.svg";
import { ReactComponent as HowIcon } from "assets/how.svg";
import { ReactComponent as WhyIcon } from "assets/why.svg";
import { ReactComponent as WhereIcon } from "assets/where.svg";
import { ReactComponent as ChevronIcon } from "assets/chevron.svg";

import { Mindset } from "generated";

import BoxoutComponent from "components/Boxout/Boxout";
import Footer from "components/Footer/Footer";
import Quote from "components/Quote/Quote";
import ByTheNumber from "components/ByTheNumber/ByTheNumber";
import Layout from "layouts";

import pdf from "utilities/pdf";

import styles from "./Mindsets.module.css";

const Mindsets = () => {
  const [accordionItemOpen, setAccordionItemOpen] = React.useState("");
  const [generatingPdf, setGeneratingPdf] = React.useState(false);
  const [pdfUrl, setPdfUrl] = React.useState("");
  // @ts-ignore
  const { id } = useParams();
  // @ts-ignore
  const friendly = (id || "").replace(/-/g, " ");
  const isPdf = window.location.href.indexOf("pdfme=true") > -1;
  React.useEffect(() => {
    return () => {
      setAccordionItemOpen("");
    };
  }, [id]);
  return (
    <Layout>
      {(data) => {
        const mindset = data.mindset as Mindset;
        return (
          <div className={styles.mindsets} key={id}>
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
              {isPdf ? null : (
                <Link to={`/`} className={styles.overviewLink}>
                  <span className="gg-arrow-left" /> Overview
                </Link>
              )}
              <h1 className="title page-title">{friendly}</h1>

              <div className={styles.headerIcon}>
                {mindset.theType === "domestic" ? (
                  <DomesticIcon />
                ) : (
                  <InternationalIcon />
                )}
              </div>

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

            <main>
              <div className={styles.content}>
                <div className={styles.subhead}>At a glance:</div>
                <div className={styles.intro}>{mindset.intro}</div>
              </div>
              {isPdf ? null : (
                <div style={{ height: "817px", overflow: "hidden" }}>
                  <LazyHero
                    imageSrc={mindset.heroImage?.url}
                    // imageSrc={
                    //   require(`../assets/mindset-images${mindset.heroImage?.url}`)
                    //     .default
                    // }
                    minHeight={"817px"}
                    opacity={0.1}
                    isCentered={false}
                    // parallaxOffset={1000}
                    transitionDuration={250}
                  />
                </div>
              )}
              <div className={styles.content}>
                <div
                  className={styles.accordion}
                  style={{ marginBottom: isPdf ? "32px" : "84px" }}
                >
                  {mindset.whoWhatWhereWhyHows.map((item, i) => (
                    <AccordionItem
                      mindset={mindset}
                      item={item}
                      key={`accordion-${i}`}
                      accordionItemOpen={accordionItemOpen}
                      setAccordionItemOpen={setAccordionItemOpen}
                    />
                  ))}
                </div>

                {mindset.activities?.length > 0 && (
                  <>
                    <div className={styles.activitiesHeader}>
                      Activities this mindset is likely to be interested in
                    </div>
                    <div
                      className={styles.activities}
                      style={{ marginBottom: isPdf ? "0px" : "204px" }}
                    >
                      {mindset.activities.map((x) => (
                        <div className={styles.activity} key={x.title}>
                          <Link to={`/selectActivity=${x.title}`}>
                            {x.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </>
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

export const AccordionItem = ({
  mindset,
  item,
  accordionItemOpen,
  setAccordionItemOpen,
}: any) => {
  const forceOpen = window.location.href.indexOf("pdfme=true") > -1;
  let theTitle = "";
  if (item.theType === "who") {
    theTitle = "WHO they are";
  } else if (item.theType === "why") {
    theTitle = "WHY they go on holiday";
  } else if (item.theType === "how") {
    theTitle = "HOW they plan a holiday";
  } else if (item.theType === "what") {
    theTitle = "WHAT they do on a holiday";
  } else {
    theTitle = "WHERE you'll find them";
  }
  return (
    <div id={item.theType} className={styles.accordionItem}>
      <div className={styles.accordionHeadingWrapper}>
        <div className={styles.accordionIcon}>
          {item.theType === "who" ? (
            <WhoIcon />
          ) : item.theType === "why" ? (
            <WhyIcon />
          ) : item.theType === "how" ? (
            <HowIcon />
          ) : item.theType === "what" ? (
            <WhatIcon />
          ) : (
            <WhereIcon />
          )}
        </div>
        <div className={styles.accordionHeading}>
          <div className={styles.boldAccordionHeading}>
            {item.theType?.toUpperCase()}
          </div>
          <div className={styles.normalAccordionHeading}>
            {theTitle?.replace(item.theType?.toUpperCase(), "")}
          </div>
        </div>
        <div className={styles.accordionHeadingContent}>{item.intro}</div>
      </div>
      <div
        className={`${styles.accordionContent} ${
          accordionItemOpen === item.theType || forceOpen
            ? styles.open
            : styles.closed
        }`}
      >
        {item.boxouts.length === 3 || item.boxouts.length === 0 ? null : (
          <div className={`${styles.boxouts}`}>
            {item.boxouts.map((x, i) => (
              <BoxoutComponent boxout={x} key={`${x.title}-${i}`} />
            ))}
          </div>
        )}

        <div
          className={`${styles.accordionBody}`}
          dangerouslySetInnerHTML={{ __html: item.body?.html }}
        />

        {forceOpen
          ? null
          : item.fullImage && (
              <div
                className={styles.fullImage}
                style={{
                  backgroundImage: `url(${
                    item.fullImage?.url || "http://via.placeholder.com/1156x771"
                  })`,
                }}
              />
            )}

        {item.quotes.map((x, i) => (
          <Quote
            text={x.text}
            continuumPercentageLeft={x.continuumPercentageLeft}
            continuumLeftText={x.continuumLeftText}
            continuumRightText={x.continuumRightText}
            continuumTitle={x.continuumTitle}
            key={`${item.theType}-${i}-quote`}
          />
        ))}

        {item.byTheNumber && <ByTheNumber byTheNumber={item.byTheNumber} />}

        {item.boxouts.length === 3 ? (
          <div
            className={`${styles.boxouts} ${styles.tripleBoxout}`}
            style={{ marginTop: "45px" }}
          >
            {item.boxouts.map((x, i) => (
              <BoxoutComponent boxout={x} key={`${x.title}-${i}`} />
            ))}
          </div>
        ) : null}
      </div>
      {forceOpen ? null : (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            if (accordionItemOpen === item.theType) {
              setAccordionItemOpen("");
            } else {
              setAccordionItemOpen(item.theType);
              setTimeout(() => {
                document
                  .querySelector("#" + item.theType)
                  .scrollIntoView({ block: "start", behavior: "auto" });
              }, 0);
            }
          }}
          className={`bounce ${styles.accordionLink} ${
            accordionItemOpen === item.theType || forceOpen
              ? styles.open
              : styles.closed
          }`}
        >
          <ChevronIcon />
        </button>
      )}

      <div className={styles.border} />

      {item.theType === "why" ? <div className={styles.pageBreak} /> : null}
    </div>
  );
};

export default Mindsets;
