'use strict'
import Head from 'next/head'
import styles from '../styles/components.module.css'
import Typewriter from 'typewriter-effect'

import Layout from '../components/Layout'
import { BiMailSend } from 'react-icons/bi'
import { BsFillMenuAppFill } from "react-icons/bs"
import { CgWebsite } from "react-icons/cg"


export default function Index() {
  return (
    <>
      <Head>
        <title>Hugo Vanhove | Développeur JavaScript Junior</title>
        <meta name="description" content="Hugo Vanhove, développeur web Javascript spécialisé Next et Node avec une aspiration pour la cyber sécurité." />
      </Head>
      <Layout path="index">
        <div className={styles.col_container}>
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
              <p>scroll</p>
            </div>
          </section>
          <section className={styles.about}>
            <h2>A propos</h2>
            <p>Actuellement étudiant à <a rel='noreferrer noopener' className={styles.extern_link} href="https://www.mydigitalschool.com/" target='_blank' >MyDigitalSchool</a> Paris, je suis passioné par le développement informatique.
            </p>
            <p>Je suis un <strong>Développeur FullStack</strong> Javascript Junior.</p>
            <p>J&apos;apprends tous les jours de bonnes pratiques ou de nouvelles methodes pour mieux coder.</p>
            <p>Je maitrise les languages de programmations: <strong>HTML, CSS, BASH, GIT, SQL, Python, Javascript, NodeJS, NextJS et ReactJS.</strong></p>
          </section>
          
          
          {/* Mon site avant mettre les images en webp : 6.13Mo
          Apres : 2.06Mo */}
          
          <section className={styles.services}>
            <h2>Services</h2>
            <div className={styles.services_row}>
              <div>
                <CgWebsite />
                <h3>Landing Page</h3>
              </div>
              <div>
                <BsFillMenuAppFill />
                <h3>Application Web</h3>
              </div>
              <div>
                <BiMailSend />
                <h3>Mailing</h3>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}
