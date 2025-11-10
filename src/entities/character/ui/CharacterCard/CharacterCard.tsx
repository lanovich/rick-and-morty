import { Character } from "@/shared/types";
import { LinksGrid } from "@/shared/ui";
import { ROUTES } from "@/shared/constants";
import styles from "./CharacterCard.module.css";

interface Props {
  item: Character;
}

export const CharacterCard = ({ item }: Props) => {
  const episodes = Array.isArray(item.episode) ? item.episode : [];

  return (
    <div className={styles.card}>
      {item.image && (
        <img src={item.image} alt={item.name} className={styles.image} />
      )}

      <div className={styles.info}>
        <h2 className={styles.name}>{item.name}</h2>
        <p className={styles.sub}>
          <strong>Статус:</strong> {item.status}
        </p>
        <p className={styles.sub}>
          <strong>Раса:</strong> {item.species}
        </p>
        <p className={styles.sub}>
          <strong>Пол:</strong> {item.gender}
        </p>

        {item.type && (
          <p className={styles.sub}>
            <strong>Тип:</strong> {item.type}
          </p>
        )}
        {item.origin?.name && (
          <p className={styles.sub}>
            <strong>Происхождение:</strong> {item.origin.name}
          </p>
        )}
        {item.location?.name && (
          <p className={styles.sub}>
            <strong>Местоположение:</strong> {item.location.name}
          </p>
        )}

        {episodes.length > 0 && (
          <LinksGrid
            links={episodes.map((url) => ({
              id: url.match(/\/(\d+)$/)?.[1] || url,
            }))}
            routeBase={ROUTES.episodes}
            label="Эпизоды"
          />
        )}
      </div>
    </div>
  );
};
