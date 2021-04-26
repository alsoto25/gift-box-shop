import Head from 'next/head'
import React, {useState, useEffect} from 'react';
import PageWrapper from '../src/components/global/PageWrapper'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/pages/Home.module.scss'

import { homeResponse } from '../test/homeResponse'
import axios from "axios";

export default function Home() {

    const [images, setImages] = useState([]);

    useEffect(() => {
        //Fetch/Axios Request API
        axios.get('http://localhost:3001/home/getHomeInfo')
            .then(res => {
                console.log('RES',res);
                if(res.request.statusText=="OK"){
                    setImages(res.data.homeResponse)
                }
                else if(res.request.statusText=="INTERNAL_SERVER_ERROR"){
                    console.log('ERROR',res)
                }
            })
            .catch(err => {
                console.log(err)
            })
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
                {images.map((img,index)=>{
                    return(
                        <img key={index} width="100%" height="460vh" src={img.url}/>
                    )
                })}
            </Slider>
        </div>
    </PageWrapper>
}
