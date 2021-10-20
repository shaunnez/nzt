import Continuum from "components/Continuum/Continuum";
import styles from "./ByTheNumber.module.css";

const ByTheNumber = ({ byTheNumber }) => {
  return (
    <div className={styles.byTheNumber}>
      {byTheNumber.continuumTitle && (
        <Continuum
          leftPercentage={byTheNumber.continuumLeftPercentage}
          leftText={byTheNumber.continuumLeftText}
          rightText={byTheNumber.continuumRightText}
          title={byTheNumber.continuumTitle}
        />
      )}

      <div
        className={styles.byTheNumberImage}
        style={{
          backgroundImage: `url(${
            byTheNumber?.image?.url
              ? byTheNumber?.image?.url
              : "http://via.placeholder.com/575x400"
          })`,
        }}
      />

      <div className={styles.byTheNumberContent}>
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
