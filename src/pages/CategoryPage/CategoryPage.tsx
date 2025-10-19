import { useLocation, useParams, useNavigate } from "react-router-dom";
import { Container, ElementRow } from "@/shared/ui";
import { categoriesMap, CategoryName } from "@/shared";

import styles from "./CategoryPage.module.css"

export const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  if (!categoryName || !(categoryName in categoriesMap)) {
    return <div>Категория не найдена</div>;
  }

  const key = categoryName as CategoryName;
  const data = categoriesMap[key].data;
  const categoryTitle = categoriesMap[key].title;

  const searchParams = new URLSearchParams(location.search);
  const sortOrder = searchParams.get("sort") === "desc" ? "desc" : "asc";

  const sortedData = [...data].sort((a, b) => {
    const dateA = new Date(a.created).getTime();
    const dateB = new Date(b.created).getTime();
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  const toggleSort = () => {
    const newSort = sortOrder === "asc" ? "desc" : "asc";
    searchParams.set("sort", newSort);
    navigate({ search: searchParams.toString() });
  };

  return (
    <div>
      <h1>{categoryTitle}</h1>
      <button onClick={toggleSort} className={styles.buttonSort}>
        Сортировать по дате {sortOrder === "asc" ? "⬇" : "⬆"}
      </button>
      <Container gap="0.125rem">
        {sortedData.map((item) => (
          <ElementRow key={item.id} item={item} />
        ))}
      </Container>
    </div>
  );
};
