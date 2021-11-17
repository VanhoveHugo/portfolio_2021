'use strict'
import Head from 'next/head'
import styles from '../styles/components.module.css'
import Typewriter from 'typewriter-effect'

import Layout from '../components/Layout'

import { IoDesktopOutline, IoCodeSlashOutline, IoFolderOpenOutline, IoCompassOutline, IoHelpBuoyOutline, IoRocketOutline, IoChevronDownOutline } from 'react-icons/io5'

export default function Index() {
  return (
    <>
      <Head>
        <title>Hugo Vanhove | Développeur JavaScript Junior</title>
        <meta name="description" content="Portfolio de Hugo Vanhove, développeur web Javascript spécialisé Next et Node avec une aspiration pour la cyber sécurité." />
      </Head>
      <Layout path="index">
        <div className={styles.container}>
          <section className={styles.hero}>
            <strong>Développeur 
              <Typewriter 
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  strings: [
                    'Node',
                    'Next',
                    'React'
                  ]
                }}
              />
            </strong>
            <h1>Hugo Vanhove</h1>
            <div className={styles.scroll}>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="101" viewBox="0 0 50 101">
                <g id="Rectangle_17" data-name="Rectangle 17" fill="none" stroke="#000" strokeWidth="2">
                  <rect width="50" height="101" rx="25" stroke="none"/>
                  <rect x="1" y="1" width="48" height="99" rx="24" fill="none"/>
                </g>
              </svg>
              <IoChevronDownOutline className={styles.scrollAnim} />
            </div>
          </section>
          <section className={styles.about}>
            <h2>Présentation</h2>
            <p>Actuellement étudiant à <a rel='noreferrer noopener' href="https://www.mydigitalschool.com/" target='_blank' >MyDigitalSchool</a> Paris, je suis passioné par le développement.
            </p>
            <p>Je suis un <strong>Développeur FullStack</strong> Javascript Junior.</p>
            <p>J&apos;apprends tous les jours de bonnes pratiques ou de nouvelles methodes pour mieux coder.</p>
            <p>Je maitrise les languages de programmations: <strong>HTML, CSS, BASH, GIT, SQL, Python, Javascript, NodeJS, NextJS et ReactJS.</strong></p>
          </section>         
          <section className={styles.services}>
            <h2>Services</h2>
            <div className={styles.flex3}>
              <div>
                <IoDesktopOutline />
                <h3>cross-plateforme</h3>
                <p>Compatible avec tous les supports web.</p>
              </div>
              <div>
                <IoCodeSlashOutline />
                <h3>développement web</h3>
                <p>Création de site sur-mesure repondant aux besoins des clients</p>
              </div>
              <div>
                <IoFolderOpenOutline />
                <h3>Projets web</h3>
                <p>Landing page, site vitrine, application web.</p>
              </div>
              <div>
                <IoCompassOutline />
                <h3>Référencement</h3>
                <p>Code optimiser pour le référencement naturel</p>
              </div>
              <div>
                <IoHelpBuoyOutline />
                <h3>Accompagnement</h3>
                <p>Je gère entièrement les projets en assurant une communication constante</p>
              </div>
              <div>
                <IoRocketOutline />
                <h3>Maintenance web</h3>
                <p>Gestion d'hébérgement, garanti d'accessibilité, mises à jour de sécurité</p>
              </div>
            </div>
          </section>
          {/* <section className={styles.contact}>
            <h2>Contact</h2>
            <p>Démarrons un projet ensemble, n'hésitez pas à me contacter sur <a rel='noreferrer noopener' href="https://www.linkedin.com/in/hugo-code/" target='_blank' >LinkedIn</a></p>
          </section> */}
        </div>
      </Layout>
    </>
  )
}
