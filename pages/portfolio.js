'use strict'
import Head from 'next/head'
import styles from '../styles/portfolio.module.css'

import Layout from '../components/Layout'
import Section from '../components/Section'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio de Hugo Vanhove - Développeur Fullstack Junior</title>
        <meta name="description" content="Le portfolio de Hugo Vanhove, vous pourrez voir tous les projets de ce jeune développeur." />
      </Head>

      <Layout path="portfolio">
        <section className={styles.headline}>
            <h1><a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/hugo-code/">Hugo Vanhove</a></h1>
            <p>Développeur Javascript (React, Next, Node, Electron)</p>
            <p>Étudiant chez MyDigitalSchool Paris</p>
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
