import { useParams, useNavigate } from "react-router-dom";
import { Button, categoriesMap, Container, ElementCard } from "@/shared";
import styles from "./ElementPage.module.css";

const ElementPage = () => {
  const { categoryName, elementId } = useParams<{
    categoryName: string;
    elementId: string;
  }>();
  const navigate = useNavigate();

  let item;
  if (categoryName === "characters") {
    item = categoriesMap.characters.data.find(
      (c) => c.id === Number(elementId)
    );
  } else if (categoryName === "locations") {
    item = categoriesMap.locations.data.find((l) => l.id === Number(elementId));
  } else if (categoryName === "episodes") {
    item = categoriesMap.episodes.data.find((e) => e.id === Number(elementId));
  }

  if (!item) return <div>Элемент не найден</div>;

  return (
    <Container className={styles.wrapper}>
      <Button onClick={() => navigate(-1)}>Назад</Button>
      <ElementCard item={item} />
    </Container>
  );
};

export default ElementPage;
