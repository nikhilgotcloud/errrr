"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Printer from '../../public/images/printer/printer.png';
import { useRouter } from 'next/navigation';
import styles from './screenthree.module.scss';

const Screenthree = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createSheetEntry(formData);
  };

  const createSheetEntry = (data) => {
    fetch("https://sheetdb.io/api/v1/zl7xcnyf3600x", {
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
        router.push('/hp-software-download');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <div className={styles.aboutmain}>
        <div className={styles.screen}>
          <div className="row">
            <div className='col-1'></div>
            <div className='col-lg-8 w-100' >
              <p style={{ "color": "white", "fontSize": "30px" }} className='mb-1'>Kindly verify the below details</p>
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
                  style={{ "width": "120%" }}
                />
                <br /> <br />
                <input
                  type="email"
                  className="form-control p-3 rounded mb-3 bg-white text-dark"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ "width": "120%" }}
                />
                <br /><br />
                <input
                  type="number"
                  className="form-control p-3 rounded mb-3 bg-white text-dark"
                  placeholder="Your Contact No."
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  required
                  style={{ "width": "120%" }}
                />
                <button type="submit" className="btn rounded bg-white border border-white mt-5 py-3 px-5 shadow" style={{ "color": "#007bb1", "width": "30%" }}>Next</button>
              </form>
            </div>
            <div className='col-1' style={{ "marginLeft": "60%" }}>
              <Image src={Printer} alt={'Hp printer setup'} loading='lazy' width={400} height={400} />
            </div>
            <div className='col-1'></div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Screenthree;
