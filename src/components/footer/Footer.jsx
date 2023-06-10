import React from 'react'
import styles from "./navbar.module.css";
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container} >
      <div> © 2023 Vishwajit vm. Allright reserve </div>
      <div className={styles.social}>
      <Image className={styles.icon} src='/1.png' width={19} height={19} alt='Image not found' />
      <Image className={styles.icon} src='/2.png' width={19} height={19} alt='Image not found' />
      <Image className={styles.icon} src='/3.png' width={19} height={19} alt='Image not found' />
      <Image className={styles.icon} src='/4.png' width={19} height={19} alt='Image not found' />
      </div>
</div>
  )
}

export default Footer
