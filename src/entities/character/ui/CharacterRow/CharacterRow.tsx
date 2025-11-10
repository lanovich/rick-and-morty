import { Character } from "@/shared/types";
import { Avatar, Attributes, LinksGrid, RowWrapper } from "@/shared";
import styles from "./CharacterRow.module.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/shared/constants";

export const CharacterRow = ({ character }: { character: Character }) => {
  const navigate = useNavigate();

  return (
    <RowWrapper
      onClick={() => navigate(`${ROUTES.characters}/${character.id}`)}
    >
      <Avatar src={character.image} alt={character.name} />

      <div className={styles.info}>
        <div className={styles.mainDetails}>
          <div className={styles.basicInfo}>
            <p className={styles.name}>{character.name}</p>
            <Attributes
              attributes={{
                "Живой?": character.status,
                Раса: character.species,
                Пол: character.gender,
              }}
            />
          </div>

          <div className={styles.locationInfo}>
            <Attributes
              direction="column"
              color="white"
              attributes={{
                Происхождение: character.origin?.name || "",
                Локация: character.location?.name || "",
              }}
            />
          </div>
        </div>

        {character.episode.length > 0 && (
          <LinksGrid
            links={character.episode.map((url) => ({
              id: url.match(/\/(\d+)$/)?.[1] || url,
            }))}
            routeBase={ROUTES.episodes}
            label="Эпизоды"
          />
        )}
      </div>
    </RowWrapper>
  );
};
