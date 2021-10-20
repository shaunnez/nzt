import Continuum from "components/Continuum/Continuum";

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
        <Continuum
          leftPercentage={continuumPercentageLeft}
          leftText={continuumLeftText}
          rightText={continuumRightText}
          title={continuumTitle}
        />
      )}
    </div>
  );
};

export default Quote;
