import { Boxout } from "generated";
import styles from "./Boxout.module.css";

interface BoxoutProps {
  boxout: Boxout;
}

const BoxoutComponent = ({ boxout }: BoxoutProps) => {
  const isPdf = window.location.href.indexOf("pdfme=true") > -1;
  if (isPdf && !boxout?.body?.html) {
    return <div />;
  }

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
              `http://via.placeholder.com/${
                boxout.body?.html ? "554x439" : "1024x439"
              }`
            })`,
          }}
        />
        <div className={styles.boxoutCircleWrapper}>
          <div className={styles.boxoutCircleContent}>
            <div className={styles.boxoutTitle}>
              {boxout.title?.replace(/'/g, "’")}
            </div>
            <div className={styles.boxoutLargeText}>
              {boxout.largeText?.replace(/'/g, "’")}
            </div>
            <div
              className={styles.boxoutContent}
              dangerouslySetInnerHTML={{
                __html: boxout.content?.replace(/'/g, "’"),
              }}
              style={{ marginTop: boxout.largeText ? null : "16px" }}
            />
          </div>
        </div>
      </div>

      {boxout.body?.html && (
        <div
          className={styles.boxoutBody}
          dangerouslySetInnerHTML={{
            __html: boxout.body?.html?.replace(/'/g, "’"),
          }}
        />
      )}
    </div>
  );
};

export default BoxoutComponent;
