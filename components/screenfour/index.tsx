"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Printer from '../../public/images/printer/printer.png';
import styles from './screenfour.module.scss';
import { MdRadioButtonChecked } from 'react-icons/md';
import { useRouter } from 'next/navigation';

const Screenfour = () => {
  const router = useRouter();

  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [progressText, setProgressText] = useState('Downloading software...');
  const [installingPhase, setInstallingPhase] = useState(false);
  const [installingComplete, setInstallingComplete] = useState(false);

  useEffect(() => {
    if (mounted && filled < 100 && isRunning) {
      const intervalId = setInterval(() => {
        setFilled((prev) => prev + 2);
      }, 50);

      return () => clearInterval(intervalId);
    }
  }, [filled, isRunning, mounted]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsRunning(true);
      setMounted(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (filled >= 100) {
      setIsRunning(false);
      setProgressText('Installing software...');
      setFilled(0);
      setInstallingPhase(true);

      setTimeout(() => {
        setFilled(50);
        setIsRunning(true);
      }, 2000);
    } else if (filled >= 50 && installingPhase && !installingComplete) {
      setIsRunning(false);
      setInstallingComplete(true);

      // Redirect to cannon-download after 2 seconds
      setTimeout(() => {
        router.push('/signup');
      }, 2000);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filled, installingPhase, installingComplete]);

  const progressbarStyle = {
    height: '100%',
    width: `${filled}%`,
    backgroundColor: installingPhase && filled < 50 ? 'blue' : filled >= 50 ? 'green' : 'blue',
    transition: 'width 0.5s',
  };

  return (
    <>
      <div className={styles.aboutmain}>
        <div className={styles.screen}>
          <div className="row">
            <div className='col-1'></div>

            <div className='col-8 w-100' >
              <p style={{ "color": "white", "fontSize": "30px" }} className='mb-5'>Downloading HP Smart Software</p>
              <MdRadioButtonChecked className={`mt-1 mb-3 ${styles.radioicon}`} size={50} style={{ "marginLeft": "10%" }} />
              <p className='mx-2 text-white'> {progressText}</p>
              <div className={styles.progressbar}>
                <div style={progressbarStyle}></div>
                <br /><br />
                
              </div>
              <span className="text-white mt-2 d-flex flex-end" style={{"marginLeft":"80%"}}>{filled}%</span>
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

export default Screenfour;

