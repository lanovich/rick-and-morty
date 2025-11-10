import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

export type Category = "character" | "location" | "episode";

export interface ApiResponse<T> {
  info?: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results?: T[];
  error?: string;
}

export const fetchRickAndMortyData = async <T>(
  category: Category,
  page: number,
  searchQuery?: string,
  cancelToken?: any
): Promise<ApiResponse<T>> => {
  const params: any = { page };
  if (searchQuery) params.name = searchQuery;

  const response = await axios.get<ApiResponse<T>>(`${BASE_URL}/${category}`, {
    params,
    cancelToken,
  });
  return response.data;
};

export const fetchRickAndMortyItem = async <T>(
  category: Category,
  id: number | string,
  cancelToken?: any
): Promise<T> => {
  const response = await axios.get<T>(`${BASE_URL}/${category}/${id}`, {
    cancelToken,
  });
  return response.data;
};
