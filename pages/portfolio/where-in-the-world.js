'use strict'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/components.module.css'
import { motion } from 'framer-motion'

import Layout from '../../components/Layout'
import SectionHeader from '../../components/SectionHeader'
import SectionContainer from '../../components/SectionContainer'

import website1 from '../../public/img/witw-website-1.jpg'
import website2 from '../../public/img/witw-website-2.jpg'
import website3 from '../../public/img/witw-website-3.jpg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hugo Vanhove | Where In The World ?</title>
        <meta name="description" content="Le projet Where In The World ? réalisé par Hugo Vanhove. Un projet dans lequel vous retrouverez un site." />
      </Head>
      <Layout path="portfolio">
        <SectionHeader title="Where In The World ?" />        
        <SectionContainer>
          <div className={styles.text}>
            <h3>Application web</h3>
            <p>Création d&apos;une application web pour découvrir NextJS.</p>
            <div className={styles.infos}>
              <p><span>Date</span>26 oct. 2021</p>
              <p><span>Projet</span>Perso</p>
              <p><span>Durée</span>1 semaine</p>
              <p><span>Technologie</span>HTML, SASS, Javascript, Next.js</p>
            </div>
            <p>J&apos;ai mis 1 semaine pour apprendre NextJS, les Hooks React et intégrer <a rel="noreferrer noopener" href="https://restcountries.com/" target="_blank" className={styles.extern_link}>l&apos;APi</a>.</p>
            <br />
            <h3>Fonctionnalités</h3>
            <p>- Barre de recherche</p>
            <p>- Système de filtre par continent</p>
            <p>- Gestion du theme ( light / dark mode )</p>
          </div>
          <div className={styles.imgs} >
            <motion.div 
              initial={{y: 400, opacity: 0}}
              animate={{y:0, opacity:1}}
              transition={{duration: .25,delay: .2}}
              className={styles.img} >
              <Image src={website1} layout="responsive" alt="Une image de la page d'accueil du site pour le projet 'Where In The World ?' avec le thème sombre." />
            </motion.div>
            <motion.div 
              initial={{y: 400, opacity: 0}}
              animate={{y:0, opacity:1}}
              transition={{duration: .25,delay: .3}}
              className={styles.img} >
              <Image src={website2} layout="responsive" alt="Une image de la page d'accueil du site pour le projet 'Where In The World ?' avec le thème clair." />
            </motion.div>
            <motion.div 
              initial={{y: 400, opacity: 0}}
              animate={{y:0, opacity:1}}
              transition={{duration: .25,delay: .4}}
              className={styles.img} >
              <Image src={website3} layout="responsive" alt="Une image de la page d'un des pays du site pour le projet Where In The World ? avec le theme clair" />
            </motion.div>
          </div>
        </SectionContainer>
      </Layout>
    </>
  )
}