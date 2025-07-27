import React from 'react'
import styles from "./Featured.module.css";

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Hey, Lama dev here!</b> Discover my stories and creative ideas</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <img src="./p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo dolore officiis! Inventore debitis molestiae, commodi, perferendis adipisci nemo dicta est optio culpa, ad temporibus sequi blanditiis accusantium. Esse provident dignissimos quibusdam fugit consectetur?</p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured;