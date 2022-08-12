import { useEffect, useState } from 'react'

/**
 * It returns a boolean value that indicates whether the media query matches the current viewport
 * @param {string} query - string
 * @returns A function that returns a boolean.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = () => setMatches(mediaQueryList.matches);

    listener();
    mediaQueryList.addListener(listener);
    
    return () => mediaQueryList.removeListener(listener);
  }, [query])

  return matches;
}