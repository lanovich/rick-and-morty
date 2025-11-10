import { useRickAndMortyData } from "@/shared/lib";
import { useState } from "react";
import { Episode, List } from "@/shared";
import { useSortByDate } from "@/shared/lib";
import styles from "./EpsiodesPage.module.css";
import { FilterSortControls } from "@/widgets";
import { EpisodeRow } from "@/entities/episode/ui";

const EpisodesPage = () => {
  const [page, setPageNumber] = useState(1);
  const [query, setQuery] = useState("");

  const {
    data: episodes,
    isLoading,
    isError,
    errorMessage,
    hasMore,
  } = useRickAndMortyData<Episode>("episode", page, query);

  const {
    sortedItems: sortedEpisodes,
    sortOrder,
    toggleSort,
  } = useSortByDate<Episode>(episodes);

  return (
    <div className={styles.episodesPage}>
      <FilterSortControls
        query={query}
        setQuery={setQuery}
        sortOrder={sortOrder}
        toggleSort={toggleSort}
        placeholder="Поиск эпизодов..."
        setPageNumber={setPageNumber}
        sortLabel="По дате выхода"
      />

      <List
        isLoading={isLoading}
        error={errorMessage || isError}
        hasMore={hasMore}
        onLoadMore={() => setPageNumber((p) => p + 1)}
      >
        {sortedEpisodes.map((episode) => (
          <EpisodeRow key={episode.id} episode={episode} />
        ))}
      </List>
    </div>
  );
};

export default EpisodesPage;
