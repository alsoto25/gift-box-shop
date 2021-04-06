import Head from 'next/head'
import React, {useState, useEffect} from 'react';
import PageWrapper from '../src/components/global/PageWrapper'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/pages/Home.module.scss'

import { homeResponse } from '../test/homeResponse'

export default function Home() {

    const [images, setImages] = useState([]);

    useEffect(() => {
        //Fetch/Axios Request API
        setTimeout(function () {
            setImages(homeResponse);
        }, 300)
    }, [])

   const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    fade: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    className: styles['slides'],
    lazyLoad: true,
    pauseOnHover: true,
  };

    return <PageWrapper>
        <div>
            <Slider {...settings}>
                {images.map((img)=>{
                    return(
                        <img width="100%" height="460vh" src={img.url}/>
                    )
                })}
            </Slider>
        </div>
    </PageWrapper>
}
