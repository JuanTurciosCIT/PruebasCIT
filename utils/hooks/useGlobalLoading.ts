import { Router } from "next/router";
import { useEffect, useState } from "react";

/**
 * It listens to the router events and sets the loading state to true when a route change starts and
 * false when it ends.
 * @returns A boolean value.
 */
export function useGlobalLoading(): boolean {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    }

    const end = () => {
      setLoading(false);
    }

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    }
  }, []);

  return loading;
}