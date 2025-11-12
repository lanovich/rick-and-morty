import styles from "./RowComponents.module.css";

interface AttributesProps {
  attributes: Record<string, string>;
  direction?: "row" | "column";
  color?: string;
  fontSize?: string;
}

export const Attributes = ({
  attributes,
  direction = "row",
  color = "#797979ff",
  fontSize,
}: AttributesProps) => (
  <div
    className={styles.attributes}
    style={{ flexDirection: direction, color, fontSize }}
  >
    {Object.entries(attributes).map(([key, value]) =>
      value ? (
        <p key={key} className={styles.attribute} style={{ color, fontSize }}>
          {key}: {value}
        </p>
      ) : null
    )}
  </div>
);
