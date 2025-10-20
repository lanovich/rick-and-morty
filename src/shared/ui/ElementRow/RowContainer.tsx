import styles from "./ElementRow.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
  direction?: "row" | "column";
  gap?: string | number;
}

export const RowContainer = ({
  children,
  className,
  direction = "row",
  gap,
}: Props) => {
  return (
    <div
      className={`${styles.row} ${className || ""}`}
      style={{
        flexDirection: direction,
        gap: gap,
      }}
    >
      {children}
    </div>
  );
};
