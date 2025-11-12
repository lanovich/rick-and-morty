import { useState, useMemo } from "react";

export const useSortByDate = <T extends { created?: string }>(
  items: T[],
  initialOrder: "asc" | "desc" = "asc"
) => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">(initialOrder);

  const toggleSort = () =>
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const dateA = a.created ? new Date(a.created).getTime() : 0;
      const dateB = b.created ? new Date(b.created).getTime() : 0;
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });
  }, [items, sortOrder]);

  return { sortedItems, sortOrder, toggleSort };
};
