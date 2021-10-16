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
            <MindsetBadges type="domestic" mindsets={mindsets} />
          </div>
          <div className={styles.mindsetRow}>
            <div className={styles.mindsetHeader}>International</div>

            <MindsetBadges type="international" mindsets={mindsets} />
          </div>
        </div>
      </div>
    </div>
  );
};

const MindsetBadges = ({ mindsets, type }) => {
  return (
    <div className={styles.mindsetBadges}>
      {mindsets
        .filter((item: any) => item.theType === type)
        .map((item: any) => {
          const link = `/mindsets/${item.head
            .replace(/ /g, "-")
            .toLowerCase()}`;
          return (
            <Link to={link} key={link} className={styles.mindsetBadge}>
              {item.head}
            </Link>
          );
        })}
    </div>
  );
};
export default Footer;
