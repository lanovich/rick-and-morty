import { useParams, useNavigate } from "react-router-dom";
import { Button, Container, Loading } from "@/shared";
import { useRickAndMortyItem } from "@/shared/lib";
import styles from "./ElementPage.module.css";
import { LocationCard } from "@/entities/location/ui";
import { CharacterCard } from "@/entities/character/ui";
import { EpisodeCard } from "@/entities/episode/ui";

const ElementPage = () => {
  const { categoryName, elementId } = useParams<{
    categoryName: string;
    elementId: string;
  }>();
  const navigate = useNavigate();

  const category =
    categoryName === "characters"
      ? "character"
      : categoryName === "locations"
      ? "location"
      : categoryName === "episodes"
      ? "episode"
      : undefined;

  const { item, isLoading, isError, errorMessage } = useRickAndMortyItem<any>(
    category,
    elementId
  );

  if (isLoading)
    return (
      <div className={styles.loading}>
        <Loading />
      </div>
    );
  if (isError)
    return <div>{errorMessage || "Ошибка при загрузке элемента"}</div>;
  if (!item) return <div>Элемент не найден</div>;

  return (
    <Container className={styles.wrapper}>
      <Button onClick={() => navigate(-1)}>Назад</Button>

      {category === "character" && <CharacterCard item={item} />}
      {category === "location" && <LocationCard item={item} />}
      {category === "episode" && <EpisodeCard item={item} />}
    </Container>
  );
};

export default ElementPage;
