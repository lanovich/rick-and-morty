import { useEffect, useState, useRef } from "react";
import axios from "axios";
import {
  Category,
  ApiResponse,
  fetchRickAndMortyData,
} from "../api/rickAndMorty";
import { handleApiResponse, handleApiError } from "./helpers";

interface UseRickAndMortyDataReturn<T> {
  data: T[];
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
  hasMore: boolean;
}

export const useRickAndMortyData = <T>(
  category: Category,
  pageNumber: number,
  searchQuery?: string
): UseRickAndMortyDataReturn<T> => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [hasMore, setHasMore] = useState(true);

  const totalPagesRef = useRef<number | null>(null);
  const cancelTokenRef = useRef(axios.CancelToken.source());

  const resetData = () => {
    setData([]);
    setHasMore(true);
    totalPagesRef.current = null;
    cancelTokenRef.current.cancel("Новый поиск, предыдущий запрос отменён");
    cancelTokenRef.current = axios.CancelToken.source();
  };

  useEffect(() => {
    resetData();
  }, [category, searchQuery]);

  useEffect(() => {
    if (!category) return;
    if (totalPagesRef.current && pageNumber > totalPagesRef.current) return;

    const loadData = async () => {
      setIsLoading(true);
      setIsError(false);
      setErrorMessage(undefined);

      try {
        const response: ApiResponse<T> = await fetchRickAndMortyData(
          category,
          pageNumber,
          searchQuery,
          cancelTokenRef.current.token
        );

        const result = handleApiResponse(response, data, pageNumber);
        setData(result.data);
        setHasMore(result.hasMore);
        setIsError(result.isError);
        setErrorMessage(result.errorMessage);
        totalPagesRef.current = response.info?.pages || null;
      } catch (err: any) {
        const errorResult = handleApiError(err);
        setIsError(errorResult.isError);
        setErrorMessage(errorResult.errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [category, pageNumber, searchQuery]);

  return { data, isLoading, isError, errorMessage, hasMore };
};
