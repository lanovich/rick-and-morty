import styles from "./CategoryPortal.module.css";

interface PortalProps {
  title: string;
  img: string;
  className?: string;
}

export const CategoryPortal = ({ title, img, className }: PortalProps) => {
  return (
    <div className={`${styles.portal} ${className || ""}`}>
      <img src={img} alt={title} className={styles.image} />
      <span className={styles.title}>{title}</span>
    </div>
  );
};
