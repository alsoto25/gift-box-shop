import React, { useState, useEffect } from 'react'
import Carousel from '../src/components/home/Carousel'
import Testimonials from '../src/components/home/Testimonials'
import ShopSocials from '../src/components/home/ShopSocials'

import PageWrapper from '../src/components/global/PageWrapper'
import styles from '../styles/pages/Home.module.scss'

import axios from 'axios'
import homeResponse from '../test/homeResponse'

export default function Home() {
    const [content, setContent] = useState(null)
    // const [content, error] = useGetData('http://localhost:3001/about/getHomeInfo')

    useEffect(() => {
        setContent(homeResponse)
        //Fetch/Axios Request API
        // axios
        //     .get('http://localhost:3001/home/getHomeInfo')
        //     .then((res) => {
        //         // console.log('RES', res)
        //         if (res.request.statusText == 'OK') {
        //             setContent(res.data.homeResponse)
        //         } else if (res.request.statusText == 'INTERNAL_SERVER_ERROR') {
        //             // console.log('ERROR', res)
        //         }
        //     })
        //     .catch((err) => {
        //         // console.log(err)
        //     })
    }, [])

    return (
        <PageWrapper>
            {content && (
                <>
                    <Carousel slides={content.slides} />
                    <Testimonials
                        className={styles['testimonials-container']}
                        content={content.testimonials}
                    />
                    <ShopSocials
                        className={styles['shop-socials-container']}
                        content={content.socials}
                    />
                </>
            )}
        </PageWrapper>
    )
}
