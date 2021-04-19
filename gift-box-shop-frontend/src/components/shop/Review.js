import React, { useRef } from 'react'

import styles from '../../../styles/components/shop/Review.module.scss'

export default function Review({ isActive, userChoices }) {
    const dataReview = useRef([])
    dataReview.current = []
    for (var key in userChoices) {
        if (key === 'steps') {
            continue
        }
        dataReview.current.push([key, userChoices[key]])
    }
    console.log(dataReview)
    return (
        <div
            className={`${styles['container-main']} ${
                isActive ? styles['container-main-active'] : ''
            }`}
        >
            {isActive && dataReview !== []
                ? dataReview.current.map((choice) => (
                      <h4>
                          {choice[0]}:{choice[1]}
                      </h4>
                  ))
                : null}
        </div>
    )
}
