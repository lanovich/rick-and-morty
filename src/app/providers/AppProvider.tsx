import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AuthProvider";

interface Props {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  return (
    <AuthProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </AuthProvider>
  );
};
