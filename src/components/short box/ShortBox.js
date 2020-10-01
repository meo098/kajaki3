import React from 'react'
import styles from './ShortBox.module.scss'
import { Link } from 'react-router-dom'

const ShortBox = ({ data }) => {
    const { title, desc, buttonDesc, buttonLink } = data

    return (
        <div className={styles.shortBox}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.desc}>{desc}</p>
            <Link to={buttonLink}>
                <button className={styles.moreButton}>{buttonDesc}</button>
            </Link>

        </div>
    )
}

export default ShortBox
