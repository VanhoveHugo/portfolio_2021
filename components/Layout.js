'use strict'
import styles from '../styles/components.module.css'
import Header from './Header'

export default function Layout({children, path}) {
  return (
    <div className={styles.layout}>
        <Header path={path} />
        {children}
    </div>
  )
}
