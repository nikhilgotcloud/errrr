"use client"
import Image from 'next/image';
import React from 'react';
import Printer from '../../public/images/printer/printer.png';
import { useRouter } from 'next/navigation';
import styles from './screentwo.module.scss';


const Screentwo = () => {
  const router=useRouter();
  const handleClick=()=>{
    router.push('/hp-software-download')
  }
  
  return (
    <>
    <div className={styles.aboutmain}>
      <div className={styles.screen}>
      <div className="row">
        <div className='col-1'></div>

        <div className='col-8 w-100' >
          <p style={{ "color": "white" , "fontSize":"30px" }} className='mb-3'>Download your software to start printing</p>
          <br />
          <p style={{ "color": "white" , "fontSize":"22px" }}> 1 . Make sure your printer is powered on.
          </p>
          <br />
          <p style={{ "color": "white" , "fontSize":"22px"}} className='mb-3'> 2 . Select Download to install the recommended printer software to  <br /> complete setup. 
          </p>
        
            
            <button type="button" onClick={handleClick} className="btn rounded bg-white border text-center border-white mt-5 py-3 px-5 shadow" style={{ "color": "#007bb1" , "width":"30%" }}>Download</button>
          
          
        </div>

        <div className='col-1' style={{"marginLeft":"70%"}}>
          <Image src={Printer} alt={'Hp printer setup'} loading='lazy' width={400} height={400}/>
        </div>

        <div className='col-1'></div>
      </div>

      <div></div></div></div>
    </>
  );
};

export default Screentwo;
