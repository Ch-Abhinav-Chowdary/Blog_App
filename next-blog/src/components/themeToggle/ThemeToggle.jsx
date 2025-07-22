"use client"

import React, { useContext, useState } from 'react';
import styles from './ThemeToggle.module.css';
import Image from 'next/image';
import { ThemeContext } from '../../context/ThemeContext';

function ThemeToggle() {

    const { toggle, theme } = useContext(ThemeContext);
    console.log(theme)

  return (
    <div className={styles.container} onClick={toggle}>
        <Image src='/moon.png' alt="moon" width={14} height={14} />
        <div className={styles.ball} style={theme === 'dark' ? {backgroundColor: '#0f172a'} : {right: 1,backgroundColor: 'white'}}></div>
        <Image src="/sun.png" alt='sun' width={14} height={14}/>
    </div>
  )
}

export default ThemeToggle;