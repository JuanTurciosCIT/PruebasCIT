import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'

import '@/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Creative Information Technologies</title>
        <meta name="description" content="CIT Landing" />
      </Head>
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
