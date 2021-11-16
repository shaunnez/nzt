import Continuum from "components/Continuum/Continuum";
import TrackVisibility from "react-on-screen";
import styles from "./ByTheNumber.module.css";

const ByTheNumber = ({ byTheNumber }) => {
  const isPdf = window.location.href.indexOf("pdfme=true") > -1;
  return (
    <div
      className={`${styles.byTheNumber} ${
        byTheNumber.continuumTitle ? styles.withContinuum : null
      }`}
      style={{ marginTop: isPdf ? "40px" : null }}
    >
      {byTheNumber.continuumTitle && (
        <TrackVisibility>
          <Continuum
            leftPercentage={byTheNumber.continuumLeftPercentage}
            leftText={byTheNumber.continuumLeftText}
            rightText={byTheNumber.continuumRightText}
            title={byTheNumber.continuumTitle}
          />
        </TrackVisibility>
      )}

      <div
        className={`${styles.byTheNumberImage} ${
          byTheNumber.continuumTitle ? styles.withContinuum : null
        }`}
        style={{
          backgroundImage: `url(${
            byTheNumber.image?.url ||
            `http://via.placeholder.com/${
              byTheNumber.continuumTitle?.html ? "575x400" : "1024x439"
            }`
          })`,
        }}
      />

      <div
        className={`${styles.byTheNumberContent} ${
          byTheNumber.titleAndBody?.length === 2 ? styles.twoItems : null
        } ${byTheNumber.continuumTitle ? styles.withContinuum : null}`}
      >
        {byTheNumber.titleAndBody?.map((item, i) => {
          const theContent = item.split("\n");
          return (
            <div
              className={styles.byTheNumberTitleAndBody}
              key={`${byTheNumber.continuumTitle}-${i}`}
            >
              <div className={styles.byTheNumberTitle}>
                {theContent.length > 0 ? theContent[0] : ""}
              </div>
              <div className={styles.byTheNumberBody}>
                {theContent.length > 1 ? theContent[1] : ""}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ByTheNumber;
