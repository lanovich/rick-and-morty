import styles from "./Button.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = ({
  children,
  className = "",
  variant = "primary",
  ...rest
}: Props) => {
  const buttonClass =
    styles.button +
    (variant === "secondary" ? ` ${styles.secondary}` : "") +
    (className ? ` ${className}` : "");

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
};
