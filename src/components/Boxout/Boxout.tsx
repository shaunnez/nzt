import { Boxout } from "generated";
import styles from "./Boxout.module.css";

interface BoxoutProps {
  boxout: Boxout;
}

const BoxoutComponent = ({ boxout }: BoxoutProps) => {
  return (
    <div className={styles.boxout}>
      {boxout.backgroundImage && (
        <img src={boxout.backgroundImage.url} alt={`${boxout.title}`} />
      )}
      <div className={styles.boxoutImageWrapper}>
        <div className={styles.boxoutTitle}>{boxout.title}</div>
        <div className={styles.boxoutLargeText}>{boxout.largeText}</div>
        <div className={styles.boxoutContent}>{boxout.content}</div>
      </div>
    </div>
  );
};

export default BoxoutComponent;
