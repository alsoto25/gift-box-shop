import React from 'react'
import styles from '../../../styles/components/home/Testimonials.module.scss'

function Testimonial({ content }) {
    return (
        <div className={styles['testimonial']}>
            <img
                className={styles['testimonial-img']}
                src={content.img.url}
                alt={content.img.alt}
            />
            <div className={styles['testimonial-name']}>{content.name}</div>
            <div className={styles['testimonial-description']}>{content.testimonial}</div>
        </div>
    )
}

export default function Testimonials({ content, className }) {
    // console.log(content.testimonials)
    return (
        <div className={`main-content-padding ${styles['testimonials']} ${className}`}>
            <div className={styles['testimonials-title']}>{content.title}</div>
            <div className={styles['testimonials-wrapper']}>
                {content.testimonialsList.map((testimonial) => (
                    <Testimonial key={testimonial.id} content={testimonial} />
                ))}
            </div>
        </div>
    )
}
