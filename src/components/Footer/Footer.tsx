import { Link } from "react-router-dom";

import { ReactComponent as DomesticIcon } from "assets/domestic.svg";
import { ReactComponent as InternationalIcon } from "assets/international.svg";
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
            <div className={styles.mindsetHeader}>
              <DomesticIcon />
              Domestic
            </div>
            <MindsetBadges type="domestic" mindsets={mindsets} />
          </div>
          <div className={styles.mindsetRow}>
            <div className={styles.mindsetHeader}>
              <InternationalIcon />
              International
            </div>

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
        .map((item: any, i: number) => {
          const link = `/mindsets/${item.head
            .replace(/ /g, "-")
            .toLowerCase()}`;
          return (
            <Link
              to={link}
              key={`${link}-${i}`}
              className={`${styles.mindsetBadge} ${
                window.location.pathname.indexOf(link) > -1
                  ? styles.active
                  : null
              } ${item.enabled ? styles.enabled : styles.disabled} `}
              onClick={(e) => {
                if (!item.enabled) {
                  e.preventDefault();
                }
              }}
            >
              {item.head}
            </Link>
          );
        })}
    </div>
  );
};
export default Footer;
