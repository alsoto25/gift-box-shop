import React from 'react'
import Link from 'next/link'
import styles from '../../../styles/components/home/ShopSocials.module.scss'

export default function ShopSocials({ content, className }) {
    return (
        <div className={`main-content-margin ${className} ${styles['shop-socials-container']}`}>
            <Link href={content.shopCTA.url} passHref>
                <a className={styles['link']}>{content.shopCTA.text}</a>
            </Link>
            <div className={styles['socials-wrapper']}>
                {content.socials.map((social) => (
                    <Link key={social.id} href={social.url} passHref>
                        <a className={styles['social-link']}>
                            <img src={social.img.url} alt={social.img.alt} />
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}
