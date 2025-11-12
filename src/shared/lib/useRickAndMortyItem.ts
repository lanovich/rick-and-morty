import { useEffect, useState } from "react";
import { fetchRickAndMortyItem, Category } from "../api/rickAndMorty";
import { handleApiError } from "./helpers";

interface UseRickAndMortyItemReturn<T> {
  item?: T;
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
}

export const useRickAndMortyItem = <T>(
  category: Category | undefined,
  id: number | string | undefined
): UseRickAndMortyItemReturn<T> => {
  const [item, setItem] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  useEffect(() => {
    if (!category || !id) return;

    const fetchItem = async () => {
      setIsLoading(true);
      setIsError(false);
      setErrorMessage(undefined);

      try {
        const data = await fetchRickAndMortyItem<T>(category, id);
        setItem(data);
      } catch (err: any) {
        const errorResult = handleApiError(err);
        setIsError(errorResult.isError);
        setErrorMessage(errorResult.errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItem();
  }, [category, id]);

  return { item, isLoading, isError, errorMessage };
};
