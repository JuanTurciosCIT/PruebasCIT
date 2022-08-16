import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import Router from 'next/router';
import { useState, useEffect } from 'react';

import GlobalLoader from '@/shared/GlobalLoader';

import '@/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    }

    const end = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
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

  return (
    <>
      <Head>
        <title>Creative Information Technologies</title>
        <meta name="description" content="CIT Landing" />
      </Head>
      {
        loading && <GlobalLoader />
      }
      {/* <Header /> */}
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        {/* canonical={url} key={url} */}
        <Component {...pageProps} />
      </AnimatePresence>
    {/* <Footer /> */}
    </>
  )
}

export default MyApp
