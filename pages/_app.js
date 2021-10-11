import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router}) {
  const url = `https://http://localhost:3000${router.route}`

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <DefaultSeo
          titleTemplate="%s - James Wallis"
          openGraph={{
              type: 'website',
              locale: 'fr',
              url,
              description: 'Le portfolio de Hugo Code, développeur JavaScript.',
              site_name: 'Hugo Code | wallis.dev',
              images: [],
          }}
          canonical={url}
      />
      <AnimatePresence 
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
        >
        
        <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
