import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../styles/components/Header.module.scss'

export default function Header() {
    const router = useRouter()

    return (
        <header>
            <nav className={styles.navbar}>
                <Link href="/" passHref>
                    <a className={styles.logo}>
                        Repasa
                        <span className={styles.logoSecondary}>giftbox</span>
                    </a>
                </Link>
                <div className={styles.linksContainer}>
                    <Link href="/" passHref>
                        <a
                            className={`${styles.link} ${
                                router.pathname === '/' ? styles.linkActive : ''
                            }`}
                        >
                            Home
                        </a>
                    </Link>
                    <Link href="/Shop" passHref>
                        <a
                            className={`${styles.link} ${
                                router.pathname === '/Shop' ? styles.linkActive : ''
                            }`}
                        >
                            Shop
                        </a>
                    </Link>
                    <Link href="/Contact" passHref>
                        <a
                            className={`${styles.link} ${
                                router.pathname === '/Contact' ? styles.linkActive : ''
                            }`}
                        >
                            Contact
                        </a>
                    </Link>
                    <Link href="/About" passHref>
                        <a
                            className={`${styles.link} ${
                                router.pathname === '/About' ? styles.linkActive : ''
                            }`}
                        >
                            About
                        </a>
                    </Link>
                </div>
            </nav>
        </header>
    )
}
