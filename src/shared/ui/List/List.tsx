import { useRef, useEffect, ReactNode } from "react";
import { Container } from "../Container/Container";
import { Loading } from "@/shared/ui";

interface ListProps {
  children: ReactNode[];
  isLoading?: boolean;
  error?: boolean | string;
  hasMore?: boolean;
  onLoadMore?: () => void;
  gap?: string;
}

export const List = ({
  children,
  isLoading = false,
  error,
  hasMore = false,
  onLoadMore,
  gap = "0.5rem",
}: ListProps) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useRef<HTMLDivElement | null>(null);
  const onLoadMoreRef = useRef(onLoadMore);

  useEffect(() => {
    onLoadMoreRef.current = onLoadMore;
  }, [onLoadMore]);

  useEffect(() => {
    if (!hasMore || isLoading) return;
    const node = lastElementRef.current;
    if (!node) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && onLoadMoreRef.current) {
        onLoadMoreRef.current();
      }
    });

    observer.current.observe(node);

    return () => observer.current?.disconnect();
  }, [hasMore, isLoading, children.length]);

  return (
    <Container gap={gap}>
      {children.map((child, index) => {
        const isLast = index === children.length - 1;
        return (
          <div key={index} ref={isLast ? lastElementRef : null}>
            {child}
          </div>
        );
      })}

      {isLoading && !error && <Loading />}

      {error && (
        <div>
          {typeof error === "string" ? error : "Ошибка при загрузке данных"}
        </div>
        
      )}
    </Container>
  );
};
