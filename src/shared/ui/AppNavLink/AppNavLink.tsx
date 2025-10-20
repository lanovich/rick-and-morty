import { NavLink, NavLinkProps } from "react-router-dom";
import styles from "./AppNavLink.module.css";

export const AppNavLink = ({ children, ...props }: NavLinkProps) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        isActive ? `${styles.link} ${styles.active}` : styles.link
      }
    >
      {children}
    </NavLink>
  );
};
