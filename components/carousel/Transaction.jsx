import Image from 'next/image';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import myprofile from '../../assets/image/myprofile.png'
import styles from '../../styles/MainCard.module.css'

const Transaction = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <div>
            <Carousel responsive={responsive}>
                <div className={`d-flex justify-content-center align-items-center p-3  ${styles.containerprofiles}`}>
                    <div className={`me-3 ${styles.photoprofile}`}>
                        <Image
                            src={myprofile}
                            alt="photoprofile"
                            fill
                            priority
                            className="rounded"
                        />
                    </div>
                    <div>
                        <p className={styles.name}>Lekan Okeowo</p>
                        <p className={styles.email}>demo@gmail.com</p>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Transaction