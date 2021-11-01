'use strict'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/components.module.css'
import { motion } from 'framer-motion'

import Layout from '../../components/Layout'
import SectionHeader from '../../components/SectionHeader'
import SectionContainer from '../../components/SectionContainer'

import mailing from '../../public/img/toeic-mailing.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hugo Vanhove | TOEIC</title>
        <meta name="description" content="Le projet TOEIC réalisé par Hugo Vanhove. Un projet dans lequel vous retrouverez un mailing." />
      </Head>
      <Layout path="portfolio">
        <SectionHeader title="TOEIC" />
        
        <SectionContainer>
          <div className={styles.text}>
            <h2>Mailing</h2>
            <p>Création d&apos;un mailing pour la certification TOEIC.</p>
            <div className={styles.infos}>
              <p><span>Date</span>30 sept. 2020</p>
              <p><span>Projet</span>Scolaire</p>
              <p><span>Durée</span>2 jours</p>
              <p><span>Technologie</span>XHTML1</p>
            </div>
          </div>
          <div className={styles.imgs} >
            <motion.div 
              initial={{y: 400, opacity: 0}}
              animate={{y:0, opacity:1}}
              transition={{duration: .25,delay: .2}}
              className={styles.img} >
              <Image src={mailing} layout="responsive" alt="Une image du mailing que j'ai réalisé pendant ma formation MyDigialSchool" />
            </motion.div>
          </div>
        </SectionContainer>
      </Layout>
    </>
  )
}