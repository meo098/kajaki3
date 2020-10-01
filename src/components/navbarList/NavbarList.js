import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavbarList.module.scss'

const NavbarList = ({showNav}) => {
    return (
        <ul className={showNav ? `${styles.navbarList} ${styles.navbarListActive}` : `${styles.navbarList}` }>
                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} to='/about'>O nas</Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} to='/offer'>Oferta</Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link className={styles.navbarLink} to='/contact'>Kontakt</Link>
                </li>
            </ul>
    )
}

export default NavbarList
