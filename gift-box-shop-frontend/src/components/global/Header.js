import Link from 'next/link'
import Menu from './Menu'

import styles from '../../../styles/components/global/Header.module.scss'

export default function Header() {
    return (
        <header>
            <nav className={styles.navbar}>
                <Link href="/" passHref>
                    <a className={styles.logo}>
                        Repasa
                        <span className={styles['logo-secondary']}>giftbox</span>
                    </a>
                </Link>
                <Menu styles={styles} />
            </nav>
        </header>
    )
}
