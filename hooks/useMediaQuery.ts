import { useState, useCallback, useEffect } from 'react';

/**
 * It returns a boolean value that indicates whether the current viewport width is greater than or
 * equal to the width passed in as an argument.
 * @param {number} width - number - The max width to check for.
 * @returns A boolean value that is true if the media query is met.
 */
export const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    if (!e.matches) {
      setTargetReached(false);
    }
    
    setTargetReached(true);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener('change', (e: MediaQueryListEvent) => updateTarget(e));

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener('change', (e: MediaQueryListEvent) => updateTarget(e))
  }, []);

  return targetReached;
};