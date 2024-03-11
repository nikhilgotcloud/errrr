"use client"
import Image from 'next/image';
import React from 'react';
import Printer from '../../public/images/printer/printer.png';
import { useRouter } from 'next/navigation';

const Screenone = () => {
  const router=useRouter();
  const handleClick=()=>{
    router.push('/hp-download')
  }
  
  return (
    <>
      <div className="row">
        <div className='col-1'></div>

        <div className='col-8 w-100' >
          <p style={{ "color": "white" , "fontSize":"30px" }}>Set up your HP Printer</p>
          <br />
          <p style={{ "color": "white" }}>Enter your HP product name and model number to get the right HP Smart <br />
            software and drivers for you
          </p>
          <br /><br />
          
            <div className="col form-group w-100" >
              <input type="text" required className="form-control p-3 rounded mb-3 bg-white text-dark" placeholder="Enter your product name here. Example: 'Lazer' " style={{"width":"90%"}} />
            </div>
            
            
            <button type="button" onClick={handleClick} className="btn rounded border border-white mt-5 py-3 px-5 text-light" style={{ "color": "white" , "width":"30%" }}>Next</button>
          
          
        </div>

        <div className='col-1' style={{"marginLeft":"70%"}}>
          <Image src={Printer} alt={'Hp printer setup'} loading='lazy' width={400} height={400}/>
        </div>

        <div className='col-1'></div>
      </div>

      <div></div>
    </>
  );
};

export default Screenone;
