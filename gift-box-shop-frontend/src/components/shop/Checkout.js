import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import styles from '../../../styles/components/shop/Checkout.module.scss'
import { useShopReducer } from '../../utils'

export default function Checkout({ isActive }) {
    const [{ userChoices }] = useShopReducer()
    const [nameFrom, setFromName] = useState('')
    const [nameTo, setToName] = useState('')
    const [email, setEmail] = useState('')
    const [province, setProvince] = useState('')
    const [date, setDate] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [checkoutType, setCheckoutType] = useState('')

    const handlePaypal = () => {
        setCheckoutType('paypal')
    }
    const handleStripe = () => {
        setCheckoutType('stripe')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const obj = {
            userChoices,
            'personal-info': {
                nameFrom,
                nameTo,
                email,
            },
            'delivery-info': {
                date,
                address1,
                address2,
                province,
                zipCode,
            },
        }

        axios
            .post('http://localhost:3001/shopSteps/processPayment', obj)
            .then((res) => {
                if (res.request.statusText == 'OK') {
                    Swal.fire('Success!', 'The order has been placed.', 'success')
                } else if (res.request.statusText == 'INTERNAL_SERVER_ERROR') {
                    Swal.fire(
                        "We couldn't process the payment!",
                        'Please try again later.',
                        'error',
                    )
                }
            })
            .catch(() => {
                Swal.fire("We couldn't process the payment!", 'Please try again later.', 'error')
            })
    }

    return (
        <form
            className={`${styles['checkout']} ${isActive ? styles['checkout-active'] : ''}`}
            action="#"
            onSubmit={handleSubmit}
        >
            <fieldset className={`${styles['checkout-wrapper']} ${styles['info-container']}`}>
                <div className={`${styles['input-container']}`}>
                    <div className={styles['divider']}>
                        <hr />
                        <span className={`${styles['divider-text--title']}`}>
                            Personal Information
                        </span>
                    </div>
                    <div className={styles['input-row']}>
                        <input
                            name="nameFrom"
                            className={styles['input']}
                            type="text"
                            placeholder="From (Name)"
                            value={nameFrom}
                            required
                            onChange={(e) => setFromName(e.value)}
                        />
                        <input
                            name="nameTo"
                            className={styles['input']}
                            type="text"
                            placeholder="To (Name)"
                            value={nameTo}
                            required
                            onChange={(e) => setToName(e.value)}
                        />
                    </div>
                    <input
                        name="email"
                        type="email"
                        className={`${styles['input-row']} ${styles['input']}`}
                        placeholder="Email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.value)}
                    />
                </div>
                <div className={`${styles['input-container']}`}>
                    <div className={styles['divider']}>
                        <hr />
                        <span className={styles['divider-text--title']}>Delivery Information</span>
                    </div>
                    <input
                        name="date"
                        className={`${styles['input-row']} ${styles['input']} ${styles['input-date']}`}
                        type="date"
                        placeholder="Date of Delivery"
                        value={date}
                        required
                        onChange={(e) => setDate(e.value)}
                    />
                    <input
                        name="address1"
                        className={`${styles['input-row']} ${styles['input']}`}
                        type="text"
                        placeholder="Address 1"
                        value={address1}
                        required
                        onChange={(e) => setAddress1(e.value)}
                    />
                    <input
                        name="address2"
                        className={`${styles['input-row']} ${styles['input']}`}
                        type="text"
                        placeholder="Address 2"
                        value={address2}
                        onChange={(e) => setAddress2(e.value)}
                    />
                    <div className={`${styles['input-row']}`}>
                        <select
                            name="province"
                            className={styles['input']}
                            value={province}
                            required
                            onChange={(e) => setProvince(e.value)}
                        >
                            <option value="San José">San José</option>
                            <option value="Heredia">Heredia</option>
                            <option value="Alajuela">Alajuela</option>
                            <option value="Cartago">Cartago</option>
                            <option value="Limón">Limón</option>
                            <option value="Puntarenas">Puntarenas</option>
                            <option value="Guanacaste">Guanacaste</option>
                        </select>
                        <input
                            name="zip"
                            className={styles['input']}
                            placeholder="Zip Code"
                            type="text"
                            value={zipCode}
                            required
                            onChange={(e) => setZipCode(e.value)}
                        />
                    </div>
                </div>
            </fieldset>
            <fieldset className={`${styles['checkout-wrapper']} ${styles['buttons-container']}`}>
                <button
                    className={`${styles['button']} ${styles['button-paypal']}`}
                    type="submit"
                    onClick={handlePaypal}
                    aria-label="Pay with PayPal"
                >
                    <img
                        className={styles['button-img-paypal']}
                        src="img/icons/paypal.png"
                        alt="Paypal Logo"
                    />
                </button>
                <div className={`${styles['divider']} ${styles['divider--hidden-small']}`}>
                    <hr />
                    <span className={`${styles['divider-text--centered']}`}>or</span>
                </div>
                <button
                    className={`${styles['button']} ${styles['button-green']}`}
                    type="submit"
                    onClick={handleStripe}
                >
                    <img
                        className={styles['button-img']}
                        src="img/icons/verified.png"
                        alt="Secure image"
                        width="20"
                        height="20"
                    />
                    Pay with card
                </button>
            </fieldset>
        </form>
    )
}
