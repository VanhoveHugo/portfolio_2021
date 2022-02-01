'use strict'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from '../styles/components.module.css'

import { IoMenu, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'

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
                        <a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/hugo-code/">
                            <IoLogoLinkedin /><span>Linekdin</span>
                        </a>
                    </li>
                    <li>
                        <a rel="noreferrer noopener" target="_blank" href="https://github.com/VanhoveHugo">
                            <IoLogoGithub /><span>Github</span>
                        </a>
                    </li>
                </ul>
            </header>
            <button id="headerButton" className={styles.headerButton}>
                <IoMenu />
            </button>
        </>
    )
}
