'use strict'
import styles from '../styles/components.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Layout({ title, number, year, path }) {
    return (
        <motion.div
            className={styles.section}
            initial={{x: -200,opacity: 0}}
            animate={{x: 0,opacity: 1}}
            transition={{ delay: 0.75 / number }}
            >
            <Link href={`/projets/${path}`}>
                <a>
                    <h2>{title}</h2>
                    <p>
                        {number}
                        <div className={styles.hr}></div>
                        {year}
                    </p>
                </a>
            </Link>
        </motion.div>
    )
}
