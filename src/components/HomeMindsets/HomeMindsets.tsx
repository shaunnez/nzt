import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Activity, Mindset } from "generated";

import { ReactComponent as SelectArrow } from "assets/select_arrow.svg";
import { ReactComponent as DomesticIcon } from "assets/domestic.svg";
import { ReactComponent as InternationalIcon } from "assets/international.svg";

import styles from "./HomeMindsets.module.css";

interface HomeMindsetsInterface {
  activities: Activity[];
  mindsets: Mindset[];
}
const HomeMindsets = ({ activities, mindsets }: HomeMindsetsInterface) => {
  const [openSelect, setOpenSelect] = useState(false);
  const [activity, setActivity] = useState(
    window.decodeURIComponent(window.location.search.replace("?activity=", ""))
  );

  const theActivities = activities.map((x) => x.title);
  // theActivities.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
  const filteredMindsets = (theType: string, theActivity: string) => {
    let filtered = mindsets.filter((x) => x.theType === theType);
    if (theActivity) {
      filtered = filtered.filter((x) =>
        x.activities.find((x) => x.title === theActivity)
      );
    }
    return filtered;
  };

  useEffect(() => {
    if (activity) {
      setTimeout(() => {
        document
          .getElementById("homeMindsets")
          .scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }, []);

  return (
    <div id="homeMindsets" className={styles.homeMindsets}>
      <div className={styles.header}>
        <span>Mindsets Overview</span>
        <div
          className={`${styles.customSelect} ${
            openSelect ? styles.open : styles.closed
          }`}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setOpenSelect(!openSelect);
            }}
          >
            {activity
              ? activity.length > 30 && window.innerWidth > 1024
                ? activity.slice(0, 30) + "..."
                : activity
              : "Filter by Activity"}

            <SelectArrow />
          </a>
          <ul className={openSelect ? styles.open : styles.closed}>
            <li key={activity}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActivity("");
                  setOpenSelect(false);
                }}
              >
                All activities
              </a>
            </li>
            {theActivities.map((activity) => (
              <li key={activity}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActivity(activity);
                    setOpenSelect(false);
                  }}
                >
                  {activity}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.mindsets}>
        {filteredMindsets("domestic", activity).length > 0 && (
          <div className={styles.mindsetsWrapper}>
            <div className={styles.mindsetsHeading}>
              <DomesticIcon />
              Domestic
            </div>
            <div className={styles.mindsetsColumns}>
              {filteredMindsets("domestic", activity).map((mindset: any) => (
                <MindsetItem mindset={mindset} />
              ))}
            </div>
          </div>
        )}
        {filteredMindsets("international", activity).length > 0 && (
          <div className={styles.mindsetsWrapper}>
            <div className={styles.mindsetsHeading}>
              <InternationalIcon />
              International
            </div>
            <div className={styles.mindsetsColumns}>
              {filteredMindsets("international", activity).map(
                (mindset: any) => (
                  <MindsetItem mindset={mindset} />
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const MindsetItem = ({ mindset }: any) => {
  const link = `/mindsets/${mindset.head.replace(/ /g, "-").toLowerCase()}`;
  return (
    <div className={styles.mindset} key={mindset.head}>
      <Link
        to={link}
        className={`${styles.mindsetLink} ${
          mindset.enabled ? styles.enabled : styles.disabled
        }`}
        onClick={(e) => {
          if (!mindset.enabled) {
            e.preventDefault();
            return false;
          }
        }}
      />
      <div className={styles.mindsetImage}>
        <img src={mindset.smallImage.url} />
      </div>
      <div className={styles.mindsetContent}>
        <div className={styles.mindsetIcon}>
          {mindset.theType === "domestic" ? (
            <DomesticIcon />
          ) : (
            <InternationalIcon />
          )}
        </div>
        <div className={styles.mindsetTitle}>{mindset.head}</div>
        <div className={styles.mindsetDescription}>{mindset.intro}</div>
      </div>
    </div>
  );
};
export default HomeMindsets;
