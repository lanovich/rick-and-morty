import { Link, LinkProps } from "react-router-dom";
import styles from "./AppLink.module.css";

interface Props extends LinkProps {
  className?: string;
}

export const AppLink = ({ children, className, ...props }: Props) => {
  return (
    <Link {...props} className={`${styles.link} ${className || ""}`}>
      {children}
    </Link>
  );
};
