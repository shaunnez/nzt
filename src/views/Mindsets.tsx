import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

// @ts-ignore
import LazyHero from "react-lazy-hero";

import { ReactComponent as WhoIcon } from "assets/who.svg";
import { ReactComponent as WhatIcon } from "assets/what.svg";
import { ReactComponent as HowIcon } from "assets/how.svg";
import { ReactComponent as WhyIcon } from "assets/why.svg";
import { ReactComponent as WhereIcon } from "assets/where.svg";
import { ReactComponent as ChevronIcon } from "assets/chevron.svg";
import { ReactComponent as ProgressGraphic } from "assets/progress.svg";
import { Mindset } from "generated";
import Footer from "components/Footer/Footer";
import Layout from "layouts";

import styles from "./Mindsets.module.css";
import BoxoutComponent from "components/Boxout/Boxout";

const Mindsets = () => {
  const [accordionItemOpen, setAccordionItemOpen] = React.useState("");
  // @ts-ignore
  const { id } = useParams();
  // @ts-ignore
  const friendly = (id || "").replace(/-/g, " ");
  return (
    <Layout>
      {(data) => {
        const mindset = data.mindset as Mindset;
        console.log(mindset);
        return (
          <div className={styles.appendix}>
            <header className={styles.header}>
              <Link to={`/`} className={styles.overviewLink}>
                <span className="gg-arrow-left" /> Overview
              </Link>
              <h1 className="title page-title">Mindsets - {friendly}</h1>
            </header>

            <main>
              <div className={styles.content}>
                <div className={styles.subhead}>At a glance:</div>
                <div className={styles.intro}>{mindset.intro}</div>
              </div>
              <LazyHero
                imageSrc={mindset.heroImage?.url}
                minHeight={"817px"}
                opacity={0.1}
                isCentered={false}
              />

              <div className={styles.content}>
                <div className={styles.accordion}>
                  {mindset.whoWhatWhereWhyHows.map((item) => (
                    <AccordionItem
                      mindset={mindset}
                      item={item}
                      key={item.id}
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
                    <div className={styles.activities}>
                      {mindset.activities.map((x) => (
                        <div className={styles.activity}>
                          <Link to={`/?activity=${x.title}#homeMindsets`}>
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
    <div className={styles.accordionItem}>
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
          accordionItemOpen === item.theType ? styles.open : styles.closed
        }`}
      >
        <div
          className={`${styles.accordionImageBodyWrapper} ${
            item?.boxout ? styles.withBoxout : styles.noBoxout
          }`}
        >
          {item.boxout && <BoxoutComponent boxout={item.boxout} />}
          <div
            className={`${styles.accordionBody} ${
              item?.boxout ? styles.withBoxout : styles.noBoxout
            }`}
            dangerouslySetInnerHTML={{ __html: item.body?.html }}
          />
        </div>

        {(item.quotes?.length > 0 || item.continuum) && (
          <div className={styles.quotesAndGraphic}>
            {item.quotes.length > 0 && (
              <div className={styles.quotes}>
                {item.quotes.map((x, i) => (
                  <div
                    className={styles.quote}
                    key={`${item.theType}-${i}-quote`}
                  >
                    {x}
                  </div>
                ))}
              </div>
            )}
            {item.continuum && (
              <div className={styles.continuum}>
                <div className={styles.continuumTitle}>
                  {item.continuum?.title}
                </div>
                <div className={styles.continuumContent}>
                  <span> {item.continuum?.leftText}</span>
                  <div className={styles.continuumGraphic}>
                    <i style={{ left: item.continuum.perentageLeft + "%" }} />
                    <ProgressGraphic />
                  </div>
                  <span> {item.continuum?.rightText}</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div
        className={`${styles.accordionLink} ${
          accordionItemOpen === item.theType ? styles.open : styles.closed
        }`}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (accordionItemOpen === item.theType) {
              setAccordionItemOpen("");
            } else {
              setAccordionItemOpen(item.theType);
            }
          }}
        >
          <ChevronIcon />
        </a>
      </div>
    </div>
  );
};

export default Mindsets;
