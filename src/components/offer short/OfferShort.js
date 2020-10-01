import React from 'react'
import ShortBox from '../short box/ShortBox'
import styles from './OfferShort.module.scss'
import { offerData } from '../../pages/home/Data.js'
import ButtonMore from '../button more/ButtonMore'

const OfferShort = () => {
    const { title, desc, buttonDesc, buttonLink } = offerData
    console.log(offerData)
    return (
        <section className={styles.offerShort}>
            <div className={styles.container}>
                <header>
                    <h2 className={styles.title}>{title}</h2>
                </header>
              
                <p className={styles.desc}>{desc}</p>
                <ButtonMore buttonDesc={buttonDesc} buttonLink={buttonLink}/>
                {/* <div className={styles.foto}>

                </div> */}
            </div>

        </section>
    )
}

export default OfferShort
