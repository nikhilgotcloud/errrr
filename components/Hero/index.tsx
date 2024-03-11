import React from 'react'
import styles from'./hero.module.scss';
import Screenone from '../screenone';


const Hero = () => {
  return (
    <>
    <div className={styles.aboutmain}>
      <div className={styles.screen}>
        <Screenone />
        
      </div>
    </div>
    </>
  )
}

export default Hero
