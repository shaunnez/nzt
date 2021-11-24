import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Activity, Mindset } from "generated";
import Select from "react-select";

import { LazyLoadImage } from "react-lazy-load-image-component";

import { ReactComponent as DomesticIcon } from "assets/domestic.svg";
import { ReactComponent as InternationalIcon } from "assets/international.svg";

import styles from "./HomeMindsets.module.css";

interface HomeMindsetsInterface {
  activities: Activity[];
  mindsets: Mindset[];
}
const HomeMindsets = ({ activities, mindsets }: HomeMindsetsInterface) => {
  const idx = window.location.href.indexOf("selectActivity");
  const str =
    idx > -1
      ? window.location.href
          .slice(idx, window.location.href.length)
          .replace("selectActivity=", "")
      : "";
  const [activity, setActivity] = useState(decodeURIComponent(str));

  const theActivities = activities.map((x) => x.title);
  theActivities.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
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
    // eslint-disable-next-line
  }, []);

  return (
    <div id="homeMindsets" className={styles.homeMindsets}>
      <div className={styles.header}>
        <span>Mindsets overview</span>

        <div className={styles.selectWrapper}>
          <Select
            placeholder="All activities"
            options={theActivities.map((x) => ({
              value: x,
              label:
                x.length > 30
                  ? `${x.replace(/'/g, "’")}...`
                  : x.replace(/'/g, "’"),
            }))}
            isClearable
            className={"customSelect"}
            classNamePrefix="customSelect"
            onChange={(newValue) => {
              setActivity(newValue?.value);
            }}
            defaultValue={
              activity ? { value: activity, label: activity } : null
            }
          />
          <label>
            Select an activity to see which mindsets would be most interested
          </label>
        </div>
      </div>

      <div className={styles.subHeader}>
        We have prioritised a few mindsets to align our focus. These mindsets
        have a high desire for travel to or within Aotearoa, are resilient to
        the changing travel landscape and will contribute positively to New
        Zealand’s natural environment, culture, society and economy. Click on
        one of the highlighted mindsets below to find out more about them.
      </div>

      <div className={styles.mindsets}>
        {filteredMindsets("domestic", activity).length > 0 && (
          <div className={styles.mindsetsWrapper}>
            <div className={styles.mindsetsHeading}>
              <DomesticIcon />
              Domestic
            </div>
            <div className={styles.mindsetsColumns}>
              {filteredMindsets("domestic", activity).map(
                (mindset: any, i: number) => (
                  <MindsetItem
                    mindset={mindset}
                    key={`${mindset.head}-${i}-domestic`}
                  />
                )
              )}
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
                (mindset: any, i: number) => (
                  <MindsetItem
                    mindset={mindset}
                    key={`${mindset.head}-${i}-international`}
                  />
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
        <LazyLoadImage src={mindset.smallImage.url} />
        {/* <LazyLoadImage
          src={
            require(`../../assets/mindset-images${mindset.smallImage.url}`)
              .default
          }
        /> */}
      </div>
      <div className={styles.mindsetContent}>
        <div className={styles.mindsetIcon}>
          {mindset.theType === "domestic" ? (
            <DomesticIcon />
          ) : (
            <InternationalIcon />
          )}
        </div>
        <div className={styles.mindsetTitle}>
          {mindset.head.replace(/'/g, "’")}
        </div>
        <div className={styles.mindsetDescription}>
          {mindset.intro.replace(/'/g, "’")}
        </div>
      </div>
    </div>
  );
};
export default HomeMindsets;
