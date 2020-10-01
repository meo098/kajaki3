import React from 'react'
import styles from './ButtonMore.module.scss'
import { Link } from 'react-router-dom'
const ButtonMore = ({ buttonDesc, buttonLink }) => {
    return (
        <Link to={buttonLink}>
            <button className={styles.button}>
                {buttonDesc}
            </button>
        </Link>

    )
}

export default ButtonMore
