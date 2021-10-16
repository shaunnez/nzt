import { useState } from "react";
import { Link } from "react-router-dom";
import { Activity, Mindset } from "generated";
import styles from "./HomeMindsets.module.css";

interface HomeMindsetsInterface {
  activities: Activity[];
  mindsets: Mindset[];
}
const HomeMindsets = ({ activities, mindsets }: HomeMindsetsInterface) => {
  const [openSelect, setOpenSelect] = useState(false);
  const [activity, setActivity] = useState("");
  const theActivities = activities.map((x) => x.title);
  theActivities.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
  const filteredMindsets = (theType: string, theActivity: string) => {
    let activity = theActivity === "Filter by activity" ? "" : theActivity;
    let filtered = mindsets.filter((x) => x.theType === theType);
    if (theActivity !== "Filter by activity") {
      filtered = filtered.filter(
        (x) =>
          x.activities.length === 0 ||
          x.activities.find((x) => x.title === activity)
      );
    }
    return filtered;
  };

  return (
    <div className={styles.homeMindsets}>
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
            {activity || "Filter by Activity"}
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
        <div className={styles.mindsetsWrapper}>
          <div className={styles.mindsetsHeading}>Domestic</div>
          <div className={styles.mindsetsColumns}>
            {filteredMindsets("domestic", activity).map((mindset: any) => (
              <MindsetItem mindset={mindset} />
            ))}
          </div>
        </div>
        <div className={styles.mindsetsWrapper}>
          <div className={styles.mindsetsHeading}>International</div>
          <div className={styles.mindsetsColumns}>
            {filteredMindsets("international", activity).map((mindset: any) => (
              <MindsetItem mindset={mindset} />
            ))}
          </div>
        </div>
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
          mindset.disabled ? styles.disabled : styles.enabled
        }`}
        onClick={(e) => {
          if (mindset.disabled) {
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
          <span></span>
        </div>
        <div className={styles.mindsetTitle}>{mindset.head}</div>
        <div className={styles.mindsetDescription}>{mindset.description}</div>
      </div>
    </div>
  );
};
export default HomeMindsets;
