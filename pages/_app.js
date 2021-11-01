'use strict'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router}) {
  const url = `https://http://localhost:3000${router.route}`

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/ico" />
      </Head>
      <DefaultSeo
          openGraph={{
              type: 'website',
              locale: 'fr',
              url: url,
          }}
      />
      <AnimatePresence 
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
        >
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
