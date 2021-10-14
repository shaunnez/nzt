import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./HomeMindsets.module.css";

const HomeMindsets = ({ mindsets }: any) => {
  const [openSelect, setOpenSelect] = useState(false);
  const [activity, setActivity] = useState("Filter by activity");
  const activities = ["Filter by activity", "Example", "Another One"];
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
            {activity}
          </a>
          <ul className={openSelect ? styles.open : styles.closed}>
            {activities.map((activity) => (
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
            {mindsets
              .filter((mindset: any) => mindset.type === "domestic")
              .map((mindset: any) => {
                const link = `/mindsets/${mindset.title
                  .replace(/ /g, "-")
                  .toLowerCase()}`;
                return (
                  <div className={styles.mindset} key={mindset.title}>
                    <Link to={link} className={styles.mindsetLink} />
                    <div className={styles.mindsetImage} />

                    <div className={styles.mindsetContent}>
                      <div className={styles.mindsetIcon}>
                        <span></span>
                      </div>
                      <div className={styles.mindsetTitle}>{mindset.title}</div>
                      <div className={styles.mindsetDescription}>
                        {mindset.description}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className={styles.mindsetsWrapper}>
          <div className={styles.mindsetsHeading}>International</div>
          <div className={styles.mindsetsColumns}>
            {mindsets
              .filter((mindset: any) => mindset.type === "international")
              .map((mindset: any) => {
                const link = `/mindsets/${mindset.title
                  .replace(/ /g, "-")
                  .toLowerCase()}`;
                return (
                  <div className={styles.mindset} key={mindset.title}>
                    <Link to={link} className={styles.mindsetLink} />
                    <div className={styles.mindsetImage} />
                    <div className={styles.mindsetContent}>
                      <div className={styles.mindsetIcon}>
                        <span></span>
                      </div>
                      <div className={styles.mindsetTitle}>{mindset.title}</div>
                      <div className={styles.mindsetDescription}>
                        {mindset.description}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMindsets;
