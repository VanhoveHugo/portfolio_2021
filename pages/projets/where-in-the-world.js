import Head from 'next/head'
import Image from 'next/image'

import styles from '../../styles/components.module.css'
import Layout from '../../components/Layout'
import Section from '../../components/SectionHeader'
import Container from '../../components/SectionContainer'

import image1 from '../../public/img/winw1.webp'
import image2 from '../../public/img/winw2.webp'
import image3 from '../../public/img/winw3.webp'
import image4 from '../../public/img/winw4.webp'

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
          <h3>Next.js, Google API</h3>
          <p>Le but de crée ce site, était de comprendre les différentes functions tels que GetStaticProps... 
          <br />Puis m'améliorer avec React, notamment en utilisant plusieurs type de "Hook".</p>
          <a href="https://github.com/VanhoveHugo/winw" target="_blank" className={styles.button}>
            ≥ Github
          </a>
          
          <div className={styles.img} >
            <Image src={image1} layout="responsive" />
          </div>

          <p className={styles.center}>Utilisation du LocalStorage pour stocker le thème noir/blanc.</p>

          <div className={styles.img} >
            <Image src={image2} layout="responsive" />
          </div>
          <p className={styles.center}>Système de recherche automatique et instantané.</p>
          <div className={styles.img} >
            <Image src={image3} layout="responsive" />
          </div>
          <p className={styles.center}>Fiche personnalisée via la base de données.</p>
          <div className={styles.img} >
            <Image src={image4} layout="responsive" />
          </div>
        </Container>
      </Layout>
    </>
  )
}
