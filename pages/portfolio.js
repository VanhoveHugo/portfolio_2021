'use strict'
import Head from 'next/head'
import styles from '../styles/components.module.css'

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
        <div className={styles.container}>
          <div className={styles.hero_pages}>
            <h1><a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/hugo-code/">Hugo Vanhove</a></h1>
            <p><strong>Développeur Javascript</strong> (React, Next, Node)</p>
            <p>Étudiant chez MyDigitalSchool</p>
          </div>
          <h2>Projets</h2>
          <div className={styles.flex3}>
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
              img="/img/witw.webp" />
            <Section 
              title="Polygon" 
              desc="Forum pour un jeu vidéo" 
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
              desc="Création d'une application web et un logo" 
              path="poudre-blanche" 
              delay=".5"
              img="/img/poudre.webp" />
            <Section 
              title="Rosella tea" 
              desc="Intégration web et un logo et une landing page" 
              path="rosella-tea" 
              delay=".6"
              img="/img/rosella.webp" />
            <Section 
              title="TOEIC" 
              desc="Mise en place d'un mailing" 
              path="toeic" 
              delay=".7"
              img="/img/toeic.webp" />
          </div>
          {/* <h2>Autres projets</h2> */}
          {/* <ul>
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
          </ul> */}
        </div>
      </Layout>
    </>
  )
}
