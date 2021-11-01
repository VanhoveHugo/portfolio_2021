'use strict'
import styles from '../styles/components.module.css'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { GrClose } from 'react-icons/gr'
import { motion } from 'framer-motion'

export default function Layout({ children }) {
    return (
        <div className={styles.sectionContainer} >
            {children}
        </div>
    )
}
