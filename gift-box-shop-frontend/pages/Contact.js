import Head from 'next/head'
import PageWrapper from '../src/components/global/PageWrapper'
import styles from "../styles/pages/Contact.module.scss"
import React, {useState, useEffect} from 'react'
import ContactForm from '../src/components/contact/ContactForm'

import { contactResponse } from '../test/contactResponse'

export default function Contact() {

    const [textoAux, setTextoAux] = useState({})

    useEffect(() => {
        //Fetch/Axios Request API
        setTimeout(function () {
            setTextoAux(contactResponse);
        }, 300)
    }, [])

    return (
    <PageWrapper>
        <div className={styles['contact-container']}>
            <div className={styles['left-column']}>
                <ContactForm/>
            </div>
            <div className={styles['right-column']}>
                <div className={styles['card']}>
                    <div>
                        <h1>{textoAux.title}</h1>           
                        <p>{textoAux.info}</p>
                    </div>
                    <img src={textoAux.image}></img>               
                </div>
            </div>
        </div>
    </PageWrapper>
    )
}
