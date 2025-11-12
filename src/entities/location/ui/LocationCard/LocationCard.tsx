import { LocationType } from "@/entities/location/model";
import { LinksGrid } from "@/shared/ui";
import { ROUTES } from "@/shared/constants";
import styles from "./LocationCard.module.css";

interface Props {
  item: LocationType;
}

export const LocationCard = ({ item }: Props) => {
  const residents = Array.isArray(item.residents) ? item.residents : [];
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h2 className={styles.name}>{item.name}</h2>
        <p className={styles.sub}>
          <strong>Тип:</strong> {item.type}
        </p>
        <p className={styles.sub}>
          <strong>Измерение:</strong> {item.dimension}
        </p>

        {residents?.length > 0 && (
          <LinksGrid
            links={residents.map((url) => ({
              id: url.match(/\/(\d+)$/)?.[1] || url,
            }))}
            routeBase={ROUTES.characters}
            label="Жители"
          />
        )}
      </div>
    </div>
  );
};
