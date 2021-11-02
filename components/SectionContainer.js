'use strict'
import styles from '../styles/components.module.css'

export default function Layout({ children }) {
    return (
        <div className={styles.sectionContainer} >
            {children}
        </div>
    )
}
