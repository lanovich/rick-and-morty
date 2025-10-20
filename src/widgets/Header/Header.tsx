import { ROUTES } from "@/shared";
import styles from "./Header.module.css";
import { AppNavLink } from "@/shared";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <AppNavLink to="/" end>
          Главная
        </AppNavLink>
        <AppNavLink to={ROUTES.locations}>Локации</AppNavLink>
        <AppNavLink to={ROUTES.episodes}>Эпизоды</AppNavLink>
        <AppNavLink to={ROUTES.characters}>Персонажи</AppNavLink>
      </nav>
    </header>
  );
};
