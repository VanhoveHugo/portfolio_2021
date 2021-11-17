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
        <title>Hugo Vanhove | Rosella Tea</title>
        <meta name="description" content="Le projet Rosella Tea réalisé par Hugo Vanhove. Un projet dans lequel vous retrouverez un logo ainsi qu'un site." />
      </Head>
      <Layout path="portfolio">
        <SectionHeader title="Rosella Tea" />
        
        <SectionContainer>
          <div className={styles.text}>
            <h2>Logo</h2>
            <p>Création d&apos;un logo pour le salon de thé fictif Rosella Tea.</p>
            <div className={styles.infos}>
              <p><span>Date</span>27 oct. 2020</p>
              <p><span>Projet</span>Scolaire</p>
              <p><span>Durée</span>3 jours</p>
              <p><span>Logiciel</span>Illustrator, Photoshop</p>
            </div>
            <h3>Concept</h3>
            <p>Le pictogramme représente une feuille de thé qui pousse dans la tasse.</p>
          </div>
          <div className={`${styles.imgs} ${styles.flex2}`} >
            <motion.div 
              initial={{y: 400, opacity: 0}}
              animate={{y:0, opacity:1}}
              transition={{duration: .25,delay: .2}}
              className={styles.img} >
              <img src="/img/rosella-logo-1.webp" alt='Le logo Rosella Tea en noir et blanc' />
            </motion.div>
            <motion.div 
              initial={{y: 400, opacity: 0}}
              animate={{y:0, opacity:1}}
              transition={{duration: .25,delay: .3}}
              className={styles.img} >
              <img src="/img/rosella-logo-2.webp" alt='Le logo Rosella Tea en couleur avec un fond blanc' />
            </motion.div>
            <motion.div 
              initial={{y: 400, opacity: 0}}
              animate={{y:0, opacity:1}}
              transition={{duration: .25,delay: .4}}
              className={styles.img} >
              <img src="/img/rosella-logo-3.webp" alt='Le logo Rosella Tea en couleur avec un fond bleu nuit' />
            </motion.div>
            <motion.div 
              initial={{y: 400, opacity: 0}}
              animate={{y:0, opacity:1}}
              transition={{duration: .25,delay: .5}}
              className={styles.img} >
              <img src="/img/rosella-logo-4.webp" alt='Un mockup du logo Rosella Tea sur une carte de visite' />
            </motion.div>
          </div>

        </SectionContainer>
        <SectionContainer>
          <div className={styles.text}>
            <h2>Landing Page</h2>
            <p>Création d&apos;un site pour le salon de thé fictif Rosella Tea.</p>
            <div className={styles.infos}>
              <p><span>Date</span>18 déc. 2020</p>
              <p><span>Projet</span>Perso</p>
              <p><span>Durée</span>2 jours</p>
              <p><span>Technologie</span>HTML, CSS, Javascript</p>
            </div>
          </div>
          <div className={styles.imgs} >
            <motion.div 
              initial={{y: 400, opacity: 0}}
              animate={{y:0, opacity:1}}
              transition={{duration: .25,delay: .6}}
              className={styles.img} >
              <img src="/img/rosella-website.webp" alt="Une image du site internet que j'ai réalisé pour mon projet Rosella Tea" />
            </motion.div>
          </div>
          
        </SectionContainer>
      </Layout>
    </>
  )
}