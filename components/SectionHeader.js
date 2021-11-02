'use strict'
import Link from 'next/link'
import styles from '../styles/components.module.css'
import { motion } from 'framer-motion'

import {BsFillGrid3X3GapFill} from 'react-icons/bs'

export default function Layout({ title, children }) {
    return (
        <div className={styles.sectionHeader}>
            <motion.div
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                >
                <h1>{title}</h1>
                <Link href='/portfolio'>
                    <a>
                        <BsFillGrid3X3GapFill /> Retour au projets
                    </a>
                </Link>
            </motion.div>
        </div>
    )
}
