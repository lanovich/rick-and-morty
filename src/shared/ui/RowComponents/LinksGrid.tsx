import { AppLink } from "@/shared";
import { useState } from "react";
import styles from "./RowComponents.module.css";

interface LinkItem {
  id: string | number;
  label?: string;
}

export const LinksGrid = ({
  links,
  routeBase,
  showMoreLimit = 10,
  label,
}: {
  links: LinkItem[];
  routeBase: string;
  showMoreLimit?: number;
  label?: string;
}) => {
  const [showAll, setShowAll] = useState(false);
  const displayedLinks = showAll ? links : links.slice(0, showMoreLimit);

  return (
    <div className={styles.episodesWrapper}>
      {label && <p className={styles.linksLabel}>{label}</p>}

      <div className={styles.episodes}>
        {displayedLinks.map((link) => (
          <AppLink
            key={link.id}
            to={`${routeBase}/${link.id}`}
            className={styles.episodeSquare}
            title={link.label || link.id.toString()}
            onClick={(e) => e.stopPropagation()}
          >
            {link.label || link.id}
          </AppLink>
        ))}

        {links.length > showMoreLimit && (
          <button
            className={styles.moreEpisodesButton}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowAll((prev) => !prev);
            }}
          >
            {showAll ? "-" : `+${links.length - showMoreLimit}`}
          </button>
        )}
      </div>
    </div>
  );
};
