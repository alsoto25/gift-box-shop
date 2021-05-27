import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from '../../../styles/components/home/Carousel.module.scss'

export default function SliderComponent({ slidesList }) {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        fade: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        className: `main-content-margin ${styles['slides']}`,
        lazyLoad: true,
        pauseOnHover: true,
    }
    return (
        <Slider {...settings}>
            {slidesList.map((slide, index) => (
                <div key={index}>
                    <img className={styles['slide-img']} src={slide.img.url} alt={slide.img.alt} />
                    {slide.text && (
                        <div
                            className={styles['slide-text']}
                            dangerouslySetInnerHTML={{ __html: slide.text }}
                        />
                    )}
                </div>
            ))}
        </Slider>
    )
}
