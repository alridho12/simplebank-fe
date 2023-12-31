import React from 'react'
import styles from '../../styles/Sidebar.module.css'
import logo from '../../assets/image/logo.png'
import myprofile from '../../assets/image/myprofile.png'
import dashboard from '../../assets/image/btndashboard.png'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const SideBar = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
}, []);

  return (
    <div className={`col-2 p-0 ${styles.sidebar}`} data-aos="zoom-out" data-aos-duration="1500">
      <div className='container'>
        <div className={`d-flex justify-content-center container ${styles.imagewrapper}`}>
          <Image
            src={logo}
            alt='logo'
            fill
            priority
          />
        </div>
        <div className={`container d-flex align-items-center p-3 ${styles.containerprofile}`}>
          <div className={`me-3 ${styles.photoprofile}`}>
            <Image
              src={myprofile}
              alt='photoprofile'
              fill
              priority
              className="rounded"
            />
          </div>
          <div >
            <p className={styles.name}>Raja Al Ridho</p>
            <p className={styles.email}>rajaalridho@gmail.com</p>
          </div>
        </div>
        <div className={`mt-4 py-2 ${styles.containernavbutton}`}>
          <Image
            src={dashboard}
            
          />
        </div>
      </div>
    </div>
  )
}

export default SideBar