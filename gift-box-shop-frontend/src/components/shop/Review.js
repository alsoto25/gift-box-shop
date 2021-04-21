import React, { useRef } from 'react'

import styles from '../../../styles/components/shop/Review.module.scss'
import { contactResponse } from '../../../test/contactResponse'

export default function Review({ isActive, userChoices }) {
    const dataReview = useRef([])
    dataReview.current = []
    for (var key in userChoices) {
        if (key === 'steps') {
            continue
        }
        dataReview.current.push([key, userChoices[key]])
    }
    console.clear()
    console.log(userChoices)
    console.log(dataReview.current)

    function handleClick() {
        alert('pagar!')
    }
    return (
        <>
            {dataReview.current.length > 1 && (
                <div
                    className={`${styles['container-main']} ${
                        isActive ? styles['container-main-active'] : ''
                    }`}
                >
                    {isActive && (
                        <aside>
                            <img
                                src={
                                    'https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg'
                                }
                            />
                            <p>{contactResponse.info}</p>
                        </aside>
                    )}
                    <aside>
                        {isActive && <h1>Review</h1>}
                        <section className={`${styles['borderBox']} ${styles['borderBox-top']}`}>
                            <h3>Gift Box Base</h3>
                            <h3>$10.00</h3>
                        </section>
                        <div className={styles['main-box']}>
                            {dataReview.current.map((choice) => (
                                <h4>
                                    {choice[0]}:{choice[1]}
                                </h4>
                            ))}
                        </div>
                        <section className={`${styles['borderBox']} ${styles['borderBox-bottom']}`}>
                            <h3>Total</h3>
                            <h3>$15.00</h3>
                        </section>
                    </aside>
                </div>
            )}
            {isActive && (
                <button className={styles['review-pay-button']} type="button" onClick={handleClick}>
                    Proceed to Payment
                </button>
            )}
        </>
    )
}
