import { useState, useDeferredValue, useTransition, useCallback } from 'react';

interface UseDeferredSearchOptions<T> {
  items: T[];
  searchFn: (item: T, query: string) => boolean;
  debounceMs?: number;
}

export const useDeferredSearch = <T>({
  items,
  searchFn,
}: UseDeferredSearchOptions<T>) => {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();
  const deferredQuery = useDeferredValue(query);

  const filteredItems = items.filter(item => 
    deferredQuery === '' || searchFn(item, deferredQuery)
  );

  const handleSearch = useCallback((newQuery: string) => {
    startTransition(() => {
      setQuery(newQuery);
    });
  }, []);

  return {
    query,
    setQuery: handleSearch,
    filteredItems,
    isPending,
    isStale: query !== deferredQuery,
  };
};

export default useDeferredSearch;
