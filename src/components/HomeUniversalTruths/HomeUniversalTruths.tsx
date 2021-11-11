import { useState } from "react";

import { ReactComponent as ChevronIcon } from "assets/chevron.svg";

import styles from "./HomeUniversalTruths.module.css";

const HomeUniversalTruths = ({ home }: any) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className={styles.universalTruths}>
      <div className={styles.headline}>{home.universalTruthsTitle}</div>
      <div
        className={`${styles.content} ${
          accordionOpen ? styles.open : styles.closed
        }`}
      >
        <div
          dangerouslySetInnerHTML={{ __html: home.universalTruthsCopy.html }}
        />
      </div>
      <button
        type="button"
        onClick={(e) => {
          setAccordionOpen(!accordionOpen);
        }}
        className={`bounce ${styles.universalTruthsArrow} ${
          accordionOpen ? styles.open : styles.closed
        } `}
      >
        <ChevronIcon />
      </button>
    </div>
  );
};

export default HomeUniversalTruths;
