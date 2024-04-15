import { useEffect, useRef } from 'react';

export function useScrollBottom(dependencies: any) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [dependencies]);

  return scrollRef;
}
