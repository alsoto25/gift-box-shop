import React, { useState, useEffect } from 'react'
import PageWrapper from '../src/components/global/PageWrapper'
import styles from '/public/styles/pages/About.module.scss'
import { useGetData } from '../src/utils'

export default function AboutMe() {
    const [about, error] = useGetData('http://localhost:3001/about/getAboutInfo')

    return (
        <PageWrapper>
            <div className={`main-content-margin ${styles['about-container']}`}>
                <div className={styles['left-column']}>
                    <img src={about.imagen} />
                </div>
                <div className={styles['right-column']}>
                    <div className={styles['card']}>
                        <h1>About Me</h1>
                        <p>
                            {' '}
                            <strong>Name:</strong> {about.name}
                        </p>
                        <p>
                            {' '}
                            <strong>Experience:</strong> {about.experience}
                        </p>
                        <p>
                            {' '}
                            <strong>Location:</strong> {about.location}
                        </p>
                        <p>{about.texto}</p>
                        <div className={styles['social-container']}>
                            <a href={about.instagram} target="_blank">
                                <img src="/img/social/instagram.png" alt="Instagram"></img>
                            </a>
                            <a href={about.whatsapp} target="_blank">
                                <img src="/img/social/whatsapp.png" alt="WhatsApp"></img>
                            </a>
                            <a href={about.facebook} target="_blank">
                                <img src="/img/social/facebook.png" alt="Facebook"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}
