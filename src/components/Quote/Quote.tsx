import Continuum from "components/Continuum/Continuum";
import TrackVisibility from "react-on-screen";

import styles from "./Quote.module.css";

const Quote = ({
  text,
  continuumPercentageLeft,
  continuumLeftText,
  continuumRightText,
  continuumTitle,
}) => {
  return (
    <div
      className={`${styles.quote} ${
        continuumTitle ? styles.quoteWithContinuum : null
      }`}
    >
      <div className={styles.quoteText}>{text}</div>
      {continuumTitle && (
        <TrackVisibility>
          <Continuum
            leftPercentage={continuumPercentageLeft}
            leftText={continuumLeftText}
            rightText={continuumRightText}
            title={continuumTitle}
          />
        </TrackVisibility>
      )}
    </div>
  );
};

export default Quote;
