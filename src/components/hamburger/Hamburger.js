import React, { useState } from 'react'
import styles from './Hamburger.module.scss'


const Hamburger = ({hamburgerHandler, showNav}) => {



    return (
        <button className={styles.hamburgerButton} onClick={hamburgerHandler} >
            <div className={showNav ? `${styles.hamburger} ${styles.hamburgerActive}` : `${styles.hamburger} ` }></div>
        </button>

    )
}

export default Hamburger
