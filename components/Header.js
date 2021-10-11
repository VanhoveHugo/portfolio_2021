'use strict'
import styles from '../styles/components.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Layout({ path }) {
    useEffect(() => {
        const button = document.querySelector('header button')
        const menu = document.querySelector('aside')
        button.addEventListener('click', () => {
            menu.classList.toggle(styles.visible)
            button.classList.toggle(styles.close)
        })
    }, [])
    return (
        <>
            <header className={styles.header}>
                <button>
                    <GiHamburgerMenu />
                </button>
                <div className={styles.wrapper}>
                    <h1>Hugo Vanhove</h1>
                    <p>Développeur FullStack JS (Node, React, Next)</p>
                    <p className={styles.status}>A la recherche d'un stage</p>
                </div>
            </header>
            <aside className={styles.menu}>
                <nav>
                    <Link href="../.">
                        <a className={path == 'index' ? styles.active : ''}>
                            Portfolio
                        </a>
                    </Link>
                    <Link href="a-propos">
                        <a className={path == 'about' ? styles.active : ''}>
                            A propos
                        </a>
                    </Link>
                    <Link href="#">
                        <a>
                            Contact
                        </a>
                    </Link>
                    
                   
                    
                </nav>
            </aside>
        </>
    )
}
