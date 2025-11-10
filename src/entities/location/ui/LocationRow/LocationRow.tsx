import { LocationType } from "@/shared/types";
import { Attributes, LinksGrid, RowWrapper } from "@/shared";
import styles from "./LocationRow.module.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/shared/constants";

export const LocationRow = ({ location }: { location: LocationType }) => {
  const navigate = useNavigate();

  return (
    <RowWrapper onClick={() => navigate(`${ROUTES.locations}/${location.id}`)}>
      <div className={styles.info}>
        <div className={styles.mainDetails}>
          <div className={styles.basicInfo}>
            <p className={styles.name}>{location.name}</p>
            <Attributes
              attributes={{
                Тип: location.type,
                Измерение: location.dimension,
              }}
            />
          </div>
        </div>

        {location.residents.length > 0 && (
          <LinksGrid
            links={location.residents.map((url) => ({
              id: url.match(/\/(\d+)$/)?.[1] || url,
            }))}
            routeBase={ROUTES.characters}
            label="Жители"
          />
        )}
      </div>
    </RowWrapper>
  );
};
