'use strict'
import styles from '../styles/components.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Layout({ path }) {
    const router = useRouter()
    useEffect(() => {
        const buttons = document.querySelectorAll('.contain-link a')
        buttons.forEach(button => {
            button.addEventListener('mouseover', (e) => {
                let target = e.target.href
                e.preventDefault()
                router.push(target)
            })
        })
    }, [])
    return (
        <>
            <header className={styles.header}>
                <div className="contain-link">
                    <Link href="/">
                            Hugo
                    </Link>
                </div>
                <nav className="contain-link">
                    <Link href="/">
                        <a className={path == "index" ? styles.active : ''}>Accueil</a>
                    </Link>
                    <Link href="/portfolio">
                        <a className={path == "portfolio" ? styles.active : ''}>Portfolio</a>
                    </Link>
                    <Link href="/contact">
                        <a className={path == "contact" ? styles.active : ''}>Contact</a>
                    </Link>
                </nav>
                <div>
                    media
                </div>
            </header>
        </>
    )
}
