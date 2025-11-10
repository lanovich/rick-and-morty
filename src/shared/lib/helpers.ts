import axios from "axios";
import { ApiResponse } from "../api/rickAndMorty";

export const handleApiResponse = <T>(
  response: ApiResponse<T>,
  currentData: T[],
  page: number
): { data: T[]; hasMore: boolean; errorMessage?: string; isError: boolean } => {
  if (response.error) {
    return {
      data: page === 1 ? [] : currentData,
      hasMore: false,
      isError: true,
      errorMessage:
        response.error === "There is nothing here"
          ? "Упс, ничего не нашлось 😢"
          : response.error,
    };
  }

  return {
    data: [...currentData, ...(response.results || [])],
    hasMore: !!response.info?.next,
    isError: false,
    errorMessage: undefined,
  };
};

export const handleApiError = (
  err: any
): { errorMessage: string; isError: boolean } => {
  if (axios.isCancel(err)) return { errorMessage: "", isError: false };

  return {
    isError: true,
    errorMessage:
      err.response?.data?.error === "There is nothing here"
        ? "Упс, ничего не нашлось 😢"
        : err.message || "Ошибка при получении данных",
  };
};
