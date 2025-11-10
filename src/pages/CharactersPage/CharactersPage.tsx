import { useRickAndMortyData } from "@/shared/lib";
import { useState } from "react";
import { List } from "@/shared";
import { useSortByDate } from "@/shared/lib";
import styles from "./CharactersPage.module.css";
import { FilterSortControls } from "@/widgets";
import { CharacterRow } from "@/entities/character/ui";
import { Character } from "@/entities/character/model";

const CharactersPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [query, setQuery] = useState("");

  const {
    data: characters,
    isLoading,
    isError,
    errorMessage,
    hasMore,
  } = useRickAndMortyData<Character>("character", pageNumber, query);

  const {
    sortedItems: sortedCharacters,
    sortOrder,
    toggleSort,
  } = useSortByDate<Character>(characters);

  return (
    <div className={styles.charactersPage}>
      <FilterSortControls
        query={query}
        setQuery={setQuery}
        sortOrder={sortOrder}
        setPageNumber={setPageNumber}
        toggleSort={toggleSort}
        placeholder="Поиск персонажей..."
        sortLabel="По дате появления"
      />

      <List
        isLoading={isLoading}
        error={errorMessage || isError}
        hasMore={hasMore}
        onLoadMore={() => setPageNumber((p) => p + 1)}
      >
        {sortedCharacters.map((character) => (
          <CharacterRow key={character.id} character={character} />
        ))}
      </List>
    </div>
  );
};

export default CharactersPage;
