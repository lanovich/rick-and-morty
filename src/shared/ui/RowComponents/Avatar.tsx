import styles from "./RowComponents.module.css";

export const Avatar = ({ src, alt }: { src?: string; alt: string }) =>
  src ? <img src={src} alt={alt} className={styles.avatar} /> : null;
