import { useRickAndMortyData } from "@/shared/lib";
import { useState, useMemo } from "react";
import { List } from "@/shared";
import { FilterSortControls } from "@/widgets";
import { LocationRow } from "@/entities/location/ui";
import { LocationType } from "@/shared/types";
import styles from "./LocationsPage.module.css";

const LocationsPage = () => {
  const [page, setPageNumber] = useState(1);
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const {
    data: locations,
    isLoading,
    isError,
    errorMessage,
    hasMore,
  } = useRickAndMortyData<LocationType>("location", page, query);

  const sortedLocations = useMemo(() => {
    return [...locations].sort((a, b) => {
      if (sortOrder === "asc") return a.name.localeCompare(b.name);
      return b.name.localeCompare(a.name);
    });
  }, [locations, sortOrder]);

  const toggleSort = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <div className={styles.locationsPage}>
      <FilterSortControls
        query={query}
        setQuery={setQuery}
        setPageNumber={setPageNumber}
        sortOrder={sortOrder}
        toggleSort={toggleSort}
        sortLabel="По названию"
      />

      <List
        isLoading={isLoading}
        error={errorMessage || isError}
        hasMore={hasMore}
        onLoadMore={() => setPageNumber((p) => p + 1)}
      >
        {sortedLocations.map((location) => (
          <LocationRow key={location.id} location={location} />
        ))}
      </List>
    </div>
  );
};

export default LocationsPage;
