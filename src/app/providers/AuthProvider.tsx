import { useCallback, useMemo, ReactNode } from "react";
import { useLocalStorage } from "@/shared/lib";
import { AuthContext } from "@/shared/context";

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useLocalStorage<string | null>("user", null);

  const login = useCallback(
    (newUser: string, callback: Function) => {
      setUser(newUser);
      callback();
    },
    [setUser]
  );

  const logout = useCallback(
    (callback: Function) => {
      setUser(null);
      callback();
    },
    [setUser]
  );

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout]
  );

  return <AuthContext value={value}>{children}</AuthContext>;
};
