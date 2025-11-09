import { Loader } from "lucide-react";
import styles from "./Loading.module.css";

interface LoadingProps {}

export const Loading = ({}: LoadingProps) => {
  return (
    <div className={styles.loading}>
      <Loader size={32} />
    </div>
  );
};
