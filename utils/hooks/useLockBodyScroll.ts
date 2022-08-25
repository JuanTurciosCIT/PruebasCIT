import { useLayoutEffect } from "react";

/**
 * When the component mounts, prevent scrolling on the body, and when the component unmounts, re-enable
 * scrolling on the body.
 */
export function useLockBodyScroll(): void {
  useLayoutEffect(() : () => void => {
    // Get original body overflow
    const originalStyle: string = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, []); // Empty array ensures effect is only run on mount and unmount
}