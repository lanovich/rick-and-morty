import { Header } from "@/widgets";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Loading } from "@/shared";
import styles from "./layout.module.css";

export const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense
          fallback={
            <div className={styles.loadingLayout}>
              <Loading />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
