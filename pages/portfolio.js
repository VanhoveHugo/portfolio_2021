'use strict'
import Head from 'next/head'
import styles from '../styles/portfolio.module.css'

import Layout from '../components/Layout'
import Section from '../components/Section'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Hugo Vanhove | Portfolio</title>
        <meta name="description" content="La page projets du portfolio de Hugo Vanhove." />
      </Head>

      <Layout path="portfolio">
        <section className={styles.headline}>
          <h1><a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/hugo-code/">Hugo Vanhove</a></h1>
          <p>Développeur Javascript (React, Next, Node, Electron)</p>
          <p>Étudiant chez MyDigitalSchool</p>
        </section>
        <section>
          <h2>Projets</h2>
          <div className={styles.flex3}>
            <Section 
              title="YouClone" 
              desc="Clone de youtube" 
              path="youclone" 
              delay=".1"
              img="/img/youclone.webp" />
            <Section 
              title="Where In The World ?" 
              desc="Intégration d'une API Rest" 
              path="where-in-the-world" 
              delay=".2"
              img="/img/witw.webp" />
            <Section 
              title="Polygon" 
              desc="Forum pour un jeu" 
              path="polygon" 
              delay=".3"
              img="/img/polygon.webp" />
            <Section 
              title="MDAV" 
              desc="Prise de rendez-vous" 
              path="maison-des-ados-virtuelle" 
              delay=".4"
              img="/img/mdav.webp" />
            <Section 
              title="Poudre Blanche" 
              desc="Logo et une landing page" 
              path="poudre-blanche" 
              delay=".5"
              img="/img/poudre.webp" />
            <Section 
              title="Rosella tea" 
              desc="Logo et une landing page" 
              path="rosella-tea" 
              delay=".6"
              img="/img/rosella.webp" />
            <Section 
              title="TOEIC" 
              desc="Mailing" 
              path="toeic" 
              delay=".7"
              img="/img/toeic.webp" />
          </div>  
        </section>
      </Layout>
    </>
  )
}
