import { Button, Input } from "@/shared/ui";
import React from "react";
import styles from "./FilterSortControls.module.css";

interface FilterSortControlsProps {
  query: string;
  setQuery: (value: string) => void;
  setPageNumber: (value: number) => void;
  sortOrder: "asc" | "desc";
  toggleSort: () => void;
  placeholder?: string;
  sortLabel?: string;
}

export const FilterSortControls: React.FC<FilterSortControlsProps> = ({
  query,
  setQuery,
  setPageNumber,
  sortOrder,
  toggleSort,
  placeholder = "Поиск...",
  sortLabel = "Сортировать",
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  return (
    <div className={styles.container}>
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
      />
      <Button onClick={toggleSort} variant="secondary">
        {sortLabel} {sortOrder === "asc" ? "⬇" : "⬆"}
      </Button>
    </div>
  );
};
