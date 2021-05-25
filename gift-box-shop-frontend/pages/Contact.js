import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ContactForm from '../src/components/contact/ContactForm'
import PageWrapper from '../src/components/global/PageWrapper'

import styles from '../styles/pages/Contact.module.scss'

export default function Contact() {
    const [contact, error] = useGetData('http://localhost:3001/contact/getContactInfo')

    return (
        <PageWrapper>
            <div className={`main-content-margin ${styles['contact-container']}`}>
                <div className={styles['left-column']}>
                    <ContactForm />
                </div>
                <div className={styles['right-column']}>
                    <div className={styles['card']}>
                        <div>
                            <h1>{contact.title}</h1>
                            <div>
                                <p>{contact.info}</p>
                            </div>
                        </div>
                        <img src={contact.image}></img>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}
