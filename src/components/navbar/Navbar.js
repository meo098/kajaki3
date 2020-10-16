import React, { useState, useEffect } from 'react'
import Hamburger from '../hamburger/Hamburger'
import { ReactComponent as Logo } from '../../images/logo.svg';
import { Link} from 'react-router-dom'
import styles from './Navbar.module.scss'
import NavbarList from '../navbarList/NavbarList';
import variables from '../../styles/GlobalStyles.module.scss'



const Navbar = () => {
    


    const [scroll, setScroll] = useState(false)

    const scrollHandler = () => {
        let scrolling = true
            if (scrolling) {
                if (window.scrollY > 0) {
                    setScroll(true)
                }
                else {
                    setScroll(false)
                }
            }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])



    const [showNav, setShowNav] = useState(false)


    const hamburgerHandler = () => {
        setShowNav(prev => !prev)
    }

    const checkResize = () => {

        if (window.innerWidth > variables.nav) {
          setShowNav(false)
        }  
    }
  
    useEffect(() => {
        window.addEventListener('resize', checkResize)
        return () => {
            window.removeEventListener('resize', checkResize)
        }
    }, [])



    return (
        <nav className={scroll ? `${styles.navbar} ${styles.scrolled}`: styles.navbar}>
            <div className={styles.logoWrapper}>
                <Link className={styles.navbarLink} to='/'>
                    <Logo className={styles.logo} />
                </Link>
            </div>
            <Hamburger hamburgerHandler={hamburgerHandler} showNav={showNav}/>
            <NavbarList showNav={showNav}/>
            
        </nav>
    )
}

export default Navbar
