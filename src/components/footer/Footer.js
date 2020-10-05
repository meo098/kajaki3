import React from 'react'
import styles from './Footer.module.scss'
import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import {RiTeamFill} from 'react-icons/ri'
import {IoIosMail} from 'react-icons/io'
import {MdLocalOffer} from 'react-icons/md'
import { ReactComponent as Facebook } from '../../icons/facebook.svg';
import { ReactComponent as Twitter } from '../../icons/twitter.svg';
import { ReactComponent as Youtube } from '../../icons/youtube.svg';
import { ReactComponent as Instagram } from '../../icons/instagram.svg';
const Footer = () => {
    return (
        <div className={styles.footer} >
            <div className={styles.container}>
                <ul className={styles.navBoxList}>
                 <li><Link to='/'><FaHome className={styles.navIcon}/>Strona główna</Link></li>
                    <li><Link to='/about'><RiTeamFill className={styles.navIcon}/>O nas</Link></li>
                    <li><Link to='/offer'><MdLocalOffer className={styles.navIcon}/>Oferta</Link></li>
                    <li><Link to='/contact'><IoIosMail className={styles.navIcon}/>Kontakt</Link></li>
                </ul>
                <ul className={styles.socialList}>
                    <li><a rel="noopener noreferrer" href="https://www.facebook.com/" target='_blank'><Facebook className={`${styles.icon} ${styles.fb}`}/></a></li>
                    <li><a rel="noopener noreferrer" href="https://www.twitter.com/" target='_blank'><Twitter className={`${styles.icon} ${styles.fb}`}/></a></li>
                    <li><a rel="noopener noreferrer" href="https://www.instagram.com/" target='_blank'><Instagram className={`${styles.icon} ${styles.fb}`}/></a></li>
                    <li><a rel="noopener noreferrer" href="https://www.youtube.com/" target='_blank'><Youtube className={`${styles.icon} ${styles.fb}`}/></a></li>

                </ul>
              
                <p className={styles.copy}>Kajakpol. Copyright © 2020. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
