import React from 'react'
import styles from './Baner.module.scss'
import { Link } from 'react-router-dom'

const Baner = () => {
    return (
        <div className={styles.baner}>
            <header>
                <h1>Sposób na idalny odpoczynek? Szukasz spokoju i kontaktu z naturą? Mamy to wszystko. 
                    <div className={styles.checkUs}>
                        <Link to='/offer'>
                            Sprawdź nas!
                        </Link>
                    </div>
                </h1>
            </header>
        </div>
    )
}

export default Baner
