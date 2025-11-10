import { Episode } from "@/shared/types";
import { Attributes, LinksGrid, RowWrapper } from "@/shared";
import styles from "./EpisodeRow.module.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/shared/constants";

export const EpisodeRow = ({ episode }: { episode: Episode }) => {
  const navigate = useNavigate();

  const formattedDate = (() => {
    const parsedDate = new Date(episode.air_date);
    if (isNaN(parsedDate.getTime())) return episode.air_date;
    return new Intl.DateTimeFormat("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(parsedDate);
  })();

  const [seasonNumber, episodeNumber] = (() => {
    const match = episode.episode.match(/S(\d+)E(\d+)/i);
    if (!match) return ["-", "-"];
    const [, season, ep] = match;
    return [parseInt(season, 10).toString(), parseInt(ep, 10).toString()];
  })();

  return (
    <RowWrapper onClick={() => navigate(`${ROUTES.episodes}/${episode.id}`)}>
      <div className={styles.info}>
        <div className={styles.mainDetails}>
          <div className={styles.basicInfo}>
            <p className={styles.name}>{episode.name}</p>
            <Attributes
              attributes={{
                "Дата выхода": formattedDate,
              }}
            />
          </div>
          <div className={styles.locationInfo}>
            <Attributes
              color="white"
              attributes={{
                Сезон: seasonNumber,
                Эпизод: episodeNumber,
              }}
            />
          </div>
        </div>

        {episode.characters.length > 0 && (
          <LinksGrid
            links={episode.characters.map((url) => ({
              id: url.match(/\/(\d+)$/)?.[1] || url,
            }))}
            routeBase={ROUTES.characters}
            label="ID Персонажей"
          />
        )}
      </div>
    </RowWrapper>
  );
};
