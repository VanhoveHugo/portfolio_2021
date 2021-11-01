'use strict'
import styles from '../styles/components.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

export default function Layout({ path }) {
    useEffect(() => {
        let button = document.querySelector('#headerButton')
        let header = document.querySelector('header')
        button.addEventListener('click', () => {
            header.classList.toggle(styles.headerMobile)
        })

        let desktop = false
        window.addEventListener('resize', (e) => {
            if(window.innerWidth <= 1000 && desktop === true) return !desktop
            if(window.innerWidth >= 1000) {
                desktop = true
                if(header.classList.contains(styles.headerMobile)) 
                return header.classList.remove(styles.headerMobile)
            }
        });
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
                <ul>
                    <li>
                        <a rel='noopener' target="_blank" href="https://www.linkedin.com/in/hugo-code/">
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li>
                        <a rel='noopener' target="_blank" href="https://github.com/VanhoveHugo">
                            <FaGithub />
                        </a>
                    </li>
                </ul>
            </header>
            <button id="headerButton" className={styles.headerButton}>
                <GiHamburgerMenu />
            </button>
        </>
    )
}
