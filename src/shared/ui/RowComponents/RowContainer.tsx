import styles from "./RowComponents.module.css";
import { ReactNode } from "react";

interface RowWrapperProps {
  onClick?: () => void;
  children: ReactNode;
}

export const RowWrapper = ({ onClick, children }: RowWrapperProps) => (
  <div
    className={styles.row}
    onClick={onClick}
    role={onClick ? "button" : undefined}
  >
    {children}
  </div>
);
