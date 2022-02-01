'use strict'
import Head from 'next/head'

import Layout from '../components/Layout'

export default function Index() {
  return (
    <>
      <Head>
        <title>Contacter Hugo Vanhove - Développeur Fullstack Junior</title>
        <meta name="description" content="Pour contacter Hugo Vanhove c'est ici! Un développeur web qui est ouvert à toutes vos idées de projets digitaux." />
      </Head>
      <Layout path="contact">
        <iframe width="540" height="800" src="https://f0abb31f.sibforms.com/serve/MUIEAL5CH2PD-XxTz0ThU59y-EyG7VffkBZTiTAw-mmkcbkmdDo15_t-eC7-BuVCnnFpZc4r8xpN66x_4BCa8BSx-dH_8fKoXlds9HOBVZNXaCwhBYxdbybppEELnI9NncInS7F9lkSBlovNKbsLU3K5dWGzigQ2OE7ZW7xGBl1aNl3tOqtNzctaG5PUDcJPEAK1XzjtnlWu7Biz" frameborder="0" scrolling="auto" allowfullscreen style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%'}}></iframe>
      </Layout>
    </>
  )
}

  