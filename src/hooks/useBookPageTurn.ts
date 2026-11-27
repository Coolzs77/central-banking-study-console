import { useEffect, useRef, useState } from 'react';

export type BookPageTurnDirection = 'book-turn-next' | 'book-turn-prev' | '';

/**
 * Triggers a transient CSS page-turn animation class when the active item changes
 * and its index moves forward or backward.
 */
export function useBookPageTurn(
  itemKey: string | number,
  currentIndex: number,
): BookPageTurnDirection {
  const [turnClass, setTurnClass] = useState<BookPageTurnDirection>('');
  const prevKeyRef = useRef<string | number>(itemKey);
  const prevIndexRef = useRef<number>(currentIndex);

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    const prevIndex = prevIndexRef.current;

    prevKeyRef.current = itemKey;
    prevIndexRef.current = currentIndex;

    if (prevKey === itemKey && prevIndex === currentIndex) {
      return;
    }

    if (currentIndex > prevIndex) {
      setTurnClass('book-turn-next');
    } else if (currentIndex < prevIndex) {
      setTurnClass('book-turn-prev');
    } else {
      setTurnClass('');
      return;
    }

    const timer = window.setTimeout(() => {
      setTurnClass('');
    }, 320);

    return () => {
      window.clearTimeout(timer);
    };
  }, [itemKey, currentIndex]);

  return turnClass;
}
