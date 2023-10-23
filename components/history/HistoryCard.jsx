import React from 'react'
import styles from '../../styles/History.module.css'
import Image from 'next/image'
import vector from '../../assets/image/vector.png'
import emblem from '../../assets/image/emblem.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const HistoryCard = () => {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, []);

    return (
        <div className='col-4 ps-0' data-aos="zoom-out" data-aos-duration="1500">
            <div className={`container my-4 py-4 ${styles.historycard}`}>
                <h4 className='main-color fw-bold' style={{ margin: "0" }}>My card</h4>
                <div className=' d-flex justify-content-center'>
                    <div className={styles.card} >
                        <Image
                            src={vector}
                            fill
                            priority
                        />
                        <div className=' d-flex justify-content-between align-items-center'>
                            <h6 className='text-light fw-normal'>Name card</h6>
                            <Image
                                src={emblem}
                                width={28}
                                height={15}
                            />
                        </div>
                        <h5 className='text-light fw-semibold'>Raja Al Ridho</h5>
                        <h4 className='text-light fw-semibold text-end custom-margin'>0918 8124 0042 8129</h4>
                        <h6 className='text-light fw-normal text-end m-0'>12/20 - 124</h6>
                    </div>
                </div>
                <hr />
                <div className='d-flex justify-content-between align-content-center'>
                    <h4 className='main-color fw-bold' style={{ margin: "0" }}>Transaction History</h4>
                    <button className='btn adj-color fw-semibold'> See all</button>
                </div>
                <div><p className='fw-medium secondary-color'>13 April 2023</p></div>
                <div className='my-3'>
                    <div className={styles.history}>
                        <div>
                            <p className='fw-bold main-color'>Cash withdraw</p>
                            <p className='fw-medium secondary-color'>13 April 2023</p>
                        </div>
                        <p className='fs-5 fw-bold text-danger'>- $20,129</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HistoryCard