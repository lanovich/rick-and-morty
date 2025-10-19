import { Character, LocationType, Episode } from "@/shared/types";
import styles from "./ElementCard.module.css";
import { isCharacter, isLocation, isEpisode } from "@/shared";

interface Props {
  item: Character | LocationType | Episode;
}

export const ElementCard = ({ item }: Props) => {
  return (
    <div className={styles.card}>
      {"image" in item && item.image && (
        <img src={item.image} alt={item.name} className={styles.image} />
      )}
      <div className={styles.info}>
        <h2 className={styles.name}>{item.name}</h2>

        {isCharacter(item) && (
          <>
            <p className={styles.sub}>Статус: {item.status}</p>
            <p className={styles.sub}>Раса: {item.species}</p>
            <p className={styles.sub}>Пол: {item.gender}</p>
          </>
        )}

        {isLocation(item) && (
          <>
            <p className={styles.sub}>Тип: {item.type}</p>
            <p className={styles.sub}>Измерение: {item.dimension}</p>
          </>
        )}

        {isEpisode(item) && (
          <>
            <p className={styles.sub}>Код: {item.episode}</p>
            <p className={styles.sub}>Дата выхода: {item.air_date}</p>
          </>
        )}
      </div>
    </div>
  );
};
