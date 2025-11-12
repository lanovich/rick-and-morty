import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./providers";

createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <App />
  </AppProvider>
);
