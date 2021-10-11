'use strict'
import styles from '../styles/components.module.css'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { GrClose } from 'react-icons/gr'
import { motion } from 'framer-motion'

export default function Layout({ children }) {
    return (
        <motion.div 
            className={styles.container}
            initial={{x: -200, opacity: 0}} 
            animate={{x: 0, opacity: 1}} 
            transition={{ delay: 0.5 }}
            >
            {children}
        </motion.div>
    )
}
