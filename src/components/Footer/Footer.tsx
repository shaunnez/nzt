import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = ({ mindsets }: any) => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.headline}>
          Find out more about our other mindsets
        </div>
        <div className={styles.mindsets}>
          <div className={styles.mindsetRow}>
            <div className={styles.mindsetHeader}>Domestic</div>
            <div className={styles.mindsetBadges}>
              {mindsets
                .filter((item: any) => item.type === "domestic")
                .map((item: any) => {
                  const link = `/mindsets/${item.title
                    .replace(/ /g, "-")
                    .toLowerCase()}`;
                  return (
                    <Link to={link} key={link} className={styles.mindsetBadge}>
                      {item.title}
                    </Link>
                  );
                })}
            </div>
          </div>
          <div className={styles.mindsetRow}>
            <div className={styles.mindsetHeader}>International</div>
            <div className={styles.mindsetBadges}>
              {mindsets
                .filter((item: any) => item.type === "international")
                .map((item: any) => {
                  const link = `/mindsets/${item.title
                    .replace(/ /g, "-")
                    .toLowerCase()}`;
                  return (
                    <Link to={link} key={link} className={styles.mindsetBadge}>
                      {item.title}
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
