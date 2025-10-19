import { BrowserRouter } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
