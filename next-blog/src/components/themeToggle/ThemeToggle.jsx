"use client"

import React, { useState } from 'react';
import styles from './ThemeToggle.module.css';
import Image from 'next/image';
import { ThemeContext } from '../../context/ThemeContext';

function ThemeToggle() {

    const {theme} = useState(ThemeContext);

  return (
    <div className={styles.container}>
        <Image src='/moon.png' alt="moon" width={14} height={14} />
        <div className={styles.ball}></div>
        <Image src="/sun.png" alt='sun' width={14} height={14}/>
    </div>
  )
}

export default ThemeToggle;