import { useState } from "react";

import styles from "./HomeUniversalTruths.module.css";

const HomeUniversalTruths = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className={styles.universalTruths}>
      <div className={styles.headline}>
        First, take a look at our Universal Truths. <br />
        These are the things all visitors have in common, regardless of their
        mindset.
      </div>
      <div
        className={`${styles.content} ${
          accordionOpen ? styles.open : styles.closed
        }`}
      >
        <div className={styles.contentHeadline}>Universal Truths</div>
        <p>
          Along with our insights into mindsets, our research revealed some
          Universal Truths. These are the things that we have in common,
          regardless of who we are and where we’re from.
        </p>
        <p>
          Universal Truths are important because they unite us, regardless of
          our mindset.
        </p>
        <p>People around the world believe these Universal Truths:</p>
        <p className={styles.paragraphHeader}>
          <b>Honesty</b>
        </p>
        <p>
          It’s important to be sincere and have integrity. On holiday, this
          means relying on people to be fair and honest at a time when we’re
          more susceptible to dishonesty.
        </p>
        <p className={styles.paragraphHeader}>
          <b>Enjoying Life</b>
        </p>
        <p>
          It’s important to enjoy and make the most of life – particularly when
          we’re on holiday.
        </p>
        <p className={styles.paragraphHeader}>
          <b>Authenticity</b>
        </p>
        <p>
          It’s important to be genuine in how you deal with other people. On
          holiday, we want to feel the people we encounter and the experiences
          we have are genuine and true.
        </p>
        <p className={styles.paragraphHeader}>
          <b>Protecting</b>
        </p>
        <p>
          Protecting family and providing safety for loved ones is a fundamental
          human value. On holiday, away from familiar, trusted people and
          places, we want to feel safe so we can make the most of our break.
        </p>
        <p>Domestic travellers also believe two additional Universal Truths:</p>
        <p>
          Freedom We’re free to live the life we choose, and so are others. On
          holiday, we want to feel free of our everyday lives and to be free to
          choose what’s best for us
        </p>
        <p className={styles.paragraphHeader}>
          <b>Stable Personal Relationships</b>
        </p>
        <p>
          Our relationships with friends and loved ones anchor our lives. On
          holiday, we can spend time with the people who matter to us, forging
          deeper bonds through shared experiences and memories.
        </p>
      </div>
      <div className={styles.universlTruthsArrow}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
        >
          ARROW ICON
        </a>
      </div>
    </div>
  );
};

export default HomeUniversalTruths;
