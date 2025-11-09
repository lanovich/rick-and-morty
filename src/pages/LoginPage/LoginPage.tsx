import { FormEvent } from "react";
import { useAuth } from "@/shared/context";
import { Input } from "@/shared/ui/Input/Input";
import styles from "./LoginPage.module.css";
import { Button, Container } from "@/shared";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");

    if (typeof username === "string" && username.trim()) {
      const clearUsername = username.trim();
      login(clearUsername, () => {
        navigate(from, { replace: true });
      });
    }
  };

  return (
    <Container>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input name="username" type="text" placeholder="Введите логин" />

        <Button type="submit" className={styles.button}>
          Подтвердить вход
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
