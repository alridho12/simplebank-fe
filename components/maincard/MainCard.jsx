import React from 'react'
import styles from '../../styles/MainCard.module.css'
import Image from 'next/image'
import money from '../../assets/image/money.svg'
import wallet from '../../assets/image/wallet.svg'




const MainCard = () => {
  return (
    <div className='col-6 p-0'>
      {/* expenses */}
      <div className='container '>
        <div className={`my-4 py-3 ${styles.expensescard}`}>
          <div className='mb-3 container d-flex align-items-center justify-content-between'>
            <h4 className='main-color fs-4 fw-bold' style={{ margin: "0" }}>All Expenses</h4>
            <div className="dropdown-center">
              <button
                className={`fw-medium py-1 fs-6 ${styles.btnfilter}`}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: '#064061' }}
              >
                Monthly <i className="bi bi-chevron-down ms-2 fs-5"></i>
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href=''>Day</a></li>
                <li><a className="dropdown-item" href=''>Monthly</a></li>
                <li><a className="dropdown-item" href=''>Year</a></li>
              </ul>
            </div>
          </div>
          <div className='row m-0 custom-padding'>
            <div className='col-4'>
              <div className={styles.cardmoneyinfo}>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className={styles.moneycover}>
                    <div className={styles.moneywrapper}>
                      <Image
                        className={styles.icon}
                        src={money}
                        fill
                        priority
                      />
                    </div>
                  </div>
                  <i className="bi bi-chevron-right fs-3 main-color"></i>
                </div>
                <div>
                  <p className={`fs-5 fw-bold main-color mt-4 ${styles.focused}`}>Balance</p>
                  <p className={`fw-medium secondary-color ${styles.focused}`}>April</p>
                  <p className={`fs-4 fw-bold adj-color mt-4 ${styles.focused}`}>$20,129</p>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className={styles.cardmoneyinfo}>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className={styles.moneycover}>
                    <div className={styles.moneywrapper}>
                      <Image
                        className={styles.icon}
                        src={wallet}
                        fill
                        priority
                      />
                    </div>
                  </div>
                  <i className="bi bi-chevron-right fs-3 main-color"></i>
                </div>
                <div>
                  <p className={`fs-5 fw-bold main-color mt-4 ${styles.focused}`}>Income</p>
                  <p className={`fw-medium secondary-color ${styles.focused}`}>April</p>
                  <p className={`fs-4 fw-bold adj-color mt-4 ${styles.focused}`}>$20,129</p>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className={styles.cardmoneyinfo}>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className={styles.moneycover}>
                    <div className={styles.moneywrapper}>
                      <Image
                        className={styles.icon}
                        src={wallet}
                        fill
                        priority
                      />
                    </div>
                  </div>
                  <i className="bi bi-chevron-right fs-3 main-color"></i>
                </div>
                <div>
                  <p className={`fs-5 fw-bold main-color mt-4 ${styles.focused}`}>Expanses</p>
                  <p className={`fw-medium secondary-color ${styles.focused}`}>April</p>
                  <p className={`fs-4 fw-bold adj-color mt-4 ${styles.focused}`}>$20,129</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Quick invoice */}
      <div className='container'>

      </div>
    </div>
  )
}

export default MainCard