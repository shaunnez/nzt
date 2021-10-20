import { Boxout } from "generated";
import styles from "./Boxout.module.css";

interface BoxoutProps {
  boxout: Boxout;
}

const BoxoutComponent = ({ boxout }: BoxoutProps) => {
  return (
    <div
      className={`${styles.boxout} ${
        boxout.body?.html ? styles.withContent : null
      }`}
    >
      <div className={styles.boxoutImageWrapper}>
        <div
          className={styles.boxoutImage}
          style={{
            backgroundImage: `url(${
              boxout.backgroundImage?.url ||
              "http://via.placeholder.com/1024x439"
            })`,
          }}
        />
        <div className={styles.boxoutCircleWrapper}>
          <div className={styles.boxoutCircleContent}>
            <div className={styles.boxoutTitle}>{boxout.title}</div>
            <div className={styles.boxoutLargeText}>{boxout.largeText}</div>
            <div className={styles.boxoutContent}>{boxout.content}</div>
          </div>
        </div>
      </div>

      {boxout.body?.html && (
        <div
          className={styles.boxoutBody}
          dangerouslySetInnerHTML={{ __html: boxout.body?.html }}
        />
      )}
    </div>
  );
};

export default BoxoutComponent;
