import React, { useState } from 'react'
import styles from '../../../styles/pages/Contact.module.scss'

export default function ContactForm() {
    const [alertMessage, setAlertMessage] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState('')

    function validation(e) {
        e.preventDefault()

        const emailFormat = new RegExp(
            /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
        )

        if (name === '' || email === '' || message === '') {
            setAlertMessage('Error: All spaces are required.')
            setStatus('error')
            return
        } else if (!emailFormat.test(email)) {
            setAlertMessage('Error: Invalid email.')
            setStatus('error')
            return
        }
        setStatus('sending')
        submitted(e)
    }

    function submitted(e) {
        const request = {
            name: name,
            email: email,
            message: message,
        }

        setTimeout(() => {
            setStatus('complete')
        }, 5000)

        // axios
        //     .post('http://localhost:3001/contact/postContactForm', request)
        //     .then((res) => {
        //         if (res.request.statusText == 'OK') {
        //             setStatus('complete')
        //         } else if (res.request.statusText == 'INTERNAL_SERVER_ERROR') {
        //             setStatus('error')
        //         }
        //     })
        //     .catch((err) => {
        //         setStatus('error')
        //     })
    }

    return (
        <form onSubmit={validation} className={styles['form-container']}>
            <div className={styles['form-title']}>Contact</div>
            <input
                onChange={(e) => {
                    setName(e.target.value)
                }}
                placeholder="Full Name:"
                type="text"
                name="name"
            />

            <input
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                placeholder="Email:"
                type="text"
                name="email"
            />

            <textarea
                onChange={(e) => {
                    setMessage(e.target.value)
                }}
                id="messageText"
                name="message"
                rows="4"
                cols="50"
                placeholder="Message:"
            ></textarea>

            {status === 'error' ? <p className={styles['error']}>{alertMessage}</p> : null}

            <button
                className={`${styles['contact-form-submit']} ${
                    status === 'sending'
                        ? styles['contact-form-submit-sending']
                        : status === 'complete'
                        ? styles['contact-form-submit-complete']
                        : ''
                }`}
                type="submit"
                disabled={status === 'sending' || status === 'complete' ? true : false}
            >
                {status === 'sending' ? 'Sending...' : status === 'complete' ? 'Sent!' : 'Submit'}
            </button>
        </form>
    )
}
