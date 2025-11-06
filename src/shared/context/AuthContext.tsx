import { use } from "react";
import { createContext } from "react";

interface AuthContextType {
  user: string | null;
  login: (newUser: string, callback: Function) => void;
  logout: (callback: Function) => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => {
  return use(AuthContext);
};
