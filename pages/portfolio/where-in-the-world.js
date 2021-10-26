'use strict'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../../styles/components.module.css'
import Layout from '../../components/Layout'
import Section from '../../components/SectionHeader'
import Container from '../../components/SectionContainer'

export default function Home() {
  return (
    <>
      <Head>
        <title>{"<Hugo /> N°4 Where In The World ?"}</title>
      </Head>

      <Layout path="index">
        <Section title="Where In The World ?">
          <h3>Node.js, MongoDB, Socket.io</h3>
        </Section>
        <Container>
          <p>Le but de crée ce site, était de comprendre les différentes functions tels que GetStaticProps... 
          <br />Puis m&apos;améliorer avec React, notamment en utilisant plusieurs type de &quot;Hook&quot;.</p>
          <a rel="noreferrer" href="https://github.com/VanhoveHugo/winw" target="_blank" className={styles.button}>
            ≥ Github
          </a>
          
          <div className={styles.img} >
            {/* <Image src={'#'} layout="responsive" alt='Une image de mes travaux' /> */}
          </div>

          <p className={styles.center}>Utilisation du LocalStorage pour stocker le thème noir/blanc.</p>

          <div className={styles.img} >
            {/* <Image src={'#'} layout="responsive" alt='Une image de mes travaux' /> */}
          </div>
          <p className={styles.center}>Système de recherche automatique et instantané.</p>
          <div className={styles.img} >
            {/* <Image src={'#'} layout="responsive" alt='Une image de mes travaux' /> */}
          </div>
          <p className={styles.center}>Fiche personnalisée via la base de données.</p>
          <div className={styles.img} >
            {/* <Image src={'#'} layout="responsive" alt='Une image de mes travaux' /> */}
          </div>
        </Container>
      </Layout>
    </>
  )
}
