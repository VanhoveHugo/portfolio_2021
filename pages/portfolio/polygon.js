'use strict'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/components.module.css'
import { motion } from 'framer-motion'

import Layout from '../../components/Layout'
import SectionHeader from '../../components/SectionHeader'
import SectionContainer from '../../components/SectionContainer'

import website from '../../public/img/polygon-website.jpg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hugo Vanhove | Polygon</title>
        <meta name="description" content="Le projet Polygon réalisé par Hugo Vanhove. Un projet dans lequel vous retrouverez une application web." />
      </Head>
      <Layout path="portfolio">
        <SectionHeader title="Polygon RôlePlay" />
        <SectionContainer>
          <div className={styles.text}>
            <h2>Application Web</h2>
            <p>Création de la maquette et du développement de l'application web pour le serveur PolygonRP sur le jeu Garry's Mod.</p>
            <div className={styles.infos}>
              <p><span>Date</span>6 avr. 2021</p>
              <p><span>Projet</span>Perso</p>
              <p><span>Durée</span>1 semaine</p>
              <p><span>Technologie</span>HTML, SASS, Javascript, Node.js</p>
            </div>
            <p>Toute l'équipe ayant arrête le développement du serveur, j'ai donc cessé le projet.</p>
            <br />
            <h3>Fonctionnalités</h3>
            <p>- Espace Administration</p>
            <p>- Connexion entre le site et le jeu</p>
            <p>- Système d'inscription / connexion</p>
            <p>- Forum</p>
            <br />
            <h3>Librairies</h3>
            <p>- Express / Cors / Path</p>
            <p>- Multer / fs</p>
            <br />
            <h3>Base de données</h3>
            <p>- MariaDB</p>
          </div>
          <motion.div 
              initial={{y: 400, opacity: 0}}
              animate={{y:0, opacity:1}}
              transition={{duration: .25,delay: .2}}
              className={styles.img} >
              <Image src={website} layout="responsive" alt="Une image du site internet que j'ai réalisé pour le projet PolygonRp" />
            </motion.div>
        </SectionContainer>
      </Layout>
    </>
  )
}