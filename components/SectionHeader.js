'use strict'
import Link from 'next/link'
import styles from '../styles/projets.module.css'
import { motion } from 'framer-motion'

import {BsFillGrid3X3GapFill} from 'react-icons/bs'

export default function Layout({ title, children }) {
    return (
        <>
            <section className={styles.headline}>
                <h1><a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/hugo-code/">Hugo Vanhove</a></h1>
                <p>Développeur Javascript (React, Next, Node, Electron)</p>
                <p>Étudiant chez MyDigitalSchool Paris</p>
            </section>
            <div className={styles.sectionHeader}>
                <motion.div
                    initial={{opacity: 0}} 
                    animate={{opacity: 1}} 
                    >
                    <h1>{title}</h1>
                    <Link href='/portfolio'>
                        <a>
                            <BsFillGrid3X3GapFill /> Retour aux projets
                        </a>
                    </Link>
                </motion.div>
            </div>
        </>
    )
}
