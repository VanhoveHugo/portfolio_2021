'use strict'
import Head from 'next/head'
import styles from '../styles/components.module.css'

import Layout from '../components/Layout'
import Section from '../components/Section'

// import youclone from '../public/img/youclone.webp'
import witw from '../public/img/witw.webp'
import polygon from '../public/img/polygon.webp'
import toeic from '../public/img/toeic.webp'
import rosella from '../public/img/rosella.webp'
import mdav from '../public/img/mdav.webp'
import poudre from '../public/img/poudre.webp'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Hugo Vanhove | Portfolio</title>
        <meta name="description" content="Les projets de Hugo Vanhove, développeur web JavaScript spécialisé Node et Next avec une aspiration pour le développment FullStack. Basé à Paris." />
      </Head>

      <Layout path="portfolio">
        <div className={styles.row_container}>
          <h1>Projets</h1>
          {/* <Section 
            title="YouClone" 
            desc="Clone de youtube" 
            path="youclone" 
            delay=".1"
            img={youclone} /> */}
          <Section 
            title="Where In The World ?" 
            desc="Intégration d'une API Rest" 
            path="where-in-the-world" 
            delay=".2"
            img={witw} />
          <Section 
            title="Polygon" 
            desc="Forum pour un jeu" 
            path="polygon" 
            delay=".3"
            img={polygon} />
          <Section 
            title="MDAV" 
            desc="Prise de rendez-vous" 
            path="maison-des-ados-virtuelle" 
            delay=".4"
            img={mdav} />
          <Section 
            title="Poudre Blanche" 
            desc="Logo et une landing page" 
            path="poudre-blanche" 
            delay=".5"
            img={poudre} />
          <Section 
            title="Rosella tea" 
            desc="Logo et une landing page" 
            path="rosella-tea" 
            delay=".6"
            img={rosella} />
          <Section 
            title="TOEIC" 
            desc="Mailing" 
            path="toeic" 
            delay=".7"
            img={toeic} />
          
          <h2>Autres projets</h2>
          <ul>
            <li>
              <h3>Intégration Web</h3>
            </li>
            <li>
              <a rel="noreferrer" href="https://codepen.io/HugoVanhove/full/oNLNwvZ" target='_blank'>Premier portfolio</a>
            </li>
            <li>
              <a rel="noreferrer" href="https://codepen.io/HugoVanhove/full/qBNNOBy" target='_blank'>Citation aléatoire</a>
            </li>
            <li>
              <a rel="noreferrer" href="https://codepen.io/HugoVanhove/full/poyMdNb" target='_blank'>Documentation</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Front-End</h3>
            </li>
            <li>
              <a rel="noreferrer" href="https://codepen.io/HugoVanhove/full/YzWWqPE" target='_blank'>Markdown</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Algorithmes</h3>
            </li>
            <li>
              <a rel="noreferrer" href="https://replit.com/@HugoCode1/Probability-Calculator#README.md" target='_blank'>Calculateur de probabilité</a>
            </li>
            <li>
              <a rel="noreferrer" href="https://replit.com/@HugoCode1/Time-Calculator#README.md" target='_blank'>Calculateur de temps</a>
            </li>
            <li>
              <a rel="noreferrer" href="https://replit.com/@HugoCode1/Arithmetic-Formatter#README.md" target='_blank'>Formateur arithmétique</a>
            </li>
          </ul>
        </div>
      </Layout>
    </>
  )
}
