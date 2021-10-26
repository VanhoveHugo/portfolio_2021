'use strict'
import styles from '../styles/components.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Layout({ title, delay, desc, path, img }) {
    return (
        <motion.article
            initial={{y: 200,opacity: 0}}
            animate={{y: 0,opacity: 1}}
            transition={{ duration: .25, delay: delay }}
            className={styles.projet} >
            <Link href={`/portfolio/${path}`}>
                <a>
                    <figure>
                        <Image src={img} alt={`Une image de mon projet ${title.toLowerCase()}`} layout="responsive" />
                        <figcaption>Voir plus</figcaption>
                    </figure>
                    <h1>{title}</h1>
                    <p>{desc}</p>         
                </a>
            </Link> 
        </motion.article>
    )
}
