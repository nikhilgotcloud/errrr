/* eslint-disable @next/next/no-img-element */
"use client"
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import Printer from '../../public/images/printer/printer.png';
import styles from './screenfive.module.scss';


const Screenfive = () => {
  const router = useRouter();
  const handleclick = () => {
    router.push('https://tawk.to/chat/65d76dc09131ed19d97044e2/1hn8o9eg1')
  }
  return (
    <>
      <div className={styles.aboutmain}>
        <div className={styles.screen}>
          <div className="row">
            <div className='col-1'></div>

            <div className='col-8 w-100' >
              <p style={{ "color": "white", "fontSize": "30px" }} >Setup Failed- HP Printer Driver </p>
              <br />
              <p style={{ "color": "white", "fontSize": "22" }} className='ms-2'>HP Printer Driver installation has failed.
              </p>
              <br />
              <p style={{ "color": "white", "fontSize": "20px" }} className='mb-3'>⚠️ Error Code: C-3 IP address not assigned.
              </p>
              <p style={{ "color": "white", "fontSize": "22" }} className='ms-2'>Contact HP support to resolve this problem .
              </p>
              <br />

              <button type="button" className="btn rounded text-white border text-center border-white mt-5 mb-2 py-3 px-4 shadow"
                style={{ "width": "30%" }}>
                <div style={{ "display": "flex", "alignItems": "center" }}>
                  <img src="https://flagcdn.com/us.svg" alt='' width={20} height={20} style={{ "marginRight": "10px" }} />
                  <span>✆ +1-888-276-3805</span>
                </div>
                </button>

              <button type="button" className="btn rounded text-white border text-center border-white mt-5 mb-2 py-3 px-4 shadow ms-2"
                style={{ "width": "30%" }}> 
                <div style={{ "display": "flex", "alignItems": "center" }}>
                  <img src="https://flagcdn.com/gb.svg" alt='' width={20} height={20} style={{ "marginRight": "10px" }} />
                  <span>✆ +44 20 3239 0302</span>
                </div>
                </button>

              <button type="button" onClick={handleclick} className="btn rounded text-white border text-center border-white mt-5 mb-2 py-3 px-4 shadow ms-2" style={{ "width": "30%" }}>Chat with us</button>
              <br /><br />

              <p style={{ "color": "white", "fontSize": "22" }} className='ms-2'>Note: Do not attempt to retry the installation as it can damange the printer and void the product warranty.
              </p>

            </div>

            <div className='col-1' style={{ "marginLeft": "70%" }}>
              <Image src={Printer} alt={'Hp printer setup'} loading='lazy' width={400} height={400} />
            </div>

            <div className='col-1'></div>
          </div>

          <div></div></div></div>
    </>
  );
};

export default Screenfive;
