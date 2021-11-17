'use strict'
import Header from './Header'
import styles from '../styles/components.module.css'
import { motion } from 'framer-motion'

export default function Layout({ children, path }) {
  return (
    <div className={styles.layout}>
        <Header path={path} />
        <motion.main 
          className={styles.main}
          initial={{x: -200,opacity: 0}}
          animate={{x: 0,opacity: 1}}
          transition={{ duration: .25 }} >
          {children}
          <footer className={styles.footer}>
            <p>© 2021 <a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/hugo-code/">Hugo Vanhove</a>, Tous droits réservés.</p>
            <p>Made with <a rel="noreferrer noopener" target="_blank" href="https://nextjs.org/">Next.js</a></p>
          </footer>
        </motion.main>
    </div>
  )
}
