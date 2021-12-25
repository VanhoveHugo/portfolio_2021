'use strict'
import Header from './Header'
import styles from '../styles/components.module.css'
import { motion } from 'framer-motion'

export default function Layout({ children, path }) {
  return (
    <div className={styles.layout}>
      <Header path={path} />
      <motion.main 
        className={styles.main}>
        {children}
        <footer className={styles.footer}>
          <p>© 2021 <a rel="noreferrer noopener" className={styles.extern_link} target="_blank" href="https://www.linkedin.com/in/hugo-code/">Hugo Vanhove</a>, Tous droits réservés.</p>
        </footer>
      </motion.main>
    </div>
  )
}
