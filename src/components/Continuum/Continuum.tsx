import { ReactComponent as ProgressGraphic } from "assets/progress.svg";
import styles from "./Continuum.module.css";

const Continuum = ({ title, leftText, rightText, leftPercentage }: any) => {
  return (
    <div className={styles.continuum}>
      <div className={styles.continuumTitle}>{title}</div>
      <div className={styles.continuumContent}>
        <div className={styles.continuumGraphic}>
          <div className={styles.continuumGraphicBubbleWrapper}>
            <i
              style={{
                marginLeft: leftPercentage + "%",
              }}
            />
          </div>
          <ProgressGraphic />
        </div>
      </div>
      <div className={styles.continuumText}>
        <span> {leftText}</span>
        <span> {rightText}</span>
      </div>
    </div>
  );
};

export default Continuum;
