import { Episode } from "@/shared/types";
import { LinksGrid } from "@/shared/ui";
import { ROUTES } from "@/shared/constants";
import styles from "./EpisodeCard.module.css";

interface Props {
  item: Episode;
}

export const EpisodeCard = ({ item }: Props) => {
  const characters = Array.isArray(item.characters) ? item.characters : [];
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h2 className={styles.name}>{item.name}</h2>
        <p className={styles.sub}>
          <strong>Код:</strong> {item.episode}
        </p>
        <p className={styles.sub}>
          <strong>Дата выхода:</strong> {item.air_date}
        </p>

        {characters?.length > 0 && (
          <LinksGrid
            links={characters.map((url) => ({
              id: url.match(/\/(\d+)$/)?.[1] || url,
            }))}
            routeBase={ROUTES.characters}
            label="Персонажи"
          />
        )}
      </div>
    </div>
  );
};
