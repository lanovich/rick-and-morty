import { categoriesMap, CategoryPortal, Container } from "@/shared";
import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <div>
      <h1>Главная</h1>
      <Container direction="row">
        {Object.entries(categoriesMap).map(
          ([categoryName, { title, portalImg, route }]) => (
            <Link key={categoryName} to={route}>
              <CategoryPortal title={title} img={portalImg} />
            </Link>
          )
        )}
      </Container>
    </div>
  );
};
