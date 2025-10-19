import styles from "./Container.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
  direction?: "row" | "column";
  gap?: string | number;
}

export const Container = ({
  children,
  className,
  direction = "column",
  gap,
}: Props) => {
  return (
    <div
      className={`${styles.container} ${className || ""}`}
      style={{
        flexDirection: direction,
        gap: gap,
      }}
    >
      {children}
    </div>
  );
};
