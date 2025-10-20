import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialState: T | (() => T)) {
  const readValue = () => {
    try {
      const item = localStorage.getItem(key);
      if (item !== null) {
        return JSON.parse(item) as T;
      }
    } catch (e) {
      console.warn(`Ошибка чтения localStorage по ключу "${key}"`, e);
    }
    return typeof initialState === "function"
      ? (initialState as () => T)()
      : initialState;
  };

  const [value, setValue] = useState<T>(readValue);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn(`Ошибка записи localStorage по ключу "${key}"`, e);
    }
  }, [key, value]);

  return [value, setValue] as const;
}
