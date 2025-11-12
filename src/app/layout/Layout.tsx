import { Header } from "@/widgets";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Loading, ErrorBoundary } from "@/shared";
import styles from "./layout.module.css";

export const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <ErrorBoundary>
          <Suspense
            fallback={
              <div className={styles.loadingLayout}>
                <Loading />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
};
