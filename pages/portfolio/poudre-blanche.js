'use strict'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/components.module.css'
import { motion } from 'framer-motion'

import Layout from '../../components/Layout'
import SectionHeader from '../../components/SectionHeader'
import SectionContainer from '../../components/SectionContainer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hugo Vanhove | Poudre Blanche</title>
        <meta name="description" content="Le projet Poudre Blanche réalisé par Hugo Vanhove. Un projet dans lequel vous retrouverez un logo ainsi qu'un site." />
      </Head>
      <Layout path="portfolio">
        <SectionHeader title="Poudre Blanche" />
        
        <SectionContainer>
          <div className={styles.text}>
            <h2>Logo</h2>
            <p>Création d&apos;un logo pour le restaurant fictif Poudre Blanche.</p>
            <div className={styles.infos}>
              <p><span>Date</span>11 déc. 2020</p>
              <p><span>Projet</span>Scolaire</p>
              <p><span>Durée</span>2 jours</p>
              <p><span>Logiciel</span>Illustrator</p>
            </div>
            <h3>Concept</h3>
            <p>Le concept du logo est la combinaison des lettres P et B. Logo auquel on peut appliquer une rotation de -90 deg pour que cela forme une brioche.</p>
          </div>
          <div className={`${styles.imgs} ${styles.flex_2}`} >
          <motion.div 
              initial={{y: 400, opacity: 0}}
              animate={{y:0, opacity:1}}
              transition={{duration: .25,delay: .2}}
              className={styles.img} >
              <img src="/img/poudre-logo-1.webp" alt='Le logo Poudre Blanche en forme de P et B en noir.' />
            </motion.div>
            <motion.div 
              initial={{y: 400, opacity: 0}}
              animate={{y:0, opacity:1}}
              transition={{duration: .25,delay: .3}}
              className={styles.img} >
              <img src="/img/poudre-logo-2.webp" alt='Le logo Poudre Blanche avec forme de brioche en noir.' />
            </motion.div>
            <motion.div 
              initial={{y: 400, opacity: 0}}
              animate={{y:0, opacity:1}}
              transition={{duration: .25,delay: .4}}
              className={styles.img} >
              <img src="/img/poudre-logo-3.webp" alt='Le logo Poudre Blanche en forme de P et B en jaune sur un fond vert.' />
            </motion.div>
            <motion.div 
              initial={{y: 400, opacity: 0}}
              animate={{y:0, opacity:1}}
              transition={{duration: .25,delay: .5}}
              className={styles.img} >
              <img src="/img/poudre-logo-4.webp" alt='Le logo Poudre Blanche avec forme de brioche en jaune sur un fond vert.' />
            </motion.div>
          </div>
        </SectionContainer>
        <SectionContainer>
          <div className={styles.text}>
            <h2>Landing Page</h2>
            <p>Création d&apos;un site pour le restaurant fictif Poudre Blanche.</p>
            <div className={styles.infos}>
              <p><span>Date</span>18 déc. 2020</p>
              <p><span>Projet</span>Perso</p>
              <p><span>Durée</span>2 jours</p>
              <p><span>Technologie</span>HTML, CSS, PHP, Javascript</p>
            </div>
            <h3>Fonctionnalités</h3>
            <p>- Système multilingue ( FR / EN )</p>
            <p>- Carrousel avec des avis clients</p>
          </div>
          <div className={styles.imgs} >
            <motion.div 
              initial={{y: 400, opacity: 0}}
              animate={{y:0, opacity:1}}
              transition={{duration: .25,delay: .6}}
              className={styles.img} >
              <img src="/img/poudre-website.webp" alt="Une image du site internet que j'ai réalisé pour mon projet Rosella Tea" />
            </motion.div>
          </div>
        </SectionContainer>
      </Layout>
    </>
  )
}