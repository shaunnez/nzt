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

import { Mindset } from "generated";

import BoxoutComponent from "components/Boxout/Boxout";
import Footer from "components/Footer/Footer";
import Quote from "components/Quote/Quote";
import ByTheNumber from "components/ByTheNumber/ByTheNumber";
import Layout from "layouts";

import styles from "./Mindsets.module.css";

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
        return (
          <div className={styles.appendix}>
            <header className={styles.header}>
              <Link to={`/`} className={styles.overviewLink}>
                <span className="gg-arrow-left" /> Overview
              </Link>
              <h1 className="title page-title">{friendly}</h1>
            </header>

            <main>
              <div className={styles.content}>
                <div className={styles.subhead}>At a glance:</div>
                <div className={styles.intro}>{mindset.intro}</div>
              </div>
              <div style={{ height: "817px", overflow: "hidden" }}>
                <LazyHero
                  imageSrc={mindset.heroImage?.url}
                  minHeight={"1117px"}
                  opacity={0.1}
                  isCentered={false}
                  parallaxOffset={50}
                  transitionDuration={250}
                />
              </div>
              <div className={styles.content}>
                <div className={styles.accordion}>
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
                    <div className={styles.activities}>
                      {mindset.activities.map((x) => (
                        <div className={styles.activity} key={x.title}>
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
        <div className={`${styles.boxouts}`}>
          {item.boxouts.map((x, i) => (
            <BoxoutComponent boxout={x} key={`${x.title}-${i}`} />
          ))}
        </div>

        <div
          className={`${styles.accordionBody}`}
          dangerouslySetInnerHTML={{ __html: item.body?.html }}
        />

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
      </div>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          if (accordionItemOpen === item.theType) {
            setAccordionItemOpen("");
          } else {
            setAccordionItemOpen(item.theType);
          }
        }}
        className={`${styles.accordionLink} ${
          accordionItemOpen === item.theType ? styles.open : styles.closed
        }`}
      >
        <ChevronIcon />
      </button>
    </div>
  );
};

export default Mindsets;
