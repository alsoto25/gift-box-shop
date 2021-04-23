import React, { useRef } from 'react'
import { contactResponse } from '../../../test/contactResponse'
import styles from '../../../styles/components/shop/Review.module.scss'
import Swal from 'sweetalert2'

export default function Review({ isActive, userChoices, steps, basePrice, stepsList }) {
    let total = useRef(0)
    total.current = basePrice

    function handleClick() {
        Swal.fire({
            title: 'Processing request',
            html: 'Loading...',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
            },
            willClose: () => {},
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successful Request',
                    showConfirmButton: true,
                })
                setTimeout(() => {
                    window.location.reload(true)
                }, 3000)
            }
        })
    }
    return (
        <>
            {userChoices['box-contents-dropdown'] && (
                <div
                    className={`${styles['container-main']} ${
                        isActive ? styles['container-main-active'] : ''
                    }`}
                >
                    {isActive && (
                        <aside>
                            <img
                                src={
                                    'https://cdn.shopify.com/s/files/1/0063/5942/products/Rose_Gold_with_Gold_Foil_Beau_Bella_2000x.jpg?v=1591294565'
                                }
                            />
                            <p>{contactResponse.info}</p>
                        </aside>
                    )}
                    <aside>
                        {isActive && <h1>Review</h1>}
                        <section className={`${styles['borderBox']} ${styles['borderBox-top']}`}>
                            <h3>Gift Box Base</h3>
                            <h3>${basePrice}</h3>
                        </section>

                        <div>
                            {steps.map((step, index) => {
                                if (
                                    stepsList.find(
                                        (stp) => stp.id === step.id && step.id !== 'review-step',
                                    )
                                ) {
                                    return (
                                        <div>
                                            <h3>{step.title}</h3>
                                            {step.options &&
                                                step.options.map((option) =>
                                                    option.dropdowns.map((dropdown) => {
                                                        if (
                                                            dropdown.options.find(
                                                                (opt) =>
                                                                    userChoices[dropdown.id] ===
                                                                        opt.id &&
                                                                    dropdown.options.find(
                                                                        (opti) =>
                                                                            userChoices[
                                                                                dropdown.id
                                                                            ] === opti.id,
                                                                    ).price,
                                                            )
                                                        ) {
                                                            let currentPrice =
                                                                dropdown.options.find(
                                                                    (opti) =>
                                                                        userChoices[dropdown.id] ===
                                                                        opti.id,
                                                                ).price + total.current
                                                            total.current = currentPrice
                                                            return (
                                                                <div
                                                                    className={
                                                                        styles['choice-button-line']
                                                                    }
                                                                >
                                                                    <div
                                                                        className={`
                                                                            ${styles['choice-button-line-title']}
                                                                           
                                                                        `}
                                                                    >
                                                                        <span>
                                                                            -{' '}
                                                                            {userChoices[
                                                                                dropdown.id
                                                                            ] &&
                                                                                dropdown.options.find(
                                                                                    (opt) =>
                                                                                        userChoices[
                                                                                            dropdown
                                                                                                .id
                                                                                        ] ===
                                                                                        opt.id,
                                                                                ).title}
                                                                        </span>

                                                                        <span>
                                                                            {userChoices[
                                                                                dropdown.id
                                                                            ] &&
                                                                            dropdown.options.find(
                                                                                (opt) =>
                                                                                    userChoices[
                                                                                        dropdown.id
                                                                                    ] === opt.id,
                                                                            ).price
                                                                                ? '+$' +
                                                                                  dropdown.options.find(
                                                                                      (opt) =>
                                                                                          userChoices[
                                                                                              dropdown
                                                                                                  .id
                                                                                          ] ===
                                                                                          opt.id,
                                                                                  ).price
                                                                                : null}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            )
                                                        } else if (
                                                            dropdown.options.find(
                                                                (opt) =>
                                                                    userChoices[dropdown.id] ===
                                                                    opt.id,
                                                            )
                                                        ) {
                                                            return (
                                                                <div
                                                                    className={`
                                                                            ${styles['choice-button-line-subtitle']}
                                                                        `}
                                                                >
                                                                    <span>
                                                                        -{' ('}
                                                                        {userChoices[dropdown.id] &&
                                                                            dropdown.options.find(
                                                                                (opt) =>
                                                                                    userChoices[
                                                                                        dropdown.id
                                                                                    ] === opt.id,
                                                                            ).title}
                                                                        {')'}
                                                                    </span>
                                                                </div>
                                                            )
                                                        }
                                                    }),
                                                )}
                                        </div>
                                    )
                                } else {
                                    return null
                                }
                            })}
                        </div>

                        {/* <div className={styles['main-box']}>
                            {dataReview.current.map((choice) => (
                                <h4>
                                    {choice[0]}:{choice[1]}
                                </h4>
                            ))}
                        </div> */}
                        <section className={`${styles['borderBox']} ${styles['borderBox-bottom']}`}>
                            <h3>Total</h3>
                            <h3>${total.current}</h3>
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
