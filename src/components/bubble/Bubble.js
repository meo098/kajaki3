import React from 'react'
import styles from './Bubble.module.scss'

const Bubble = ({ text, imgPath }) => {
    return (
        <div className={styles.bubble}>
            <div className={styles.bubbleBg} style={{backgroundImage: `url(${imgPath})`}}></div>
            <p className={styles.desc}>{text}</p>
        </div>
    )
}

export default Bubble
