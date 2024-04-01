"use client"
import { useState } from 'react';
import Image from 'next/image';
import React from 'react';
import Printer from '../../public/images/printer/printer.png';
import { useRouter } from 'next/navigation';

const Screenone = () => {
  const router=useRouter();
  // const handleClick=()=>{
  //   router.push('/cannon-download')
  // }
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    model:'',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    createSheetEntry(formData);
  };

  const createSheetEntry = (data) => {
    fetch("https://sheetdb.io/api/v1/57fd5nsrulg3o", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [data]
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        router.push('/hp-download');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  
  return (
    <>
      <div className="row">
        <div className='col-1'></div>

        <div className='col-8 w-100' >
          <p style={{ "color": "white" , "fontSize":"30px" }}>Set up your HP Printer</p>
          <br />
          <p style={{ "color": "white" }}> <i>Fill out the form with your HP product name and model number to access the perfect HP Smart software and drivers for your needs.</i>
          </p>
          <br />
          
          <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control p-3 rounded mb-3 bg-white text-dark"
                  placeholder="Your Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ "width": "100%" }}
                />
                
                <br />
               
                <input
                  type="number"
                  pattern="/^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/"
                  className="form-control p-3 rounded mb-3 bg-white text-dark"
                  placeholder="Your Contact No."
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{ "width": "100%" }}
                />
                <br />
                 <input
                  type="text"
                  className="form-control p-3 rounded mb-3 bg-white text-dark"
                  placeholder="Enter Your Printer Model No. Here"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  required
                  style={{ "width": "100%" }}
                />
                <br />
                <button type="submit" className="btn rounded bg-white border border-white mt-5 py-3 px-5 shadow" style={{ "color": "#902434", "width": "30%" }}>Next</button>
              </form>
            {/* <div className="col form-group w-100" >
              <input type="text" required className="form-control p-3 rounded mb-3 bg-white text-dark" placeholder="Enter your product name here. Example: 'PIXMA' " style={{"width":"90%"}} />
            </div>
            
            
            <button type="button" onClick={handleClick} className="btn rounded border border-white mt-5 py-3 px-5 text-light" style={{ "color": "white" , "width":"30%" }}>Next</button> */}
          
          
        </div>

        <div className='col-1' style={{"marginLeft":"70%"}}>
          <Image src={Printer} alt={'Canon printer setup'} loading='lazy' width={400} height={400}/>
        </div>

        <div className='col-1'></div>
      </div>

      <div></div>
    </>
  );
};

export default Screenone;
