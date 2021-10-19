'use strict'
import styles from '../styles/components.module.css'
import Header from './Header'

export default function Layout({ children, path }) {
  return (
    <div className={styles.layout}>
        <Header path={path} />
        {children}
        <footer className={styles.footer}>
          Powered by <a rel="noreferrer" href="https://www.linkedin.com/in/hugo-code/" target="_blank">HugoCode</a>
        </footer>
    </div>
  )
}
