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
            <p>Powered by <a className={styles.extern_link} rel="noreferrer noopener" href="https://www.linkedin.com/in/hugo-code/" target="_blank">HugoVanhove</a></p>
          </footer>
        </motion.main>
    </div>
  )
}
