'use strict'
import styles from '../styles/components.module.css'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { GrClose } from 'react-icons/gr'
import { motion } from 'framer-motion'

export default function Layout({ title, children }) {
    return (
        <div className={`${styles.section} ${styles.header}`}>
            <motion.div
                initial={{x: -200, opacity: 0}} 
                animate={{x: 0, opacity: 1}} 
                transition={{ delay: 0 }}
                >
                <h2>{title}</h2>
            </motion.div>
            <Link href='/portfolio'>
                <a>
                    <motion.div
                        initial={{opacity: 0}} 
                        animate={{opacity: 1}} 
                        transition={{delay: .5}}
                        >
                        <GrClose />
                    </motion.div>
                </a>
            </Link>
        </div>
    )
}
