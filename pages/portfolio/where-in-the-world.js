'use strict'
import Head from 'next/head'
import styles from '../../styles/projets.module.css'
import { motion } from 'framer-motion'

import Layout from '../../components/Layout'
import SectionHeader from '../../components/SectionHeader'
import SectionContainer from '../../components/SectionContainer'

import { IoLogoGithub } from 'react-icons/io5'

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
            <p>Dans ce projet vous retrouverez une application web.</p>
            <p>Une intégration de <a rel="noreferrer noopener" href="https://restcountries.com/" target="_blank" className={styles.extern_link}>l&apos;API REST COUNTRIES</a></p>
            <div className={styles.infos}>
              <p><span>Date</span>26 oct. 2021</p>
              <p><span>Projet</span>Personnel</p>
              <p><span>Durée</span>1 semaine</p>
              <p><span>Technologie</span>HTML, SASS, NextJS</p>
              <p>
                <a target="_blank" rel="noreferrer noopener" className={styles.iconcta} href="https://github.com/VanhoveHugo/winw"><IoLogoGithub /></a>
              </p>
            </div>
            <p>J&apos;ai créé ce site pour m&apos;initier avec NextJS, 1 semaine est le temps que j&apos;ai mis pour prendre en main les bases du framework et réaliser le site.</p>
            <br />
            <h3>Fonctionnalités</h3>
            <p>- Intégration API REST</p>
            <p>- Barre de recherche</p>
            <p>- Filtre par continent</p>
            <p>- Gestion du thème ( light / dark mode )</p>
          </div>
          <div className={styles.imgs} >
            <motion.div 
              initial={{y: 400, opacity: 0}}
              animate={{y:0, opacity:1}}
              transition={{duration: .25,delay: .2}}
              className={styles.img} >
              <img src="/img/witw-website-1.webp" alt="Une image de la page d'accueil du site pour le projet 'Where In The World ?' avec le thème sombre." />
            </motion.div>
            <motion.div 
              initial={{y: 400, opacity: 0}}
              animate={{y:0, opacity:1}}
              transition={{duration: .25,delay: .3}}
              className={styles.img} >
              <img src="/img/witw-website-2.webp" alt="Une image de la page d'accueil du site pour le projet 'Where In The World ?' avec le thème clair." />
            </motion.div>
            <motion.div 
              initial={{y: 400, opacity: 0}}
              animate={{y:0, opacity:1}}
              transition={{duration: .25,delay: .4}}
              className={styles.img} >
              <img src="/img/witw-website-3.webp" alt="Une image de la page d'un des pays du site pour le projet Where In The World ? avec le theme clair" />
            </motion.div>
          </div>
        </SectionContainer>
      </Layout>
    </>
  )
}