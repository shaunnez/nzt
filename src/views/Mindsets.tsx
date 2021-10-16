import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Footer from "components/Footer/Footer";
import Layout from "layouts";
import data from "utilities/data";
// @ts-ignore
import LazyHero from "react-lazy-hero";

import styles from "./Mindsets.module.css";
import { GetDataQuery, Mindset } from "generated";

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
              <Link to={`/`} className={"overview-link"}>
                {"<-"} Overview
              </Link>
              <h1 className="title page-title">Mindsets - {friendly}</h1>
            </header>

            <main>
              <div className={styles.content}>
                <p>{mindset.subhead}</p>
                <p>{mindset.intro}</p>
              </div>
              <LazyHero
                imageSrc={mindset.heroImage.url}
                minHeight={"817px"}
                opacity={0.1}
                isCentered={false}
              />

              <div className={styles.content}>
                <div className={styles.accordion}>
                  <AccordionItemWho
                    mindset={mindset}
                    accordionItemOpen={accordionItemOpen}
                    setAccordionItemOpen={setAccordionItemOpen}
                  />
                  <AccordionItemWhy
                    mindset={mindset}
                    accordionItemOpen={accordionItemOpen}
                    setAccordionItemOpen={setAccordionItemOpen}
                  />
                  <AccordionItemHow
                    mindset={mindset}
                    accordionItemOpen={accordionItemOpen}
                    setAccordionItemOpen={setAccordionItemOpen}
                  />
                  <AccordionItemWhat
                    mindset={mindset}
                    accordionItemOpen={accordionItemOpen}
                    setAccordionItemOpen={setAccordionItemOpen}
                  />
                  <AccordionItemWhere
                    mindset={mindset}
                    accordionItemOpen={accordionItemOpen}
                    setAccordionItemOpen={setAccordionItemOpen}
                  />
                </div>

                {mindset.activities?.length > 0 && (
                  <>
                    <div className={styles.activitiesHeader}>
                      Activities this mindset is likely to be interested in
                    </div>
                    <div className={styles.activities}>
                      {mindset.activities.map((x) => (
                        <div className={styles.activity}>{x.title}</div>
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

export const AccordionHeader = ({ title, subTitle, intro }) => {
  return (
    <div className={styles.accordionHeadingWrapper}>
      <div className={styles.accordionIcon} />
      <div className={styles.accordionHeading}>
        <div className={styles.boldAccordionHeading}>{title}</div>
        <div className={styles.accordionHeading}>{subTitle}</div>
      </div>
      <div className={styles.accordionHeadingContent}>{intro}</div>
    </div>
  );
};

export const AccordionContent = ({ accordionItemOpen, theType, html }) => {
  return (
    <div
      className={`${styles.accordionContent} ${
        accordionItemOpen === theType ? styles.open : styles.closed
      }`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export const AccordionLink = ({
  accordionItemOpen,
  theType,
  setAccordionItemOpen,
}) => {
  return (
    <div className={styles.accordionLink}>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (accordionItemOpen === theType) {
            setAccordionItemOpen("");
          } else {
            setAccordionItemOpen(theType);
          }
        }}
      >
        TOGGLE
      </a>
    </div>
  );
};

export const AccordionItemWho = ({
  mindset,
  accordionItemOpen,
  setAccordionItemOpen,
}) => {
  return (
    <div className={styles.accordionItem}>
      <AccordionHeader
        title={"WHO"}
        subTitle={"they are"}
        intro={mindset.who?.intro}
      />
      <AccordionContent
        accordionItemOpen={accordionItemOpen}
        theType="who"
        html={mindset.who?.body?.html}
      />
      <AccordionLink
        accordionItemOpen={accordionItemOpen}
        theType="who"
        setAccordionItemOpen={setAccordionItemOpen}
      />
    </div>
  );
};

export const AccordionItemWhy = ({
  mindset,
  accordionItemOpen,
  setAccordionItemOpen,
}) => {
  return (
    <div className={styles.accordionItem}>
      <AccordionHeader
        title={"WHY"}
        subTitle={"they go on holiday"}
        intro={mindset.why?.intro}
      />
      <AccordionContent
        accordionItemOpen={accordionItemOpen}
        theType="why"
        html={mindset.why?.body?.html}
      />
      <AccordionLink
        accordionItemOpen={accordionItemOpen}
        theType="why"
        setAccordionItemOpen={setAccordionItemOpen}
      />
    </div>
  );
};

export const AccordionItemHow = ({
  mindset,
  accordionItemOpen,
  setAccordionItemOpen,
}) => {
  return (
    <div className={styles.accordionItem}>
      <AccordionHeader
        title={"HOW"}
        subTitle={"they plan a holiday"}
        intro={mindset.how?.intro}
      />
      <AccordionContent
        accordionItemOpen={accordionItemOpen}
        theType="how"
        html={mindset.how?.body?.html}
      />
      <AccordionLink
        accordionItemOpen={accordionItemOpen}
        theType="how"
        setAccordionItemOpen={setAccordionItemOpen}
      />
    </div>
  );
};

export const AccordionItemWhat = ({
  mindset,
  accordionItemOpen,
  setAccordionItemOpen,
}) => {
  return (
    <div className={styles.accordionItem}>
      <AccordionHeader
        title={"WHAT"}
        subTitle={"they do on holiday"}
        intro={mindset.how?.intro}
      />
      <AccordionContent
        accordionItemOpen={accordionItemOpen}
        theType="what"
        html={mindset.what?.body?.html}
      />
      <AccordionLink
        accordionItemOpen={accordionItemOpen}
        theType="what"
        setAccordionItemOpen={setAccordionItemOpen}
      />
    </div>
  );
};

export const AccordionItemWhere = ({
  mindset,
  accordionItemOpen,
  setAccordionItemOpen,
}) => {
  return (
    <div className={styles.accordionItem}>
      <AccordionHeader
        title={"WHERE"}
        subTitle={"you’ll find them"}
        intro={mindset.how?.intro}
      />
      <AccordionContent
        accordionItemOpen={accordionItemOpen}
        theType={"where"}
        html={mindset.where?.body}
      />
      <AccordionLink
        accordionItemOpen={accordionItemOpen}
        theType="where"
        setAccordionItemOpen={setAccordionItemOpen}
      />
    </div>
  );
};

export default Mindsets;
