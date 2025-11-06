import { Button, ROUTES } from "@/shared";
import styles from "./Header.module.css";
import { AppNavLink } from "@/shared";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/shared/context";

export const Header = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from || ROUTES.home;

  const handleClick = () => {
    if (user) {
      logout(() => {
        navigate(from);
      });
    }

    navigate(ROUTES.login);
  };

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

      <Button onClick={handleClick} variant={user ? "secondary" : "primary"}>
        {!user ? "Войти" : "Выйти"}
      </Button>
    </header>
  );
};
