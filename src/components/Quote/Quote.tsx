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
  const isPdf = window.location.href.indexOf("pdfme=true") > -1;

  return (
    <div
      className={`${styles.quote} ${
        continuumTitle ? styles.quoteWithContinuum : null
      }`}
      style={{ marginTop: isPdf ? "20px" : null }}
    >
      <div
        className={styles.quoteText}
        style={{ fontSize: isPdf ? "24px" : "var(--font-quote)" }}
      >
        {text.replace(/'/g, "’")}
      </div>
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
