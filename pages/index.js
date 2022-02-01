'use strict'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/index.module.css'
import Typewriter from 'typewriter-effect'

import Layout from '../components/Layout'

import { 
  IoDesktopOutline, 
  IoCodeSlashOutline, 
  IoFolderOpenOutline, 
  IoCompassOutline, 
  IoHelpBuoyOutline, 
  IoRocketOutline,
  IoCloudUploadOutline,
  IoBrush,
  IoConstruct,
  IoCloudy,
  IoBrowsers,
  IoLogoGithub } from 'react-icons/io5'

export default function Index() {
  return (
    <>
      <Head>
        <title>Hugo Vanhove - Développeur Fullstack Junior</title>
        <meta name="description" content="Portfolio de Hugo Vanhove, développeur Javascript spécialisé React et Node avec une aspiration pour la cyber sécurité." />
      </Head>
      <Layout path="index">
        <section className={styles.hero}>
          <h1>Hugo Vanhove</h1>
          <span>Développeur 
            <Typewriter 
              options={{
                autoStart: true,
                loop: true,
                delay: 100,
                strings: [
                  'Passionné ❤️',
                  'Node',
                  'React',
                  'Next',
                  'Electron'
                ]
              }}
            />
          </span>
          <a className={styles.cta} href='/CV_vanhove.pdf' download>Curriculum Vitae <IoCloudUploadOutline /></a>
        </section>
        {/* <section className={styles.about}>
          <h2>Présentation</h2>
          <div>
            <p>Actuellement étudiant à <a rel='noreferrer noopener' className={styles.extern_link} href="https://www.mydigitalschool.com/" target='_blank' >MyDigitalSchool</a> Paris, je suis passioné par le développement informatique.
            </p>
            <p>Je suis un <strong>Développeur FullStack</strong> Javascript Junior.</p>
            <p>J&apos;apprends tous les jours de bonnes pratiques ou de nouvelles methodes pour mieux coder.</p>
            <p>Je maitrise les languages de programmations: <strong>HTML, CSS, BASH, GIT, SQL, Python, Javascript, NodeJS, NextJS et ReactJS.</strong></p>
          </div>
        </section>          */}
        <section className={styles.services}>
          <h2>Stack</h2>
          <div className={styles.flex3}>
            <div>
              <h3>Front-End</h3>
              <p>ReactJS, NextJS</p>
              <IoBrush />
            </div>
            <div>
              <h3>Back-End</h3>
              <p>NodeJS, MongoDB</p>
              <IoConstruct />
            </div>
            <div>
              <h3>Application</h3>
              <p>ElectronJS</p>
              <IoBrowsers />
            </div>
          </div>
        </section>

        <section className={styles.projets}>
          <h2>Dernier projet</h2>
          <article className={styles.flex2}>
            <div className={styles.left}>
              <header>
                <h3>Youclone</h3>
                <p>Voici le clone de Youtube que j'ai réalisé avec NextJS</p>
              </header>
              <footer>
                <Link href="/portfolio/youclone">
                  <a className={styles.cta}>Voir plus</a>
                </Link>
                <a target="_blank" rel="noreferrer noopener" className={styles.iconcta} href="https://github.com/VanhoveHugo/youclone"><IoLogoGithub /></a>
              </footer>
            </div>
            <div className={styles.right}>
              <figure>
                <a target="_blank" rel="noreferrer noopener" href="https://youclone.vercel.app/"><img src="/img/youclone-website-1.webp" alt="Une image du site internet Youclone." /></a>
              </figure>
            </div>
          </article>
        </section>

        <section className={styles.process}>
          <h2>Pourquoi moi ?</h2>
          <div className={styles.flex3}>
            <div>
              <h3>Projets web</h3>
              <p>Landing page, site vitrine, application web.</p>
              <IoFolderOpenOutline />
            </div>
            <div>
              <h3>Développement web</h3>
              <p>Création de site, app sur-mesure, et unique.</p>
              <IoCodeSlashOutline />
            </div>
            <div>
              <h3>Référencement</h3>
              <p>Code optimiser pour le référencement naturel.</p>
              <IoCompassOutline />
            </div>
            <div>
              <h3>Cross-plateforme</h3>
              <p>Site compatible avec tous les supports web.</p>
              <IoDesktopOutline />
            </div>
            <div>
              <h3>Accompagnement</h3>
              <p>Gestion de projets, communication rapide.</p>
              <IoHelpBuoyOutline />
            </div>
            <div>
              <h3>Maintenance web</h3>
              <p>Hébérgement, accessibilité, MAJ de sécurité.</p>
              <IoRocketOutline />
            </div>
          </div>
        </section>
        {/* <section className={styles.contact}>
          <h2>Contact</h2>
          <p>Démarrons un projet ensemble, n'hésitez pas à me contacter sur <a rel='noreferrer noopener' className={styles.extern_link} href="https://www.linkedin.com/in/hugo-code/" target='_blank' >LinkedIn</a></p>
        </section> */}
      </Layout>
    </>
  )
}
