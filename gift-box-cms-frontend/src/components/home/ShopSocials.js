import React from 'react'
import styles from '../../styles/components/home/ShopSocials.module.scss'

export default function ShopSocials({ content, className }) {
    return (
        <div className={`main-content-margin ${className} ${styles['shop-socials-container']}`}>
            <a href={content.shopCTA.url} className={styles['link']}>{content.shopCTA.text}</a>
            <div className={styles['socials-wrapper']}>
                {content.socials.map((social) => (
                    <a key={social.id} href={social.url} className={styles['social-link']}>
                        <img src={social.img.url} alt={social.img.alt} />
                    </a>
                ))}
            </div>
        </div>
    )
}
