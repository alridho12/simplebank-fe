import React from 'react'
import styles from '../../styles/MainCard.module.css'
import Image from 'next/image'
import money from '../../assets/image/money.svg'
import wallet from '../../assets/image/wallet.svg'
import add from '../../assets/image/add.svg'
import Transaction from '../carousel/Transaction'




const MainCard = () => {
  return (
    <div className='col-6 p-0'>
      {/* expenses */}
      <div className='container'>
        <div className={`my-4 py-4 ${styles.expensescard}`}>
          <div className='mb-3 container d-flex align-items-center justify-content-between'>
            <h4 className='main-color fw-bold' style={{ margin: "0" }}>All Expenses</h4>
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
                  <p className='fs-5 fw-bold main-color mt-5'>Balance</p>
                  <p className='fw-medium secondary-color '>April 2023</p>
                  <p className='fs-4 fw-bold adj-color mt-4'>$20,129</p>
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
                  <p className='fs-5 fw-bold main-color mt-5'>Balance</p>
                  <p className='fw-medium secondary-color '>April 2023</p>
                  <p className='fs-4 fw-bold adj-color mt-4'>$20,129</p>
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
                  <p className='fs-5 fw-bold main-color mt-5'>Balance</p>
                  <p className='fw-medium secondary-color '>April 2023</p>
                  <p className='fs-4 fw-bold adj-color mt-4'>$20,129</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Quick invoice */}
      <div className='container'>
        <div className={` py-4 ${styles.invoicecard}`}>
          <div className='mb-2 container d-flex align-items-center justify-content-between'>
            <h4 className='main-color fw-bold' style={{ margin: "0" }}>Quick Invoice</h4>
            <div className='d-flex align-items-center justify-content-between'>
              <div className={styles.moneycover}>
                <div className={styles.addwrapper}>
                  <Image
                    className={styles.icon}
                    src={add}
                    fill
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <h6 className='main-color fw-medium'>Latest Transaction</h6>
            <Transaction />
            <hr className='my-3 ' />
          </div>
          <div className='container'>
            <form>
              <div className=' d-flex justify-content-between'>
                <div className="my-2">
                  <label className='fw-medium main-color' htmlFor="customername">
                    <h6>Customer name</h6>
                  </label>
                  <br />
                  <input
                    type="text"
                    id="customername"
                    placeholder="Type customer name"
                  />
                </div>
                <div className="my-2">
                  <label className='fw-medium main-color' htmlFor="customeremail">
                    <h6>Customer email</h6>
                  </label>
                  <br />
                  <input
                    type="text"
                    id="customeremail"
                    placeholder="Type customer email"
                  />
                </div>
              </div>
              <div className=' d-flex justify-content-between'>
                <div className="my-2">
                  <label className='fw-medium main-color' htmlFor="itemname">
                    <h6>Item name</h6>
                  </label>
                  <br />
                  <input
                    type="text"
                    id="itemname"
                    placeholder="Type customer name"
                  />
                </div>
                <div className="my-2">
                  <label className='fw-medium main-color' htmlFor="customeremail">
                    <h6>Customer email</h6>
                  </label>
                  <br />
                  <div className="dropdown-center">
                    <button
                      className={`fw-medium py-1 fs-6 text-start px-3  ${styles.btnmount}`}
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ color: '#064061' }}
                    >
                      USD <i className="main-color bi bi-chevron-down ms-2 fs-5"></i>
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href=''>USD</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=' d-flex justify-content-between mt-3'>
                <button className={`btn text-center fs-5 fw-semibold ${styles.btndetail}`}>
                  Add more details
                </button>
                <button className={`btn text-center fs-5 fw-semibold ${styles.btnsubmit}`}>
                  Send money
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCard