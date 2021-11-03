'use strict'
import Head from 'next/head'
import styles from '../styles/components.module.css'

import Layout from '../components/Layout'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Hugo Vanhove | Contact</title>
        <meta name="description" content="La page contact du portfolio de Hugo Vanhove." />
      </Head>
      <Layout path="contact">
        <div className={styles.row_container}>
          Bientot...
        </div>
      </Layout>
    </>
  )
}
