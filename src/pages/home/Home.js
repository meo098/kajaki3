import React from 'react'
import styles from'./Home.module.scss'

const home = ({children}) => {
    return (
        <div className={styles.home}>
            {children}        
        </div>
    )
}

export default home
