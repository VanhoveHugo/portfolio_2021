'use strict'
import styles from '../styles/components.module.css'

export default function Layout({ title, month, year }) {
    return (
        <div className={styles.section}>
            <h2>{title}</h2>
            <p>
                {month}
                <div className={styles.hr}></div>
                {year}
             </p>
        </div>
    )
}
