import { Character, LocationType, Episode } from "@/shared/types";
import { RowContainer } from "./RowContainer";
import styles from "./ElementRow.module.css";
import { ROUTES } from "@/shared/constants";
import { AppLink, isCharacter, isEpisode, isLocation } from "@/shared";

interface Props {
  item: Character | LocationType | Episode;
  className?: string;
}

export const ElementRow = ({ item, className }: Props) => {
  const linkTo = isCharacter(item)
    ? `${ROUTES.characters}/${item.id}`
    : isLocation(item)
    ? `${ROUTES.locations}/${item.id}`
    : isEpisode(item)
    ? `${ROUTES.episodes}/${item.id}`
    : "#";

  return (
    <RowContainer className={className}>
      <AppLink to={linkTo} className={styles.content}>
        {"image" in item && item.image && (
          <img src={item.image} alt="avatar" className={styles.avatar} />
        )}

        <div className={styles.info}>
          <p className={styles.title}>{item.name}</p>

          {isCharacter(item) && (
            <div className={styles.details}>
              <p className={styles.sub}>Статус: {item.status}</p>
              <p className={styles.sub}>Раса: {item.species}</p>
              <p className={styles.sub}>Пол: {item.gender}</p>
            </div>
          )}

          {isLocation(item) && (
            <div className={styles.details}>
              <p className={styles.sub}>Тип: {item.type}</p>
              <p className={styles.sub}>Измерение: {item.dimension}</p>
            </div>
          )}

          {isEpisode(item) && (
            <div className={styles.details}>
              <p className={styles.sub}>Код: {item.episode}</p>
              <p className={styles.sub}>Дата выхода: {item.air_date}</p>
            </div>
          )}
        </div>
      </AppLink>
    </RowContainer>
  );
};
